<script setup lang="ts">
import { api } from '@/services/api';
import { ref } from 'vue';

const props = defineProps<{ node: any }>()
const emit = defineEmits(['select'])

const isOpen = ref(false)
const isLoaded = ref(false)
const children = ref<any[]>([])

async function toggle() {
    isOpen.value = !isOpen.value;

    if(isOpen.value && !isLoaded.value) {
        children.value = (
            await api.get('/folders', {
                params: {parentId: props.node.id}
            })
        ).data
        isLoaded.value = true
    }
}
</script>

<template>
    <div class="ml-3">
        <div class="cursor-pointer flex items-center gap-1">
            <span @click="toggle">
                {{ isOpen ? '📁' : '📁' }}
            </span>
            <span @click="emit('select', node)">
                {{ node.name }}
            </span>
        </div>

        <div v-if="isOpen">
            <FolderTree
                v-for="child in children"
                :key="child.id"
                :node="child"
                @select="emit('select', $event)"
            />                
        </div>
    </div>
</template>
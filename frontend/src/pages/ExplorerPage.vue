<script setup lang="ts">
import ExplorerRightPanel from '@/component/ExplorerRightPanel.vue';
import FolderTree from '@/component/FolderTree.vue';
import { api } from '@/services/api';
import { onMounted, ref } from 'vue';

const tree = ref([])
const folders = ref([])
const files = ref([])
const searchQuery = ref('')

onMounted(async () => {
    const { data } = (await api.get('/folders'))
    tree.value = data
})

async function onSelect(folder: any) {
    const { data: childFolders }= (await api.get(`/folders/${folder.id}/children`))
    folders.value = childFolders

    const { data: filesData } = (await api.get(`/files/folder/${folder.id}`))
    files.value = filesData
}

async function search(query: string) {
    searchQuery.value = query

    if(!query.trim()) {
        const { data } = await api.get('/folders')
        tree.value = data;
        return
    }

    const { data } = await api.get('/folders/search', {
        params: { q: query }
    });

    tree.value = data
}
</script>

<template>
    <div class="h-screen flex flex-row">
        <div class="w-1/3 border-r overflow-auto p-4">
            <input placeholder="Search folders" 
            class="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            @input="search(($event.target as HTMLInputElement).value)">
            <FolderTree
                v-for="root in tree"
                :key="root.id"
                :node="root"
                @select="onSelect"
            />
        </div>
        <div class="w-2/3 flex p-4 pt-[70px]">
            <ExplorerRightPanel
                :folders="folders"
                :files="files"
            />
        </div>
    </div>
</template>
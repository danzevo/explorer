<script setup lang="ts">
    defineProps<{
        folders: any[]
        files: any[]
    }>()
</script>
<template>
    <div class="flex flex-col items-start justify-start h-full">
        <h3>Folders</h3>
        <div v-for="f in folders" :key="f.id">📁 {{  f.name  }}</div>

        <h3 class="mt-4">Files</h3>
        <div v-for="f in files" :key="f.id">
            📄 {{ f.name }} ({{ f.size }} bytes)
        </div>
    </div>
</template>
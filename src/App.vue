<script lang="ts" setup>
import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectStore } from './stores/ProjectStore'
import MainMenu from '@/components/MainMenu.vue'

const route = useRoute()
const projectStore = useProjectStore()

watch(
  () => route.params.project_id,
  (newProjectId) => {
    if (route.params.project_id) {
      projectStore.currentProjectId = `${newProjectId}`
    } else {
      projectStore.currentProjectId = null
    }
  },
  { immediate: true }
)

onMounted(() => {
  projectStore.fetchProjects()
})
</script>

<template>
  <header class="mb-3">
    <MainMenu />
  </header>

  <main class="mb-3">
    <router-view />
  </main>

  <footer class="fixed-bottom text-center bg-light border-top opacity-50">
    &copy;2024 <a href="https://ciao.ca" target="_blank" class="text-dark">Ciao</a>
  </footer>
</template>

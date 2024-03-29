<script setup lang="ts">
import { computed, ref } from 'vue'
import { useProjectStore } from '../stores/ProjectStore'
import { Marked } from 'marked'
import PageList from '@/components/pageList.vue'
import IssueModal from '@/components/IssueModal.vue'
import PageModal from '@/components/PageModal.vue'
import ProjectInfos from '@/components/ProjectInfos.vue'

const marked = new Marked()
const projectStore = useProjectStore()
const project = computed(() => projectStore.currentProject)
const issueModalVisible = ref<boolean>(false)
const pageModalVisible = ref<boolean>(false)

const showIssueModal = () => {
  issueModalVisible.value = true
}

const hideIssueModal = () => {
  issueModalVisible.value = false
}

const showPageModal = () => {
  pageModalVisible.value = true
}

</script>

<template>
  <div class="d-flex flex-column flex-lg-row gap-3">

    <!-- Description -->
    <section class="flex-grow-1">
      <div v-html="marked.parse(project?.description || '')"></div>
    </section>

    <!-- Summary -->
    <aside
      aria-label="Sommaire"
      class="d-flex flex-column gap-3">

      <!-- DETAILS -->
      <section
        aria-label="Projet"
        class="bg-light p-3">
        <ProjectInfos :project="project" />
      </section>

      <!-- ISSUES OVERVIEW -->
      <section
        aria-labelledby="lbl-problems"
        class="bg-light p-3">

        <!-- ISSUES OVERVIEW - header -->
        <h2 id="lbl-problems">Problèmes <small
            v-if="project?.issues?.length"
            class="text-body-secondary fs-5 fw-1">({{ project.issues.length }})</small></h2>

        <!-- ISSUES OVERVIEW - issues by impact -->
        <dl
          v-if="project?.issues?.length"
          aria-label="Problèmes par niveau de criticité">

          <div class="d-flex">
            <!-- <dt class="flex-grow-1"><i class="bi bi-exclamation-diamond-fill me-2 text-danger"></i>Critiques</dt> -->
            <dt class="flex-grow-1"><i class="bi bi-reception-4 me-2 text-danger"></i>Critique</dt>
            <dd>{{ project?.issuesFilteredBySeverity!('critical').value.length || 'aucun' }}
              <span v-if="project?.issuesFilteredBySeverity('critical').value.length">({{
                Math.floor(project.issuesFilteredBySeverity('critical').value.length / project!.issues!.length * 100.0)
              }}%)
              </span>
            </dd>
          </div>

          <div class="d-flex">
            <!-- <dt class="flex-grow-1"><i class="bi bi-circle-fill me-2 text-primary"></i>Importants</dt> -->
            <dt class="flex-grow-1"><i class="bi bi-reception-3 me-2 text-primary"></i>Important</dt>
            <dd>{{ project && project.issuesFilteredBySeverity &&
              project?.issuesFilteredBySeverity('important').value.length || 'aucun' }}
              <span v-if="project?.issuesFilteredBySeverity('important').value.length">({{
                Math.floor(project.issuesFilteredBySeverity('important').value.length
                  / project!.issues!.length * 100.0) }}%)
              </span>
            </dd>
          </div>

          <div class="d-flex">
            <!-- <dt class="flex-grow-1"><i class="bi bi-circle-half me-2 text-warning"></i>Modérés</dt> -->
            <dt class="flex-grow-1"><i class="bi bi-reception-2 me-2 text-warning"></i>Modéré</dt>
            <dd>{{ project && project.issuesFilteredBySeverity &&
              project?.issuesFilteredBySeverity('moderate').value.length || 'aucun' }}
              <span v-if="project?.issuesFilteredBySeverity('moderate').value.length">({{
                Math.floor(project.issuesFilteredBySeverity('moderate').value.length
                  / project!.issues!.length * 100.0) }}%)
              </span>
            </dd>
          </div>

          <div class="d-flex">
            <!-- <dt class="flex-grow-1"><i class="bi bi-dash-circle me-2 text-warning"></i>Mineurs</dt> -->
            <dt class="flex-grow-1"><i class="bi bi-reception-1 me-2 text-warning"></i>Mineur</dt>
            <dd>{{ project && project.issuesFilteredBySeverity &&
              project?.issuesFilteredBySeverity('minor').value.length
              || 'aucun' }}
              <span v-if="project?.issuesFilteredBySeverity('minor').value.length">({{
                Math.floor(project.issuesFilteredBySeverity('minor').value.length
                  / project!.issues!.length * 100.0) }}%)
              </span>
            </dd>
          </div>
        </dl>

        <p v-else>Aucun problème n'a été saisi pour ce projet</p>

        <div class="d-grid mt-3">
          <button
            type="button"
            class="btn btn-primary btn"
            @click="showIssueModal">
            <!-- <i
              class="bi bi-bug-fill ms-2"
              aria-hidden="true"></i> -->
            <span class="">Ajouter un problème</span>
          </button>
        </div>

      </section>

      <!-- Pages -->
      <section
        aria-labelledby="lbl-pages"
        class="bg-light p-3">
        <h2 id="lbl-pages">
          Pages
          <small
            v-if="project?.pages?.length"
            class="text-body-secondary fs-5 fw-1">({{ project.pages.length }})
          </small>
        </h2>

        <PageList :pages="projectStore.currentProject?.pages" />
        <div class="d-grid mt-3">
          <button
            type="button"
            class="btn btn-primary"
            @click="showPageModal">
            <!-- <i
              class="bi bi-file-earmark-plus-fill ms-2"
              aria-hidden="true"></i> -->
            <span class="d-none d-md-inline">Ajouter une page</span>
          </button>
        </div>
      </section>

    </aside>

  </div>

  <IssueModal
    v-model="issueModalVisible"
    mode="create"
    size="modal-lg"
    @close="hideIssueModal" />

  <PageModal
    v-model="pageModalVisible"
    mode="create" />
</template>

<style>
aside {
  min-width: 30%;
}
</style>
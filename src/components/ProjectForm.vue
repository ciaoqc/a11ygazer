<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import type { IProject } from '@/shared/interfaces.js'
import Multiselect from '@vueform/multiselect'

const tempProject = ref<IProject | null>(null)

const props = defineProps<{
  modelValue: Partial<IProject>
}>()

onMounted(() => {
  tempProject.value = props.modelValue
})

watch(
  () => props.modelValue,
  (newProject) => {
    tempProject.value = newProject
  },
  { deep: true } // pour une comparaison profonde
)
</script>

<template>
  <form
    v-if="tempProject"
    class="needs-validation"
    autocomplete="off">

    <div class="row mb-3">

      <!-- TITLE  -->
      <div class="col">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="project-title"
            v-model="tempProject.title"
            placeholder=""
            required>
          <label
            for="project-title"
            class="form-label">Nom <span class="visually-hidden">du projet</span>
            <span
              class="text-danger"
              aria-hidden="true"> *</span>
          </label>
        </div>
      </div>

      <!-- CLIENT -->
      <div class="col">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="project-client"
            placeholder=""
            v-model="tempProject.client">
          <label
            for="project-client"
            class="form-label">Client</label>
        </div>
      </div>
    </div>


    <!-- CONFORMITY -->
    <div class="form-floating mb-3">
      <select
        id="project-conformity"
        class="form-select"
        placeholder=""
        v-model="tempProject.conformity"

        required>
        <option
          value="SGQRI00820"
          aria-label="essgékuèri zéro zéro huit, 2.0">SGQRI-008 2.0</option>
        <option
          value="WCAG20A"
          aria-label="WÉCAG 2.0 niveau A">WCAG 2.0 niveau A</option>
        <option
          value="WCAG20AA"
          aria-label="WÉCAG 2.0 niveau double A"
          selected>WCAG 2.0 niveau AA</option>
        <option
          value="WCAG20AAA"
          aria-label="WÉCAG 2.0 niveau triple A">WCAG 2.0 niveau AAA</option>
        <option
          value="WCAG21A"
          aria-label="WÉCAG 2.1 niveau A">WCAG 2.1 niveau A</option>
        <option
          value="WCAG21AA"
          aria-label="WÉCAG 2.1 niveau double A">WCAG 2.1 niveau AA</option>
        <option
          value="WCAG21AAA"
          aria-label="WÉCAG 2.1 niveau triple A">WCAG 2.1 niveau AAA</option>
      </select>
      <label
        for="project-conformity"
        class="form-label">Conformité visée <span
          class="text-danger"
          aria-hidden="true">*</span></label>
    </div>

    <!-- DESCRIPTION -->
    <div class="form-floating mb-3">
      <textarea
        class="form-control"
        id="project-description"
        placeholder=""
        rows="4"
        v-model="tempProject.description">
    </textarea>
      <label
        for="project-description"
        class="form-label">Description</label>
    </div>

    <!-- TAGS -->
    <div class="mb-3">
      <label
        class="form-label"
        for="ms-tags">Étiquettes</label>
      <Multiselect
        id="ms-tags"
        mode="tags"
        v-model="tempProject.tags"
        class="form-control"
        placeholder=""
        :options="[
          { value: 'awaiting_validation', label: 'En cours', icon: '', color: '#ff3300' },
          { value: 'paused', label: 'En attente', icon: '', color: '#ff8800' },
          { value: 'verified', label: 'Terminé', icon: '', color: '#ffcc00' },
        ]"
        :searchable="true"
        :create-option="true" />
    </div>

  </form>
  <div v-else>Chargement...</div>
</template>
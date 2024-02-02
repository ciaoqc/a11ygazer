<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import type { IIssue } from '@/shared/interfaces'
import type { TIssueSeverity } from '@/shared/types';
import Multiselect from '@vueform/multiselect'
import { wcagCritera } from '@/shared/constants';

const tempIssue = ref<IIssue | null>({})
const numericImpact = ref<number>(1)
const impactClass = ref<string>()
const impacts: TIssueSeverity[] = ['minor', 'moderate', 'important', 'critical']
const impactLabels: string[] = ['mineur', 'modéré', 'important', 'critique']
const impactLabel = ref<string>()
const msOptions = ref<{ value: string, label: string }[]>([])

const props = defineProps<{
  modelValue: Partial<IIssue>
}>()

onMounted(() => {
  tempIssue.value = props.modelValue
  msOptions.value = wcagCritera.map((criteria) => ({ value: criteria.value, label: criteria.label }))
})

watch(
  () => props.modelValue,
  (newIssue) => {
    tempIssue.value = newIssue

    let severity = tempIssue.value.severity
    numericImpact.value = impacts.findIndex((impact) => impact === severity) + 1
    impactClass.value = `impact-${severity}`
    impactLabel.value = impactLabels[numericImpact.value - 1]
  },
  { deep: true }, // pour une comparaison profonde
)

</script>

<template>
  <form
    v-if="tempIssue"
    class="needs-validation"
    autocomplete="off">

    <div class="row mb-3">

      <div class="col-md-8">
        <!-- TYPE-->
        <div class="form-floating">
          <select
            v-model="tempIssue.type"
            id="issue-type"
            class="form-select">
            <option :value="undefined">Choisir un type</option>
            <option value="keyboard">⌨️ Clavier</option>
            <option value="text_200">🔍️ Texte 200%</option>
            <option value="semantic">🧬 Sémantique</option>
            <option value="focus_visible">👁️ Visibilité focus</option>
            <option value="focus_path">👣 Parcours focus</option>
            <option value="language">👄 Langue</option>
            <option value="replacement_text">🪧 Texte de remplacement</option>
            <option value="label">🏷️ Libellé</option>
            <option value="code">⚙️ Code</option>
            <option value="feedback">🤝 Rétroaction</option>
            <option value="reading">🗣️ Lecture du contenu</option>
            <option value="navigation">🚏 Navigation</option>
            <option value="movement">🌪️ Contenu en mouvement continu</option>
            <option value="video">🎬️ Vidéo</option>
            <option value="hierarchy">🏗️ Ordre hiérarchique</option>
            <option value="read_order">👓️ Ordre de lecture</option>
            <option value="equivalency">🟰 Équivalence</option>
            <option value="behavior">🧫 Comportement</option>
            <option value="linked_informations">🔗 Informations non liées</option>
            <option value="color">🎨 Couleur seule</option>
            <option value="contrast">💡 Taux de contraste</option>
            <option value="error">🐞 Erreur</option>
          </select>
          <label
            for="issue-type"
            class="form-label">Type
            <span class="visually-hidden"> de problème</span>
            <span
              class="text-danger"
              aria-hidden="true">*</span>
          </label>
        </div>
      </div>

      <!-- IMPACT-->
      <div class="col-md-4">
        <div class="form-floating">
          <select
            v-model="tempIssue.severity"
            id="issue-impact"
            class="form-select">
            <option :value="undefined">Choisir</option>
            <option value="minor">⚪️ Mineur</option>
            <option value="moderate">🟡 Modéré</option>
            <option value="important">🟠 Important</option>
            <option value="critical">🔴 Critique</option>
          </select>
          <label
            for="issue-impact"
            class="form-label">Impact
            <span
              class="text-danger"
              aria-hidden="true">*</span>
          </label>
        </div>
      </div>
    </div>

    <!-- TITLE  -->
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="issue-title"
        v-model="tempIssue.title"
        placeholder=""
        aria-describedby="text-title-desc"
        autocomplete="off"
        required>
      <label
        for="issue-title"
        class="form-label">Cible
        <span
          class="text-danger"
          aria-hidden="true">*</span>
      </label>
      <div id="text-title-desc" class="form-text">Composant ou zone de la page concernée.</div>
    </div>

    <!-- SEVERITY BUTTONS HORIZONTAL -->
    <!-- <div class="mb-3">
      <label
        for="issue-type"
        class="form-label">Impact
        <span
          class="text-danger"
          aria-hidden="true">*</span>
      </label>
      <div class="btn-group w-100">
        <input
          type="radio"
          v-model="tempIssue.severity"
          class="btn-check"
          value="minor"
          name="severity2"
          id="opt4"
          autocomplete="off">
        <label
          class="btn btn-light btn-sm text-start"
          for="opt4"><span class="impact impact-minor">Mineur</span></label>
        <input
          type="radio"
          v-model="tempIssue.severity"
          class="btn-check"
          value="moderate"
          name="severity2"
          id="opt3"
          autocomplete="off">
        <label
          class="btn btn-light btn-sm text-start"
          for="opt3"><span class="impact impact-moderate">Modéré</span></label>
        <input
          type="radio"
          v-model="tempIssue.severity"
          class="btn-check"
          value="important"
          name="severity2"
          id="opt2"
          autocomplete="off">
        <label
          class="btn btn-light btn-sm text-start"
          for="opt2"><span class="impact impact-important">Important</span></label>
        <input
          type="radio"
          v-model="tempIssue.severity"
          class="btn-check"
          value="critical"
          name="severity2"
          id="opt1"
          autocomplete="off">
        <label
          class="btn btn-light btn-sm text-start"
          :class="{ btnDanger: true }"
          for="opt1"><span class="impact impact-critical">Critique</span></label>
      </div>
    </div> -->

    <!-- DESCRIPTION -->
    <div class="form-floating mb-3">
      <textarea
        class="form-control"
        id="issue-description"
        placeholder=""
        rows="4"
        v-model="tempIssue.description">
      </textarea>
      <label
        for="issue-description"
        class="form-label">Description du problème</label>
      <div class="form-text">Le formatage MarkDown est pris en charge.</div>
    </div>

    <!-- SOLUTION -->
    <div class="form-floating mb-3">
      <textarea
        class="form-control"
        id="issue-solution"
        placeholder=""
        rows="4"
        v-model="tempIssue.solution">
      </textarea>
      <label
        for="issue-solution"
        class="form-label">Solution proposée</label>
      <div class="form-text">Le formatage MarkDown est pris en charge.</div>
    </div>

    <!-- WCAG -->
    <div class="form-floating mb-3">
      <Multiselect
        id="ms-criteria"
        class="form-control"
        placeholder=""
        mode="tags"
        v-model="tempIssue.wcagCritera"
        :options="msOptions"
        :searchable="true"
        :breakTags="true"></Multiselect>
      <label
        for="ms-criteria"
        class="form-label">Critère(s) WCAG apparenté(s)</label>
    </div>

    <!-- TAGS -->
    <!-- TODO: options en function -->
    <div class="form-floating mb-3">
      <Multiselect
        id="ms-tags"
        class="form-control"
        placeholder=""
        mode="tags"
        v-model="tempIssue.tags"
        :options="[
          { value: 'awaiting_validation', label: 'à vérifier', icon: '', color: '#ff3300' },
          { value: 'paused', label: 'en attente', icon: '', color: '#ff8800' },
          { value: 'verified', label: 'vérifié', icon: '', color: '#ffcc00' },
        ]"
        :searchable="true"
        :createOption="true" />
      <label
        for="ms-tags"
        class="form-label">Étiquette(s)</label>
    </div>

    <details class="mb-3">
      <summary>
        Pages présentant ce problème
      </summary>

      <!-- PAGES -->
      <select
        class="form-select"
        id="select-pages"
        aria-label="Pages présentant ce problème"
        multiple>
        <option value="1">Accueil</option>
        <option value="2">Comment nous joindre</option>
        <option value="3">Détails des activités</option>
      </select>

      <div id="select-pages-desc" class="form-text">Il est possible de choisir plus d'une page en maintenant la touche
        <kbd>Ctrl</kbd>
      </div>

    </details>


    <!-- RESOLVED -->
    <!-- <div class="form-check mb-3">
      <input
        class="form-check-input"
        type="checkbox"
        id="issue-resolved"
        v-model="tempIssue.resolved"
        disabled />
      <label
        for="issue-resolved"
        class="form-label">Résolu</label>
    </div> -->

    <!-- IMAGES -->
    <div class="row mb-3">
      <label
        for="file-images"
        class="col-sm-2 col-form-label">Images</label>
      <div class="col-sm-10">
        <input
          class="form-control"
          type="file"
          id="file-images"
          disabled>
      </div>
    </div>


  </form>
  <div v-else>Chargement...</div>
</template>
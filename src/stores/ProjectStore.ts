"use strict";

import axios, { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import type { IIssue, IPage, IProject as ISharedProject } from '../shared/interfaces'
import type { TIssueSeverity } from '../shared/types'

// const apiUrl = import.meta.env.VUE_APP_API_URL
const apiUrl = `https://accessibilite.ciao.ca/api`

// Interface frontend
interface IProject extends ISharedProject {
  addPage(page: IPage): string,
  addIssue(issue: IIssue): string,
  issuesFilteredBySeverity(severity: TIssueSeverity): Ref<IIssue[]>,
  issuesFilteredByCritera(wcagSC: string): Ref<IIssue[]>
}
function createPageObject(partialPage: Partial<IPage>): IPage {
  const page: IPage = {
    _id: partialPage._id,
    title: partialPage.title || '',
    url: partialPage.url || '',
    description: partialPage.description || '',
    tags: partialPage.tags || [],
    images: partialPage.images || [],
  }
  return page
}

function createIssueObject(partialIssue: Partial<IIssue>): IIssue {
  const issue: IIssue = {
    _id: partialIssue._id,
    title: partialIssue.title,
    description: partialIssue.description,
    resolved: partialIssue.resolved,
    pages: partialIssue.pages,
    type: partialIssue.type,
    wcagCritera: partialIssue.wcagCritera,
    severity: partialIssue.severity,
    solution: partialIssue.solution,
    tags: partialIssue.tags,
    images: partialIssue.images,
  }

  return issue
}

function createProjectObject(partialProject: Partial<IProject>): IProject {
  const project: IProject = {
    _id: partialProject._id,
    title: partialProject.title || 'Nouveau projet',
    description: partialProject.description,
    conformity: partialProject?.conformity || 'WCAG21AA',
    created: partialProject.created,
    closed: partialProject.closed,
    client: partialProject.client,
    tags: partialProject.tags,
    pages: partialProject.pages,
    issues: partialProject.issues,
    images: partialProject.images,

    addPage: (newPage: IPage): string => {
      const page: IPage = createPageObject(newPage)
      project.pages = project.pages?.length
        ? [...project.pages, page]
        : [page]
      return page?._id || '🔴'
    },

    addIssue: (newIssue: IIssue): string => {
      const issue: IIssue = createIssueObject(newIssue)
      project.issues = project.issues?.length
        ? [...project.issues, issue]
        : [issue]
      return issue._id || '🔴'
    },

    issuesFilteredBySeverity: (severity: TIssueSeverity): Ref<IIssue[]> =>
      computed(() =>
        project.issues?.filter(issue =>
          issue.severity === severity) || []
      ),

    issuesFilteredByCritera: (wcagSC: string): Ref<IIssue[]> =>
      computed(() =>
        project.issues?.filter(issue => {
          const critera = issue.wcagCritera?.reduce<string[]>((acc, cur, index, arr) => {
            return [...acc, cur.value]
          }, [])

          return critera?.includes(wcagSC)
        }) || []
      )
  }
  return project
}

/* ------------------------------ PROJECT STORE ----------------------------- */
export const useProjectStore = defineStore('projects', () => {
  const projects = ref<IProject[]>([])
  const currentProjectId = ref<string | null>(null)
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const currentProject = computed(() =>
    projects.value.find((project: IProject) =>
      project._id === currentProjectId.value
    ))

  /* -------------------------------------------------------------------------- */
  /*                                  PROJECTS                                  */
  /* -------------------------------------------------------------------------- */

  // FETCH PROJECTS
  async function fetchProjects() {
    isLoading.value = true
    try {
      const response = await axios.get(`${apiUrl}/projects`)
      projects.value = response.data.map((project: IProject | object) => createProjectObject(project))
      error.value = null
      console.log(`Try...`)
    } catch (err: unknown) {
      const apiError = err as AxiosError
      console.error('Erreur lors de la récupération des projets:', err)
      apiError.message = "🦀 Erreur lors du chargement des projets."
    } finally {
      console.log(`Done.`)
      isLoading.value = false
    }
  }

  // CREATE PROJECT
  async function createProject(project: Partial<IProject>) {
    isLoading.value = true
    try {
      const response = await axios.post(`${apiUrl}/projects`, project)
      const createdProject = createProjectObject(response.data)
      projects.value = [...projects.value, createdProject]
      currentProjectId.value = createdProject._id || null
    } catch (err: unknown) {
      const apiError = err as AxiosError
      console.error(`Erreur lors de la création du projet: ${apiError.message}`)
      error.value = apiError.message || "Erreur lors de la création du projet."
    } finally {
      isLoading.value = false
    }
  }

  // UPDATE PROJECT
  async function updateProject(project: Partial<IProject>) {
    isLoading.value = true
    try {
      const response = await axios.put(`${apiUrl}/projects`, project)
      const updatedProject = createProjectObject(response.data)

      // Update local store
      projects.value.splice(projects.value.findIndex((p) => p._id === project._id), 1, updatedProject)
    } catch (err: unknown) {
      const apiError = err as AxiosError
      console.error(`Erreur lors de la mise à jour du projet: ${apiError.message}`)
      error.value = apiError.message || "Erreur lors de la mise à jour du projet."
    } finally {
      isLoading.value = false
    }
  }

  // DELETE PROJECT
  function deleteProject(id: string) {
    const index = projects.value.findIndex(project => project._id === id)
    if (index !== -1) {
      projects.value.splice(index, 1)
    }
  }

  return {
    projects,
    currentProject,
    currentProjectId,

    fetchProjects,
    createProject,
    updateProject,
    deleteProject,
  }
})

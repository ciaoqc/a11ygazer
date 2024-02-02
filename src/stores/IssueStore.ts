import axios, { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import type { IIssue, IProject } from '../shared/interfaces'
import type { TIssueSeverity } from '../shared/types'


const apiUrl = `https://accessibilite.ciao.ca/api`

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
	/*                                   ISSUES                                   */
	/* -------------------------------------------------------------------------- */

	// CREATE ISSUE
	async function createIssue(issue: Partial<IIssue>) {
		isLoading.value = true
		try {
			const response = await axios.post(`${apiUrl}/projects/${currentProject.value?._id}/issues`, issue)
			const createdIssue = createIssueObject(response.data)

			if (currentProject.value) {
				console.log('CREATEISSUE', currentProject.value?.issues)
				if (currentProject.value?.issues)
					currentProject.value.issues = [...currentProject.value.issues, createdIssue]
				else
					currentProject.value.issues = [createdIssue]
			}
		} catch (err: unknown) {
			const apiError = err as AxiosError
			console.error(`Erreur lors de la création du problème: ${apiError.message}`)
			error.value = apiError.message || "Erreur lors de la création du problème."
		} finally {
			isLoading.value = false
		}
	}

	// UPDATE ISSUE
	async function updateIssue(issue: Partial<IIssue>) {
		isLoading.value = true
		try {
			await axios.put(`${apiUrl}/projects/${currentProject.value?._id}/issues`, issue)
		} catch (err: unknown) {
			const apiError = err as AxiosError
			console.error(`Erreur lors de la mise à jour du projet: ${apiError.message}`)
			error.value = apiError.message || "Erreur lors de la mise à jour du projet."
		} finally {
			isLoading.value = false
		}
	}

	// DELETE ISSUE
	function deleteIssue(id: string) {
		// const index = projects.value.findIndex(issue => issue._id === id)
		// if (index !== -1) {
		//   projects.value.splice(index, 1)
		// }
	}

	return {
		createIssue,
		updateIssue,
		deleteIssue,
	}
})

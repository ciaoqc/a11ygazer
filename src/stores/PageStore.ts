// TODO: PageStore??
import axios, { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import type { IPage } from '../shared/interfaces'

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

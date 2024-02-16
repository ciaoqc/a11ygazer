<script setup lang="ts">

import type { IIssue } from '../shared/interfaces'
import type { TIssueDisplayMode, TIssueSeverity, TIssueSeverityLabel } from '../shared/types'
import { Marked } from 'marked'

const marked = new Marked()

const props = defineProps<{
  issue: IIssue,
  mode?: TIssueDisplayMode,
  index?: number,
}>()

// TODO: Move that thing
const impactLabels: TIssueSeverityLabel = {
  critical: 'critique',
  important: 'sérieux',
  moderate: 'modéré',
  minor: 'mineur',
}

function getImpactClass(impact?: TIssueSeverity): string {
  const impactClass = {
    minor: 'impact impact-right impact-minor',
    moderate: 'impact impact-right impact-moderate',
    important: 'impact impact-right impact-important',
    critical: 'impact impact-right impact-critical'
  }
  return impact ? impactClass[impact] : ''
}

function getCoverImage(filename?: string): string {
  if (filename)
    return `/img/${filename}`
  else
    return `/img/dummy1.png`
}
</script>

<template>
  <!-- LIST -->
  <div role="listitem" v-if="mode === 'listitem'">
    <a href="#" class="text-decoration-none text-black">
      <div class="d-flex flex-column ">

        <div class="d-flex align-items-center">
          <h3 class="card-title flex-grow-1">{{ props.issue.title }}</h3>
          <div class="card-subtitle" :class="getImpactClass(props.issue.severity)"><span class="d-none d-md-inline">
              Problème {{
                impactLabels[props?.issue.severity || 'moderate'] }}
            </span></div>
        </div>
        <p class="text-wrap text-truncate" v-html="marked.parse(props.issue.description || '')"></p>

      </div>
    </a>
  </div>
</template>

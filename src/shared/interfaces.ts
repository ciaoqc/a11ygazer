import type { TIssueSeverity, TTag, TWcagCriteria } from "./types";

export interface IProject {
  _id?: string
  title?: string
  description?: string
  conformity?: string
  created?: Date
  closed?: Date
  client?: string
  tags?: TTag[]
  pageIds?: string[]
  pages?: IPage[]
  issueIds?: string[]
  issues?: IIssue[]
  images?: string[]

  addPage?(page: IPage): string
  addIssue?(issue: IIssue): string
  issuesFilteredBySeverity?(severity: TIssueSeverity | undefined): unknown
  issuesFilteredByCritera?(critera: string | undefined): unknown
}

export interface IPage {
  _id?: string
  title?: string
  url?: string
  description?: string
  images?: string[]
  tags?: TTag[]
}

export interface IIssue {
  _id?: string
  title?: string
  description?: string
  wantedDescription?: string
  solution?: string
  codeCurrent?: string
  codeNew?: string
  resolved?: boolean
  pages?: IPage[]
  type?: string
  wcagCritera?: TWcagCriteria[]
  severity?: TIssueSeverity
  tags?: TTag[]
  images?: string[]
}

export type TTag = { label: string, color: string, icon: string }
export type TIssueSeverity = 'critical' | 'important' | 'moderate' | 'minor'
export type TIssueSeverityLabel = { [key in TIssueSeverity]: string }
export type TIssueDisplayMode = 'default' | 'listitem' | `page` | 'griditem' | 'edit'
export type TIssueWeight = { [key in TIssueSeverity]: number }
export type TWcagCriteria = { version: '2.0' | '2.1', value: string, label: string, level: 'A' | 'AA' | 'AAA' }
export type TWcagCritera = { version: '2.0' | '2.1', label: string, level: 'A' | 'AA' | 'AAA' }
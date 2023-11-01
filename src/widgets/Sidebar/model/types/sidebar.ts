import { ReactNode } from 'react'

export interface SidebarItemType {
	path: string
	text: string
	icon?: ReactNode
	authOnly?: boolean
}

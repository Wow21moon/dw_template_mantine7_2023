import { FC } from 'react'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { SidebarItemType } from '@/widgets/Sidebar/ui/model/types/sidebar'

interface SidebarItemProps {
	item: SidebarItemType
}

export const SidebarItem: FC<SidebarItemProps> = (props) => {
	const { item } = props

	return <AppLink to={item.path}>{item.text}</AppLink>
}

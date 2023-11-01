import { useSidebarItems } from '../../model/selectors/getSidebarItems'
import { useMemo } from 'react'
import { SidebarItem } from '../SidebarItem/SidebarItem'

export const Sidebar = () => {
	const sidebarItemsList = useSidebarItems()

	const itemsList = useMemo(
		() => sidebarItemsList.map((item) => <SidebarItem item={item} key={item.path} />),
		[sidebarItemsList],
	)

	return <div>{itemsList}</div>
}

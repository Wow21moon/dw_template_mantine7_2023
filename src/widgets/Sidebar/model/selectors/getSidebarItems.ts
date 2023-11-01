import { SidebarItemType } from '../types/sidebar'
import { getRouteMain } from '@/shared/consts/router'

export const useSidebarItems = () => {
	const sidebarItemList: SidebarItemType[] = [{ path: getRouteMain(), text: 'Главная' }]

	return sidebarItemList
}

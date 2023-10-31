import { RouteProps } from 'react-router-dom'
import { getRouteMain } from '../../consts/router'
import { MainPage } from '@/pages/MainPage'

export enum AppRoutes {
	MAIN = 'main',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: getRouteMain(),
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath[AppRoutes.MAIN],
		element: <MainPage />,
	},
}

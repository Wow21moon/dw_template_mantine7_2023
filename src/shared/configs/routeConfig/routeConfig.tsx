import { RouteProps } from 'react-router-dom'
import { getRouteMain } from '../../consts/router'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export enum AppRoutes {
	MAIN = 'main',
	//NOT_FOUND_PAGE всегда последний
	NOT_FOUND_PAGE = 'not_found_page',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: getRouteMain(),
	//NOT_FOUND_PAGE всегда последний
	[AppRoutes.NOT_FOUND_PAGE]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath[AppRoutes.MAIN],
		element: <MainPage />,
	},
	//NOT_FOUND_PAGE всегда последний
	[AppRoutes.NOT_FOUND_PAGE]: {
		path: RoutePath[AppRoutes.NOT_FOUND_PAGE],
		element: <NotFoundPage />,
	},
}

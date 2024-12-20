import { RouteProps, Navigate } from 'react-router-dom'
import {
	getRouteAuth,
	getRouteFinish,
	getRouteMain,
	getRouteVoteEmployee,
	getRouteVoteProject,
} from '../../consts/router'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { AuthPage } from '@/pages/AuthPage'
import { VoteProjectPage } from '@/pages/VoteProjectPage'
import { VoteEmployeePage } from '@/pages/VoteEmployeePage'
import { FinishPage } from '@/pages/FinishPage'

export enum AppRoutes {
	MAIN = 'main',
	AUTH = 'auth',
	VOTE_EMPLOYEE = 'vote_employee',
	VOTE_PROJECT = 'vote_project',
	FINISH = 'finish',
	//NOT_FOUND_PAGE всегда последний
	NOT_FOUND_PAGE = 'not_found_page',
}

export type AppRoutesProps = RouteProps & {
	isAuth?: boolean
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: getRouteMain(),
	[AppRoutes.AUTH]: getRouteAuth(),
	[AppRoutes.VOTE_EMPLOYEE]: getRouteVoteEmployee(),
	[AppRoutes.VOTE_PROJECT]: getRouteVoteProject(),
	[AppRoutes.FINISH]: getRouteFinish(),
	//NOT_FOUND_PAGE всегда последний
	[AppRoutes.NOT_FOUND_PAGE]: '*',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath[AppRoutes.MAIN],
		element: <Navigate to={RoutePath.vote_employee} />,
	},
	[AppRoutes.AUTH]: {
		path: RoutePath[AppRoutes.AUTH],
		element: <AuthPage />,
	},
	[AppRoutes.VOTE_PROJECT]: {
		path: RoutePath[AppRoutes.VOTE_PROJECT],
		element: <VoteProjectPage />,
		isAuth: true,
	},
	[AppRoutes.VOTE_EMPLOYEE]: {
		path: RoutePath[AppRoutes.VOTE_EMPLOYEE],
		element: <VoteEmployeePage />,
		isAuth: true,
	},
	[AppRoutes.FINISH]: {
		path: RoutePath[AppRoutes.FINISH],
		element: <FinishPage />,
		isAuth: true,
	},
	//NOT_FOUND_PAGE всегда последний
	[AppRoutes.NOT_FOUND_PAGE]: {
		path: RoutePath[AppRoutes.NOT_FOUND_PAGE],
		element: <NotFoundPage />,
	},
}

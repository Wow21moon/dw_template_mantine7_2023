import { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { getIsAuth } from '@/entities/Session'
import { Navigate } from 'react-router-dom'
import { getRouteAuth } from '@/shared/consts/router'

interface RequireAuthProps {
	children: ReactElement
}

export function RequireAuth({ children }: RequireAuthProps) {
	const isAuth = useSelector(getIsAuth)

	if (!isAuth) {
		return <Navigate to={getRouteAuth()} replace />
	}

	return children
}

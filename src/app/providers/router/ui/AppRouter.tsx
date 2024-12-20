import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesProps, routeConfig } from '@/shared/configs/routeConfig/routeConfig'
import { ScrollToTop } from './ScrollToTop'
import { PageLoader } from '@/widgets/PageLoader'
import { RequireAuth } from './RequireAuth'
import classNames from 'classnames'

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>

		return (
			<Route
				key={route.path}
				path={route.path}
				element={
					<div className={classNames('page-wrapper', route.isAuth ? 'light' : 'dark')}>
						{route.isAuth ? <RequireAuth>{element}</RequireAuth> : element}
					</div>
				}
			/>
		)
	}, [])

	return (
		<>
			<ScrollToTop />
			<Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
		</>
	)
}
export default memo(AppRouter)

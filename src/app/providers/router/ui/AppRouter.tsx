import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '@/shared/configs/routeConfig/routeConfig'
import { PageLoader } from '@/widgets/PageLoader'
import { ScrollToTop } from './ScrollToTop'

const AppRouter = () => (
	<Suspense fallback={<PageLoader />}>
		<ScrollToTop />
		<Routes>
			{Object.values(routeConfig).map(({ element, path }) => (
				<Route key={path} path={path} element={<div>{element}</div>} />
			))}
		</Routes>
	</Suspense>
)

export default AppRouter

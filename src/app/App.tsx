import '@mantine/core/styles.css'
import { AppShell, MantineProvider } from '@mantine/core'
import { theme } from './styles/theme'
import './styles/global.css'
import './styles/fonts.css'
import '@mantine/notifications/styles.css'
import { AppRouter } from '@/app/providers/router'
import { useGetSessionData } from '@/entities/Session'
import { PageLoader } from '@/widgets/PageLoader'
import { Notifications } from '@mantine/notifications'

export default function App() {
	const { isLoading } = useGetSessionData()

	if (isLoading) {
		return (
			<MantineProvider theme={theme} defaultColorScheme="dark">
				<PageLoader />
			</MantineProvider>
		)
	}

	return (
		<MantineProvider theme={theme} defaultColorScheme="dark">
			<Notifications />
			<AppShell>
				<AppShell.Main mih={'100vh'} style={{ display: 'flex' }}>
					<AppRouter />
				</AppShell.Main>
			</AppShell>
		</MantineProvider>
	)
}

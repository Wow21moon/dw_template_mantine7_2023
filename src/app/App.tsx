import '@mantine/core/styles.css'
import { AppShell, Burger, Group, MantineProvider, Skeleton } from '@mantine/core'
import { theme } from './styles/theme'
import { useDisclosure } from '@mantine/hooks'
import { AppRouter } from '@/app/providers/router'

export default function App() {
	const [opened, { toggle }] = useDisclosure()

	return (
		<MantineProvider theme={theme}>
			<AppShell
				header={{ height: 60 }}
				navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
				padding="md"
			>
				<AppShell.Header>
					<Group h="100%" px="md">
						<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
					</Group>
				</AppShell.Header>
				<AppShell.Navbar p="md">
					Navbar
					{Array(15)
						.fill(0)
						.map((_, index) => (
							<Skeleton key={index} h={28} mt="sm" animate={false} />
						))}
				</AppShell.Navbar>
				<AppShell.Main>
					<AppRouter />
				</AppShell.Main>
			</AppShell>
		</MantineProvider>
	)
}

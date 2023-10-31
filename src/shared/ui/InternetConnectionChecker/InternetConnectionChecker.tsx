import { FC, useEffect, useState, ReactNode } from 'react'
import { Box, Center, Text, Title } from '@mantine/core'
import { IconNetworkOff } from '@tabler/icons-react'

interface InternetConnectionCheckerProps {
	children: ReactNode
}

export const InternetConnectionChecker: FC<InternetConnectionCheckerProps> = (props) => {
	const { children } = props

	const [isOnline, setIsOnline] = useState(navigator.onLine)

	useEffect(() => {
		const updateOnlineStatus = () => {
			setIsOnline(navigator.onLine)
		}

		window.addEventListener('online', updateOnlineStatus)
		window.addEventListener('offline', updateOnlineStatus)

		return () => {
			window.removeEventListener('online', updateOnlineStatus)
			window.removeEventListener('offline', updateOnlineStatus)
		}
	}, [])

	if (!isOnline)
		return (
			<Center w={'100%'} mih={'100vh'}>
				<Box>
					<Center>
						<IconNetworkOff size={44} stroke={1} />
					</Center>
					<Title order={2} fz={26} ta={'center'} mb={14}>
						Нет подключения к Интернету
					</Title>
					<Text ta={'center'}>Проверьте подключение к Интернету</Text>
				</Box>
			</Center>
		)

	return <>{children}</>
}

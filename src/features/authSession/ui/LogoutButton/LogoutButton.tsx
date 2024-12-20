import { memo } from 'react'
import { Box, Button } from '@mantine/core'
import { useClearSessionData } from '../../api/authSessionApi'

export const LogoutButton = memo(() => {
	const [clearSession, { isLoading }] = useClearSessionData()

	const handlerLogout = async () => {
		try {
			await clearSession().unwrap()
			window.location.href = 'https://best.relef.ru'
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<Box maw={500}>
			<Button loading={isLoading} onClick={handlerLogout} fullWidth>
				Вернуться на сайт
			</Button>
		</Box>
	)
})

LogoutButton.displayName = 'LogoutButton'

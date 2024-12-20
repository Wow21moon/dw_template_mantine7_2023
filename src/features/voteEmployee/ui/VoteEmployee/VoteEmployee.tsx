import { FC, memo } from 'react'
import { Avatar, Button, Grid, Stack, Text } from '@mantine/core'
import { VoteController } from '@/shared/ui/VoteController/VoteController'
import { useSelector } from 'react-redux'
import { getSession } from '@/entities/Session'
import { useSetSessionData } from '@/features/authSession'
import { Member } from '@/entities/Member/model/types/memberSchema'
interface VoteEmployeeProps {
	activeData: number[]
	data: Member[]
}

export const VoteEmployee: FC<VoteEmployeeProps> = memo(({ activeData, data }) => {
	const [setSession, { isLoading }] = useSetSessionData()

	const session = useSelector(getSession)

	if (activeData.length === 0) {
		return null
	}

	const filteredAvas = data
		.filter((item) => activeData.includes(item.id))
		.map((item) => item.picture)

	const handlerSelect = async () => {
		if (!session) {
			console.log('Сессия отсутствует')
			return
		}

		try {
			await setSession({
				key: 'session',
				value: { ...session, select_members: activeData },
			}).unwrap()
		} catch (error) {
			console.error('Произошла ошибка при выполнении асинхронного запроса', error)
		}
	}

	return (
		<VoteController>
			<Stack>
				<Text ta={'center'}>{`Выбрано ${activeData.length}/3`}</Text>
				<Grid>
					{filteredAvas.map((el, index) => (
						<Grid.Col key={index} span={4}>
							<Avatar src={el} alt={''} />
						</Grid.Col>
					))}
				</Grid>
				<Button
					disabled={activeData.length !== 3}
					onClick={handlerSelect}
					loading={isLoading}
				>
					Проголосовать
				</Button>
			</Stack>
		</VoteController>
	)
})

VoteEmployee.displayName = 'VoteEmployee'

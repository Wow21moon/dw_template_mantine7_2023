import { FC, memo } from 'react'
import { VoteController } from '@/shared/ui/VoteController/VoteController'
import { Project } from '@/entities/Project/model/types/projectSchema'
import { Avatar, Button, Grid, Stack, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { getRouteFinish } from '@/shared/consts/router'
import { useSelector } from 'react-redux'
import { getSession } from '@/entities/Session'
import { useSetSessionData } from '@/features/authSession'

interface VoteProjectProps {
	activeData: number[]
	data: Project[]
}

export const VoteProject: FC<VoteProjectProps> = memo((props) => {
	const { activeData, data } = props

	const navigate = useNavigate()

	const [setSession, { isLoading }] = useSetSessionData()

	const session = useSelector(getSession)

	const handlerSelect = async () => {
		if (!session) {
			console.log('Сессия отсутствует')
			return
		}

		try {
			await setSession({
				key: 'session',
				value: { ...session, select_project: activeData },
			}).unwrap()
			navigate(getRouteFinish())
		} catch (error) {
			console.log(error)
		}
	}

	const filteredAvas = data
		.filter((item) => activeData.includes(item.id))
		.map((item) => item.picture)

	if (activeData.length === 0) {
		return null
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
					onClick={handlerSelect}
					loading={isLoading}
					disabled={activeData.length !== 3}
				>
					Проголосовать
				</Button>
			</Stack>
		</VoteController>
	)
})

VoteProject.displayName = 'VoteProject'

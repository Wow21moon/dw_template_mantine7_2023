import { LogoutButton } from '@/features/authSession'
import { useSendVote } from '@/features/voteAll'
import { useSelector } from 'react-redux'
import { memo, useEffect, useState } from 'react'
import { getSession } from '@/entities/Session'
import { Avatar, Box, Button, Center, Grid, Loader, Stack, Text, Title } from '@mantine/core'
import classes from './FinishPage.module.css'
import { useGetMembersList } from '@/entities/Member'
import { useGetProjectList } from '@/entities/Project'

const FinishPage = () => {
	const session = useSelector(getSession)

	const [error, setError] = useState<string>('')
	const [sendVote, { isLoading }] = useSendVote()
	const [isLoadingInited, setIsLoadingInited] = useState<boolean>(true)

	const { data: memberData } = useGetMembersList()
	const { data: projectData } = useGetProjectList()

	const handleSendVote = async () => {
		if (!session) return
		setError('')

		const { surname, department, select_project, select_members, first_name, last_name } =
			session
		try {
			const response = await sendVote({
				fio: `${first_name} ${last_name} ${surname}`,
				department: Number(department),
				members: select_members,
				projects: select_project,
			}).unwrap()

			if (response.status === 'fail') {
				setError(response.message)
			}

			setIsLoadingInited(false)
		} catch (e: any) {
			console.log('Данные не отправлены:', e)
			setError(e.data.message)
		}
	}

	useEffect(() => {
		if (session?.select_project) {
			handleSendVote()
		}
	}, [session])

	if (isLoading || isLoadingInited) {
		return (
			<div className={classes.wrapper}>
				<Title ta={'center'} c={'orange.8'}>
					Отправляем данные на сервер!
				</Title>
				<Loader type={'dots'} size={'xl'} />
			</div>
		)
	}

	if (error) {
		return (
			<div className={classes.wrapper}>
				<Title ta={'center'} c={'orange.8'} mb={30}>
					К сожалению во время голосования произошла ошибка!
				</Title>
				<Text ta={'center'} fz={'xl'} c={'white'} mb={30}>
					Текст ошибки: {error}
				</Text>
				<Button onClick={handleSendVote}>Попробовать отправить данные ещё раз</Button>
				<Text mt={30} mb={30} fz={'xl'} ta={'center'} c={'white'}>
					Или если хотите начать заного, нажмите на кнопку ниже
				</Text>
				<Center>
					<LogoutButton />
				</Center>
			</div>
		)
	}

	if (!session) return null

	const { select_project, select_members } = session

	const filteredMembers = memberData?.list
		.filter((item) => select_members?.includes(item.id))
		.map((item) => item)

	const filteredProjects = projectData?.list
		.filter((item) => select_project?.includes(item.id))
		.map((item) => item)

	return (
		<div className={classes.wrapper}>
			<div className={classes.card}>
				<Stack>
					<Title ta={'center'}>СПАСИБО! ВАШ ГОЛОС УЧТЁН!</Title>
					<Text ta={'center'} fz={'xl'}>
						Ваш выбор:
					</Text>
					<Grid gutter={'xl'} mb={30}>
						{filteredMembers &&
							filteredMembers.map((el, index) => (
								<Grid.Col key={index} span={{ base: 4 }}>
									<Center mb={15}>
										<Avatar className={classes.ava} src={el.picture} />
									</Center>
									<Text fw={300} ta={'center'} className={classes.name}>
										{el.fio}
									</Text>
								</Grid.Col>
							))}
					</Grid>

					<Grid gutter={'xl'} mb={30}>
						{filteredProjects &&
							filteredProjects.map((el, index) => (
								<Grid.Col key={index} span={{ base: 4 }}>
									<Center mb={15}>
										<Avatar className={classes.ava} src={el.picture} />
									</Center>
									<Text fw={300} ta={'center'} className={classes.name}>
										{el.name}
									</Text>
								</Grid.Col>
							))}
					</Grid>
					<Center>
						<LogoutButton />
					</Center>
				</Stack>
			</div>
		</div>
	)
}

export default memo(FinishPage)

import { Center, Container, Grid, LoadingOverlay, Title } from '@mantine/core'
import { ProjectCard, useGetProjectList } from '@/entities/Project'
import { memo, useCallback, useState } from 'react'
import { VoteProject } from '@/features/voteProject'
import { useSelector } from 'react-redux'
import { getSelectProject, getSession } from '@/entities/Session'
import { Navigate } from 'react-router-dom'
import { getRouteFinish } from '@/shared/consts/router'
import { notifications } from '@mantine/notifications'

const VoteProjectPage = () => {
	const { data, isLoading } = useGetProjectList()

	const selectProject = useSelector(getSelectProject)

	const session = useSelector(getSession)

	const [activeData, setActiveData] = useState<number[]>(selectProject ?? [])

	const handleActive = useCallback((id: number) => {
		setActiveData((prevState) => {
			const index = prevState.indexOf(id)

			if (index === -1) {
				if (prevState.length < 3) {
					return [...prevState, id]
				} else {
					notifications.show({
						title: 'Ошибка',
						message: 'Выбрано максимальное количество сотрудников!',
					})
				}

				return prevState
			} else {
				return prevState.filter((candidateId) => candidateId !== id)
			}
		})
	}, [])

	if (selectProject) {
		return <Navigate to={getRouteFinish()} replace />
	}

	if (isLoading) {
		return <LoadingOverlay />
	}

	if (!data) return null

	return (
		<Container pb={150}>
			<Title ta={'center'} mb={40} c={'white'}>
				ВЫБЕРИТЕ ТРИ ПРОЕКТА ГОДА
			</Title>
			<Grid gutter={{ base: 30 }}>
				{data.list.map((project) => (
					<Grid.Col key={project.id} span={{ base: 12, md: 6 }}>
						<Center h={'100%'}>
							<ProjectCard
								item={project}
								handleActive={() => handleActive(project.id)}
								active={activeData.includes(project.id)}
								disabled={Number(session?.department) === project.department_id}
							/>
						</Center>
					</Grid.Col>
				))}
			</Grid>
			<VoteProject activeData={activeData} data={data.list} />
		</Container>
	)
}

export default memo(VoteProjectPage)

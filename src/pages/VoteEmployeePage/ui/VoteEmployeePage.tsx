import { MemberCard, useGetMembersList } from '@/entities/Member'
import { Container, Grid, LoadingOverlay, Title } from '@mantine/core'
import { memo, useCallback, useState } from 'react'
import { VoteEmployee } from '@/features/voteEmployee'
import { useSelector } from 'react-redux'
import { getSelectMembers, getSession } from '@/entities/Session'
import { Navigate } from 'react-router-dom'
import { getRouteVoteProject } from '@/shared/consts/router'
import { notifications } from '@mantine/notifications'

const VoteEmployeePage = () => {
	const { data, isLoading } = useGetMembersList()

	const session = useSelector(getSession)

	const selectMembers = useSelector(getSelectMembers)

	const [activeData, setActiveData] = useState<number[]>(selectMembers ?? [])

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

	if (selectMembers) {
		return <Navigate to={getRouteVoteProject()} replace />
	}

	if (isLoading) {
		return <LoadingOverlay />
	}

	if (!data) return null

	return (
		<Container pb={150}>
			<Title ta={'center'} mb={40} c={'white'}>
				ВЫБЕРИТЕ ТРЕХ ЛУЧШИХ СОТРУДНИКОВ
			</Title>
			<Grid>
				{data.list.map((member) => (
					<Grid.Col key={member.id}>
						<MemberCard
							disabled={Number(session?.department) === member.department_id}
							item={member}
							handleActive={() => handleActive(member.id)}
							activy={activeData.includes(member.id)}
						/>
					</Grid.Col>
				))}
			</Grid>
			<VoteEmployee activeData={activeData} data={data.list} />
		</Container>
	)
}

export default memo(VoteEmployeePage)

import { FC, memo } from 'react'
import classes from './MemberCard.module.css'
import { Member } from '../../model/types/memberSchema'
import { Avatar, Center, Grid, Group, ScrollArea, Stack, Text, UnstyledButton } from '@mantine/core'
import classNames from 'classnames'
import { IconUsersGroup, IconUserStar } from '@tabler/icons-react'
import { notifications } from '@mantine/notifications'
import { useMediaQuery } from '@mantine/hooks'

interface MemberCardProps {
	item: Member
	handleActive: () => void
	activy: boolean
	disabled: boolean
}

export const MemberCard: FC<MemberCardProps> = memo(({ item, handleActive, activy, disabled }) => {
	const mods = {
		[classes.activy]: activy,
		[classes.disabled]: disabled,
	}

	const modsDescription = {
		[classes.activyDescription]: activy,
		[classes.disabledDesctiprion]: disabled,
	}

	const modsAva = {
		[classes.disabledAva]: disabled,
	}

	const handlerDisabaled = () => {
		notifications.show({
			title: 'Ошибка',
			message: 'Голосовать за своих коллег запрещено по условиям конкурса!',
		})
	}

	const md = useMediaQuery('(max-width: 992px )')

	return (
		<UnstyledButton onClick={disabled ? () => handlerDisabaled() : () => handleActive()}>
			<Grid className={classNames(classes.memberCard, mods)} align={'center'}>
				<Grid.Col span={12}>
					<Text fw={400} fz={22} ta={'center'}>
						{item.fio}
					</Text>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 'content' }}>
					<Center>
						<Avatar
							src={item.picture}
							alt={item.fio}
							className={classNames(classes.ava, modsAva)}
						/>
					</Center>
				</Grid.Col>
				<Grid.Col span={'auto'}>
					<Stack>
						<Group align={'center'} wrap={'nowrap'}>
							<IconUserStar stroke={1} />
							<Text fw={300}>{item.position}</Text>
						</Group>
						<ScrollArea h={md ? 120 : 110}>
							<div className={classNames(classes.description, modsDescription)}>
								{item.description}
							</div>
						</ScrollArea>
						<Group justify={'flex-end'} align={'center'} wrap={'nowrap'} pr={10}>
							<Text fw={300}>{item.department}</Text>
							<IconUsersGroup stroke={1} />
						</Group>
					</Stack>
				</Grid.Col>
			</Grid>
		</UnstyledButton>
	)
})

MemberCard.displayName = 'MemberCard'

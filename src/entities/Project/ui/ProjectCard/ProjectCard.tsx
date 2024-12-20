import { FC, memo } from 'react'
import classNames from 'classnames'
import classes from './ProjectCard.module.css'
import { Project } from '@/entities/Project/model/types/projectSchema'
import { Group, ScrollArea, Stack, Text, UnstyledButton } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useMediaQuery } from '@mantine/hooks'
import { IconUsersGroup } from '@tabler/icons-react'

interface ProjectCardProps {
	item: Project
	handleActive: () => void
	active: boolean
	disabled: boolean
}

export const ProjectCard: FC<ProjectCardProps> = memo(
	({ item, handleActive, active, disabled }) => {
		const mods = {
			[classes.active]: active,
			[classes.disabled]: disabled,
		}

		const modsImgWrapper = {
			[classes.activeImg]: active,
			[classes.disabledImg]: disabled,
		}

		const handlerDisabaled = () => {
			notifications.show({
				title: 'Ошибка',
				message:
					'Голосовать за проекты Вашего департамента запрещено по условиям конкурса!',
			})
		}

		const md = useMediaQuery('(max-width: 992px)')

		return (
			<UnstyledButton
				className={classes.btn}
				onClick={disabled ? () => handlerDisabaled() : () => handleActive()}
			>
				<div className={classNames(classes.projectCard, mods)}>
					<img
						src={item.picture}
						alt={item.name}
						className={classNames(classes.image, modsImgWrapper)}
					/>
					<div className={classes.body}>
						<Stack>
							<Text fw={600} ta={'center'}>
								{item.name}
							</Text>
							<Group wrap={md ? 'wrap' : 'nowrap'}>
								<Text c={'gray.5'}>Руководитель:</Text>
								<Text>{item.fio}</Text>
							</Group>
							<ScrollArea h={150}>
								<Text>{item.description}</Text>
							</ScrollArea>
							<Group justify={'flex-end'} wrap={'nowrap'}>
								<Text fw={300}>{item.department}</Text>
								<IconUsersGroup stroke={1} />
							</Group>
						</Stack>
					</div>
				</div>
			</UnstyledButton>
		)
	},
)

ProjectCard.displayName = 'ProjectCard'

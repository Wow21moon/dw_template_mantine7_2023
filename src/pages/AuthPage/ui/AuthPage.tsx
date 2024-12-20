import classes from './AuthPage.module.css'
import { Group, Image, Text, Title } from '@mantine/core'
import { SessionAuthButton } from '@/features/authSession'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getIsAuth } from '@/entities/Session'
import { Navigate } from 'react-router-dom'
import { getRouteVoteEmployee } from '@/shared/consts/router'
import { AuthForm } from '@/features/authSession/ui/AuthForm/AuthForm'

const AuthPage = () => {
	const isAuth = useSelector(getIsAuth)

	if (isAuth) {
		return <Navigate to={getRouteVoteEmployee()} />
	}

	return (
		/*		<div className={classes.main}>
			<div className={classes.header}>
				<Group justify={'space-between'}>
					<img src="/assets/images/relef_logo.png" alt="LOGO" className={classes.logo} />
					<div className={classes.dateWrapper}>
						<div className={classes.date}>2023</div>
						<img
							src={'/assets/images/shine.png'}
							alt={''}
							className={classes.shineDate}
						/>
					</div>
				</Group>
			</div>
			<div className={classes.body}>
				<Text className={classes.text}>Конкурс</Text>
				<Title className={classes.title}>
					СОТРУДНИК
					<br />
					ГОДА
				</Title>
				<Image
					src={'assets/images/title.svg'}
					alt={'Сотрудник года'}
					className={classes.imgTitle}
				/>
				<Text className={classes.text}>
					Для некоммерческих
					<br />
					подразделений
				</Text>
			</div>
			<div className={classes.footer}>
				<Text className={classes.footerText}>
					ВЫБИРАЙ И ГОЛОСУЙ -<br />
					ТЫ ОПРЕДЕЛЯЕШЬ ДОСТОЙНОГО!
				</Text>
				<img
					src={'/assets/images/imgInBody.png'}
					alt={'Изображение'}
					className={classes.imgInBody}
				/>
			</div>
			<SessionAuthButton />
		</div>*/
		<div className={classes.mainWrapper}>
			<AuthForm />
		</div>
	)
}

export default memo(AuthPage)

import { memo } from 'react'
import { Button, Card, Stack, Text, TextInput } from '@mantine/core'
import { DepartmentSelect } from '@/entities/Department'
import { useNavigate } from 'react-router-dom'
import { useSetSessionData } from '@/features/authSession'
import { useForm } from '@mantine/form'
import { Session } from '@/entities/Session'
import { getRouteVoteEmployee } from '@/shared/consts/router'
import classes from './AuthForm.module.css'
export const AuthForm = memo(() => {
	const navigate = useNavigate()

	const [setSessionData, { isLoading }] = useSetSessionData()

	const form = useForm<Session>({
		initialValues: {
			first_name: '',
			department: '',
			url: '',
			last_name: '',
			surname: '',
		},

		validate: {
			first_name: (value) => (!value?.trim() ? 'Заполните поле' : null),
			last_name: (value) => (!value?.trim() ? 'Заполните поле' : null),
			surname: (value) => (!value?.trim() ? 'Заполните поле' : null),
			department: (value) => (!value?.trim() ? 'Выберите департамент' : null),
		},
	})

	const handlerSetSession = async (values: Session) => {
		try {
			await setSessionData({ key: 'session', value: values }).unwrap()
			navigate(getRouteVoteEmployee())
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<Card className={classes.authForm} maw={600} w={'100%'}>
			<Text ta={'center'} fw={600} fz={'lg'} mb={'lg'}>
				Введите свои данные и примите участие в голосовании
			</Text>
			<form onSubmit={form.onSubmit((values) => handlerSetSession(values))}>
				<Stack>
					<TextInput
						label={'Ваше имя'}
						placeholder={'Введите Ваше имя'}
						{...form.getInputProps('first_name')}
					/>
					<TextInput
						label={'Ваша фамилия'}
						placeholder={'Введите Вашу фамилию'}
						{...form.getInputProps('last_name')}
					/>
					<TextInput
						label={'Ваше отчество'}
						placeholder={'Введите Ваше отчество'}
						{...form.getInputProps('surname')}
					/>
					<DepartmentSelect {...form.getInputProps('department')} />
					<Button type={'submit'} loading={isLoading}>
						Войти
					</Button>
				</Stack>
			</form>
		</Card>
	)
})

AuthForm.displayName = 'AuthForm'

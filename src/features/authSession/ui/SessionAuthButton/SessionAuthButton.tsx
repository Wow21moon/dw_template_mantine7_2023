import { memo } from 'react'
import { Button, Center, Modal, Stack, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DepartmentSelect } from '@/entities/Department'
import { useForm } from '@mantine/form'
import { useSetSessionData } from '@/features/authSession/api/authSessionApi'
import { useNavigate } from 'react-router-dom'
import { getRouteVoteEmployee } from '@/shared/consts/router'
import { Session } from '@/entities/Session'
import classes from './SessionAuthButton.module.css'
export const SessionAuthButton = memo(() => {
	const [opened, { open, close }] = useDisclosure()

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
		<>
			<Center>
				<div className={classes.btnWrapper}>
					<img src={'/assets/images/shine.png'} alt={'shine'} className={classes.shine} />
					<Button onClick={open} size={'xl'} variant={'outline'} w={'100%'}>
						Начать
					</Button>
				</div>
			</Center>

			<Modal opened={opened} onClose={close} centered title={'Заполните форму'}>
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
							Отправить
						</Button>
					</Stack>
				</form>
			</Modal>
		</>
	)
})

SessionAuthButton.displayName = 'SessionAuthButton'

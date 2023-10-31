import { YMInitializer } from 'react-yandex-metrika'

export const YandexMetrika = () => {
	return (
		<div>
			<YMInitializer
				accounts={[82816729]}
				version={'2'}
				options={{
					clickmap: true,
					trackLinks: true,
					accurateTrackBounce: true,
					webvisor: true,
				}}
			/>
		</div>
	)
}

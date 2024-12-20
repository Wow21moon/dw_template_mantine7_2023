import { StateScheme } from '@/app/providers/StoreProvider/config/StateScheme'

export const getSession = (state: StateScheme) => {
	return state.session.session
}

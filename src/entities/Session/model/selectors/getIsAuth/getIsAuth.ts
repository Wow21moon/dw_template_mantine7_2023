import { StateScheme } from '@/app/providers/StoreProvider/config/StateScheme'

export const getIsAuth = (state: StateScheme) => {
	return state.session.isAuth
}

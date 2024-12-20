import { StateScheme } from '@/app/providers/StoreProvider/config/StateScheme'

export const getSelectProject = (state: StateScheme) => {
	return state.session.session?.select_project
}

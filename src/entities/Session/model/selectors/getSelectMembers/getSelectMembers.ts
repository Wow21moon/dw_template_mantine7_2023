import { StateScheme } from '@/app/providers/StoreProvider/config/StateScheme'

export const getSelectMembers = (state: StateScheme) => {
	return state.session.session?.select_members
}

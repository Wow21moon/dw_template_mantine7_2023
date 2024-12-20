import { rtkApi } from '@/shared/api/rtkApi'
import { SessionRequest } from '../model/types/authSessionSchema'

export const authSessionApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		setSessionData: build.mutation<void, SessionRequest>({
			query: (body) => ({
				url: '/session/storage-set',
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'session', id: 'all' }],
		}),
		clearSessionData: build.mutation<void, void>({
			query: () => ({
				url: '/session/storage-clear',
				method: 'GET',
			}),
		}),
	}),
})

export const useSetSessionData = authSessionApi.useSetSessionDataMutation

export const useClearSessionData = authSessionApi.useClearSessionDataMutation

import { rtkApi } from '@/shared/api/rtkApi'
import { SessionResponse } from '../model/types/sessionSchema'

export const sessionApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getSessionData: build.query<SessionResponse, void>({
			query: () => ({
				url: '/session/storage-get',
			}),
			providesTags: () => [{ type: 'session', id: 'all' }],
		}),
	}),
})

export const useGetSessionData = sessionApi.useGetSessionDataQuery

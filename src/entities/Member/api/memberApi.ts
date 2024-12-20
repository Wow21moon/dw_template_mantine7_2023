import { rtkApi } from '@/shared/api/rtkApi'
import { MemberListResponse } from '../model/types/memberSchema'

const memberApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getMembersList: build.query<MemberListResponse, void>({
			query: () => ({
				url: '/member/list',
			}),
		}),
	}),
})

export const useGetMembersList = memberApi.useGetMembersListQuery

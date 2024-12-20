import { rtkApi } from '@/shared/api/rtkApi'
import { VoteAll, VoteAllResponse } from '../model/types/voteAll'

const voteAllApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		sendVote: build.mutation<VoteAllResponse, VoteAll>({
			query: (body) => ({
				url: '/vote/set',
				method: 'POST',
				body,
			}),
		}),
	}),
})

export const useSendVote = voteAllApi.useSendVoteMutation

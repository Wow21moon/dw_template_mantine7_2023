import { rtkApi } from '@/shared/api/rtkApi'
import { ProjectResponse } from '../model/types/projectSchema'

const projectApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getProjectList: build.query<ProjectResponse, void>({
			query: () => ({
				url: '/project/list',
			}),
		}),
	}),
})

export const useGetProjectList = projectApi.useGetProjectListQuery

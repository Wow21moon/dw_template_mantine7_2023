import { rtkApi } from '@/shared/api/rtkApi'
import { DepartmentResponse, TransformedDepartmentResponse } from '../model/types/departmentSchema'

const departmentApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getDepartment: build.query<TransformedDepartmentResponse, void>({
			query: () => ({
				url: '/department/list',
			}),
			transformResponse: (response: DepartmentResponse): TransformedDepartmentResponse => {
				const transformedList = response.list.map((department) => ({
					value: String(department.id),
					label: department.name,
				}))

				return {
					...response,
					list: transformedList,
				}
			},
		}),
	}),
})

export const useGetDepartment = departmentApi.useGetDepartmentQuery

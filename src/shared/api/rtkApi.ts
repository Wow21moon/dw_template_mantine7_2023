import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rtkApi = createApi({
	reducerPath: 'rtkApi',
	tagTypes: ['user'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.yourtunes.net/api/v2',
		prepareHeaders: (headers) => {
			const token = localStorage.getItem('token')
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),
	endpoints: () => ({}),
})

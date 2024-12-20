import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rtkApi = createApi({
	reducerPath: 'rtkApi',
	tagTypes: ['session'],
	baseQuery: fetchBaseQuery({
		baseUrl: `${window.location.origin}/api/v1`,
		credentials: 'include',
	}),
	endpoints: () => ({}),
})

import { createSlice } from '@reduxjs/toolkit'
import { SessionStateScheme } from '../types/sessionSchema'
import { sessionApi } from '../../api/sessionApi'
import { authSessionApi } from '@/features/authSession'

const initialState: SessionStateScheme = {
	session: null,
	isAuth: false,
}

export const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addMatcher(
				sessionApi.endpoints.getSessionData.matchFulfilled,
				(state, { payload }) => {
					if (!payload.result) {
						state.session = null
						state.isAuth = false
					} else {
						state.session = payload.result.session
						state.isAuth = true
					}
				},
			)
			.addMatcher(authSessionApi.endpoints.clearSessionData.matchFulfilled, (state) => {
				state.session = null
				state.isAuth = false
			})
			.addMatcher(authSessionApi.endpoints.setSessionData.matchFulfilled, (state) => {
				state.isAuth = true
			})
	},
})

export const { actions: sessionActions } = sessionSlice
export const { reducer: sessionReducer } = sessionSlice

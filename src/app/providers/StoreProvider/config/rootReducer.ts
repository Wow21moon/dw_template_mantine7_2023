import { combineReducers } from '@reduxjs/toolkit'
import { rtkApi } from '@/shared/api/rtkApi'
import { StateScheme } from './StateScheme'
import { sessionReducer } from '@/entities/Session'

const rootReducer = combineReducers({
	session: sessionReducer,
	[rtkApi.reducerPath]: rtkApi.reducer,
})

export type RootState = StateScheme
export default rootReducer

import { combineReducers } from '@reduxjs/toolkit'
import { rtkApi } from '@/shared/api/rtkApi'
import { StateScheme } from './StateScheme'

const rootReducer = combineReducers({
	[rtkApi.reducerPath]: rtkApi.reducer,
})

export type RootState = StateScheme
export default rootReducer

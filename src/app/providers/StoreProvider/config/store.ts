import { configureStore } from '@reduxjs/toolkit'
import { rtkApi } from '@/shared/api/rtkApi'
import rootReducer from './rootReducer'

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
})

export type AppDispatch = typeof store.dispatch

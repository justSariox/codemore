import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

import { authReducer } from '@/features/auth/auth-slice.ts'

const rootReducer = {
  auth: authReducer,
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})

// @ts-ignore
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

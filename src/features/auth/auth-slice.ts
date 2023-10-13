import { createSlice } from '@reduxjs/toolkit'

import { authApi } from '@/features/auth/auth-api.ts'
import { createAppAsyncThunk } from '@/shared/utils/create-app-async-thunk.ts'

const initialState = {
  isLoggedIn: false,
}

const slice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn
    })
  },
})

const login = createAppAsyncThunk<{ isLoggedIn: boolean }, LoginParamsType>(
  'auth/login',
  async (arg, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
      const res = await authApi.login(arg)

      if (res.data) {
        console.log(res.data)
      }

      return { isLoggedIn: true }
    } catch (err) {
      console.log(err)

      return rejectWithValue(null)
    }
  }
)

type LoginParamsType = {
  userName: string
  password: string
}

export const authReducer = slice.reducer
export const authActions = slice.actions

export const authThunks = { login }

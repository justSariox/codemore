import { instance } from '@/shared/api/base-api.ts'

export const authApi = {
  login(data: LoginParamsType) {
    return instance.post('/login', data)
  },
  register(data: RegisterParamsType) {
    return instance.post('/registration', data)
  },
}

export type LoginParamsType = {
  userName: string
  password: string
}

export type RegisterParamsType = LoginParamsType & {
  repeatPassword: string
  email: string
}

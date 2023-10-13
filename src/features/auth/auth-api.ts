import { instance } from '@/shared/api/base-api.ts'

export const authApi = {
  login(data: LoginParamsType) {
    return instance.post('/login', data)
  },
}

export type LoginParamsType = {
  userName: string
  password: string
}

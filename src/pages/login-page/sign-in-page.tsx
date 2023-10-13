// import { useNavigate } from 'react-router-dom'

import { LoginParamsType } from '@/features/auth/auth-api.ts'
import { authThunks } from '@/features/auth/auth-slice.ts'
import { SignInForm } from '@/shared/components/auth/sign-in-form/sign-in-form.tsx'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts'

export const SignInPage = () => {
  // const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const LoginHandler = (data: LoginParamsType) => {
    dispatch(authThunks.login(data))
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      Sign In Page
      <SignInForm onSubmit={LoginHandler} />
    </div>
  )
}

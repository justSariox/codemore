import { RegisterParamsType } from '@/features/auth/auth-api.ts'
import { authThunks } from '@/features/auth/auth-slice.ts'
import { SignUpForm } from '@/shared/components/auth/sign-up-form/sign-up-form.tsx'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts'

export const SignUpPage = () => {
  const dispatch = useAppDispatch()
  const RegisterHandler = (data: RegisterParamsType) => {
    dispatch(authThunks.register(data))
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      Sign Up Page
      <SignUpForm onSubmit={RegisterHandler} />
    </div>
  )
}

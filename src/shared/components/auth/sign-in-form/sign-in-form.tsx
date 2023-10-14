import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import s from './sign-in-form.module.scss'

import github from '@/shared/images/github-142-svgrepo-com.svg'
import logo from '@/shared/images/photo_2023-10-10_21-50-27-transformed-transformed.png'
import { Button } from '@/shared/ui/button/button.tsx'
import { Card } from '@/shared/ui/card/card.tsx'
import { ControlledCheckbox } from '@/shared/ui/controlled/controlled-checkbox/controlled-checkbox.tsx'
import { ControlledTextField } from '@/shared/ui/controlled/controlled-text-field/controlled-text-field.tsx'
import { Typography } from '@/shared/ui/typography/typography.tsx'

const loginSchema = z.object({
  userName: z.string(),
  password: z.string().min(3, { message: 'password must be 3 character or more' }),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof loginSchema>

type Props = {
  onSubmit: (data: FormValues) => void
}

export const SignInForm = (props: Props) => {
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: '',
      password: '',
      rememberMe: false,
    },
  })

  const onSubmitHandler = handleSubmit(props.onSubmit)

  return (
    <Card className={s.card}>
      <div className={s.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={s.authIcons}>
        <img src={github} alt="github" />
      </div>
      <Typography variant="subtitle1">________________ OR ________________</Typography>
      <form className={s.form} onSubmit={onSubmitHandler}>
        <ControlledTextField label="Логин" name={'userName'} control={control} />
        <ControlledTextField label="Пароль" type="password" name="password" control={control} />
        <ControlledCheckbox label="Запомнить?" control={control} name="rememberMe" />
        <Typography className={s.forgotLink} variant="body2" as={Link} to="/recover">
          Забыли пароль?
        </Typography>
        <Button className={s.loginButton} variant="primary" fullWidth type="submit">
          Войти
        </Button>
        <Typography variant="body2" className={s.signupLink}>
          Нет аккаунта?
          <Typography as={Link} to="/sign-up" variant="link2">
            Зарегистрируйтесь
          </Typography>
        </Typography>
      </form>
    </Card>
  )
}

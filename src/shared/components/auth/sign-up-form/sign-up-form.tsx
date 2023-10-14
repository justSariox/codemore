import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import s from './sign-up-form.module.scss'

import github from '@/shared/images/github-142-svgrepo-com.svg'
import logo from '@/shared/images/photo_2023-10-10_21-50-27-transformed-transformed.png'
import { Button } from '@/shared/ui/button/button.tsx'
import { Card } from '@/shared/ui/card/card.tsx'
import { ControlledTextField } from '@/shared/ui/controlled/controlled-text-field/controlled-text-field.tsx'
import { Typography } from '@/shared/ui/typography/typography.tsx'

const registerSchema = z
  .object({
    userName: z.string(),
    email: z.string().email(),
    password: z.string().min(3, { message: 'password must be 3 character or more' }),
    repeatPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.repeatPassword) {
      ctx.addIssue({
        message: 'Пароли не совпадают',
        code: z.ZodIssueCode.custom,
        path: ['repeatPassword'],
      })
    }

    return data
  })

type FormType = z.infer<typeof registerSchema>

type Props = {
  onSubmit: (data: Omit<FormType, 'repeatPassword'>) => void
}

export const SignUpForm = (props: Props) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  })

  const onSubmitHandler = handleSubmit(props.onSubmit)

  return (
    <Card className={s.card}>
      <div className={s.logo}>
        <img src={logo} alt={''} />
      </div>
      <div className={s.authIcons}>
        <img src={github} alt="github" />
      </div>
      <Typography variant="subtitle1">________________ OR ________________</Typography>
      <form className={s.form} onSubmit={onSubmitHandler}>
        <ControlledTextField label="Логин" name={'userName'} control={control} />
        <ControlledTextField label="Эмейл" name={'email'} control={control} />
        <ControlledTextField label="Пароль" type="password" name="password" control={control} />
        <ControlledTextField
          label="Пароль2"
          type="password"
          name="repeatPassword"
          control={control}
        />
        <Button className={s.loginButton} variant="primary" fullWidth type="submit">
          Зарегистрироваться
        </Button>
        <Typography variant="body2" className={s.signupLink}>
          Уже зарегистрированы?
          <Typography as={Link} to="/sign-in" variant="link2">
            Войти
          </Typography>
        </Typography>
      </form>
    </Card>
  )
}

import React, { useState } from 'react'
import Button from '../Button.jsx'
import Input from './Input.jsx'
import Icon from '../Icon.jsx'
import { registerUserSchema } from '../../schemas/users/registerUserSchema.js'
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerUserService } from '../../services/fetchApi.js'
import Form from './Form.jsx'

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(registerUserSchema) })
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async data => {
    try {
      setIsLoading(true)

      const message = await registerUserService(data)

      const params = new URLSearchParams({
        type: 'success',
        message,
      })

      navigate(`/login?${params.toString()}`)
      toast.info('Comprueba tu correo para activar tu cuenta')
    } catch (error) {
      toast.error(error.message || 'Error al registrar el usuario')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form className='login-form' handleSubmit={handleSubmit(onSubmit)}>
      <Input label='User Name' name='username' errors={errors} register={register} />
      <Input label='Email' type='email' name='email' errors={errors} register={register} />
      <Input label='Password' type='password' name='password' errors={errors} register={register} />
      <Button id='login' className='submit' type='submit' isLoading={isLoading}>
        <Icon name='send' />
        <span className='text'>Register</span>
      </Button>
    </Form>
  )
}

export default RegisterForm

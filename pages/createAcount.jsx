import { createUser } from '@/lib/api'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'

export default function CreateAcount() {
  const [user, setUser] = useState({})

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    reset
  } = useForm()

  const onSubmit = (data) => {
    createUser({
      name: data.name,
      profilePicture: data.profilePicture,
      email: data.email,
      password: data.password
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(err.message)
          })
        }
        return response.json()
      })
      .then((json) => {
        console.log('Response json:', json)
        if (json?.data) {
          setUser(json.data)
          toast.success('User created successfully')
          reset()
        } else {
          toast.error('Failed to create user')
          reset()
        }
      })
      .catch((error) => {
        console.error('Create User Error:', error)
        toast.error('Create User error: ' + error.message)
      })
  }
  return (
    <div>
      <Toaster position='top-right' richColors />

      <h1>Create Acount</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Name'
          {...register('name', { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <input
          type='text'
          placeholder='Profile Picture'
          {...register('profilePicture', { required: true })}
        />
        {errors.profilePicture && <span>This field is required</span>}
        <input
          type='email'
          placeholder='Email'
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <input
          type='password'
          placeholder='Password'
          {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <button
          className='cursor-pointer'
          type='submit'
          disabled={!isValid || isSubmitted}
        >
          Create Acount
        </button>
      </form>
    </div>
  )
}

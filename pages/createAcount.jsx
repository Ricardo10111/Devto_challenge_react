import { createUser } from '@/lib/api'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'
import { useRouter } from 'next/router'

export default function CreateAcount() {
  const [user, setUser] = useState({})
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors},
    reset,
    watch
  } = useForm()

  const onSubmit = (data) => {
    createUser({
      name: data.name,
      username: data.username,
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
        if (json?.data) {
          setUser(json.data)
          toast.success('User created successfully')
          reset()
          router.push('/')
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

  const password = watch('password')

  return (
    <main className='max-w-[580px] text-left p-7 mb-6 mt-8 ml-auto mr-auto rounded-md  text-custom-black bg-cu4 shadow-md shadow-[#1717170D] mx-auto'>
      <Toaster position='top-right' richColors />

      <form onSubmit={handleSubmit(onSubmit)}>
        <p className='pb-4 text-[1.2rem] font-bold'>Create your account</p>

        <div className='imageForm mt-3 flex flex-col text-[1rem]'>
          <label className='text-gray-900 font-normal' htmlFor=''>
            Profile Image
          </label>
          <input
            className='border border-gray-300 rounded p-2 mt-1 w-full'
            type='text'
            {...register('profilePicture', { required: true })}
          />
          {errors.profilePicture && <span>This field is required</span>}
        </div>
        <div className='imageForm mt-3 flex flex-col text-[1rem]'>
          <label className='text-gray-900 font-normal' htmlFor=''>
            Name <span className='text-red-600'>*</span>
          </label>
          <input
            className='border border-gray-300 rounded p-2 mt-1 w-full'
            type='text'
            {...register('name', { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className='imageForm mt-3 flex flex-col text-[1rem]'>
          <label className='text-gray-900 font-normal' htmlFor=''>
            Username <span className='text-red-600'>*</span>
          </label>
          <input
            className='border border-gray-300 rounded p-2 mt-1 w-full'
            type='text'
            {...register('username', { required: true })}
          />
          {errors.username && <span>This field is required</span>}
        </div>

        <div className='imageForm mt-3 flex flex-col text-[1rem]'>
          <label className='text-gray-900 font-normal' htmlFor=''>
            Email <span className='text-red-600'>*</span>
          </label>
          <input
            className='border border-gray-300 rounded p-2 mt-1 w-full'
            type='email'
            {...register('email', { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className='imageForm mt-3 flex flex-col text-[1rem]'>
          <label className='text-gray-900 font-normal' htmlFor=''>
            Password <span className='text-red-600'>*</span>
          </label>
          <input
            className='border border-gray-300 rounded p-2 mt-1 w-full'
            type='password'
            {...register('password', { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <div className='imageForm mt-3 flex flex-col text-[1rem]'>
          <label className='text-gray-900 font-normal' htmlFor=''>
            Password Confirmation <span className='text-red-600'>*</span>
          </label>
          <input
            className='border border-gray-300 rounded p-2 mt-1 w-full'
            type='password'
            {...register('confirmPassword', {
              required: true,
              validate: (value) => value === password || 'Passwords do not match',
            })}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        </div>
        <button
          className='mt-5 bg-cu9 text-white py-2 rounded-md w-[6rem] mx-auto hover:bg-cu9 hover:transition hover:duration-300 hover:ease-in-out hover:cursor-pointer'
          type='submit'
        >
          Sign Up
        </button>
      </form>
    </main>
  )
}
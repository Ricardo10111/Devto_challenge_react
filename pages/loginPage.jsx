import { login } from '@/lib/api'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'
import clsx from 'clsx'
import SignUpButtons from "@/components/SignUpButtons";

import Link from 'next/link'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const buttons = [
    {image: '/apple_dark.svg', title: 'Continue with Apple'},
    {image: '/facebookColor.svg', title: 'Continue with Facebook'},
    {image: '/forem.svg', title: 'Continue with Forem'},
    {image: '/github.svg', title: 'Continue with GitHum'},
    {image: '/google.svg', title: 'Continue with Google'},
    {image: '/x.svg', title: 'Continue Twitter (X)'},
]

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset
  } = useForm()

  async function onSubmit(data) {
    try {
      const { token, id } = await login(data.email, data.password)
      console.log('token:', token)
      console.log('id:', id)
      if (token && id) {
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('id', id)
        toast.success('Welcome!')
        reset()
        router.push('/')
      } else {
        toast.error('Email or password incorrect')
        setError('root.credentials', {
          type: 'manual',
          message: 'Invalid credentials'
        })
      }
    } catch (error) {
      toast.error('Error to login')
      console.error('[login error]', error)
    }
  }



  return (
    <main>
      <Toaster position='top-right' richColors />
      <section className='flex justify-center items-center flex-col gap-4 w-full min-h-dvh bg-white'>
        <div className='rounded-md p-6 pt-4 w-full max-w-[600px] bg-white'>
          <div className='flex flex-col justify-center items-center gap-3 mb-6'>
            <img
              className='w-[60px] h-[48px]'
              src='https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png'
              alt=''
            />
            <h1 className='text-3xl font-bold text-center'>
              Join the DEV Community
            </h1>
            <span className='font-light'>
              DEV Community is a community of 1,707,784 amazing developers
            </span>
          </div>
          <div className='flex flex-col gap-3'>
            
            {
              buttons.map((button, index) => (
                <SignUpButtons key={index} image={button.image} title={button.title} />
              ))  
            }
            
            <div>
              <div className='relative text-center m-7'>
                <hr className='h-[1px] mt-[32px] mb-[32px] bg-cu9 border-none' />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 text-gray-700 text-center text-sm'>
                  OR
                </div>
              </div>
              <form
                className={clsx('flex flex-col gap-4 w-full  mr-auto mt-6', {
                  'border-red-500': errors.root?.credentials
                })}
                onSubmit={handleSubmit(onSubmit)}
              >
                <label htmlFor=''>Email</label>
                <input
                  className='flex border-[1px] border-black/20 p-4 justify-between items-center gap-2 w-full h-10 bg-white rounded-md text-[#404040]'
                  type='text'
                  {...register('email', {
                    required: { value: true, message: 'Email is required' }
                  })}
                />
                {errors.email && (
                  <span className='text-red-500 text-sm'>
                    {errors.email.message}
                  </span>
                )}
                <label htmlFor=''>Password</label>
                <input
                  className='flex border-[1px] border-black/20 p-4 justify-between items-center gap-2 w-full h-10 bg-white rounded-md text-[#404040]'
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: { value: true, message: 'Password is required' }
                  })}
                />
                {errors.password && (
                  <span className='text-red-500 text-sm'>
                    {errors.password.message}
                  </span>
                )}
                

                <div className='flex flex-row justify-between'>
                  <div className='flex flex-row gap-3'>
                    <input className='m-[0.1875rem] bg-blue-600 border-blue-600 text-white bg-center bg-no-repeat' type='checkbox' id='remember' />
                    <label className='text-custom-black' htmlFor='remember'>
                      Remember me
                    </label>
                  </div>
                  <div>
                    <a className='text-blue-700 font-light' href='#'>
                      Forgot password?
                    </a>
                  </div>
                </div>

                <button
                  className='bg-blue-700 text-white border-2 h-15 border-blue-600 rounded-lg p-2 disabled:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed'
                  type='submit'
                >
                  Login
                </button>
              </form>
              <div className='mt-6 text-center'>
              <span className='block text-sm text-black/40 italic'>
              By signing in, you are agreeing to our privacy policy, terms of use and code of conduct.

              </span>
              <hr className='h-[1px] mt-6 mb-6 bg-cu9 border-none' />
              <div className='flex justify-center items-center gap-2'>
                <span className='font-extralight'>
                New to DEV Community?
                </span>
                <Link
                  href='/signupPage'
                  className='text-blue-700 font-extralight'
                >
                  Create account.
                </Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

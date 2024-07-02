import { login } from '@/lib/api';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import clsx from 'clsx';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset
  } = useForm();

  async function onSubmit(data) {
    try {
      const { token, id } = await login(data.email, data.password);
      console.log('token:', token);
      console.log('id:', id);
      if (token && id) {
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('id', id);
        toast.success('Welcome!');
        reset();
        router.push('/');
      } else {
        toast.error('Email or password incorrect');
        setError('root.credentials', {
          type: 'manual',
          message: 'Invalid credentials'
        });
      }
    } catch (error) {
      toast.error('Error to login');
      console.error('[login error]', error);
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <main className='flex justify-center items-center flex-col gap-4 w-full min-h-dvh'>
      <Toaster position='top-right' richColors />
      <h1 className='text-4xl font-bold text-center'>Login</h1>
      <form
        className={clsx(
          'border border-white/60 rounded p-4 flex flex-col gap-4 max-w-sm w-full',
          {
            'border-red-500': errors.root?.credentials 
          }
        )}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className='border border-white/60 rounded p-2 text-black'
          type='text'
          placeholder='Email'
          {...register('email', {
            required: { value: true, message: 'Email is required' }
          })}
        />
        {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
        <input
          className='border border-white/60 rounded p-2 text-black w-full bg-white'
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          {...register('password', {
            required: { value: true, message: 'Password is required' }
          })}
        />
        {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
        <span className='text-xs text-white/50 cursor-pointer hover:text-white' onClick={handleShowPassword}>
          {showPassword ? '🙈 Hide password' : '🐵 Show password'}
        </span>
        {errors.root?.credentials && (
          <p className='text-red-500 text-sm'>
            {errors.root.credentials.message}
          </p>
        )}
        <button
          className='bg-blue-500 text-white border-2 border-blue-600 rounded-lg p-2 disabled:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed'
          type='submit'
        >
          Login
        </button>
      </form>
    </main>
  );
}

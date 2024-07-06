import { useRouter } from 'next/router'
import { Toaster, toast } from 'sonner'
import SignUpButtons from '@/components/SignUpButtons'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()

  const buttons = [
    { image: '/apple_dark.svg', title: 'Sign up with Apple' },
    { image: '/facebookColor.svg', title: 'Sign up with Facebook' },
    { image: '/forem.svg', title: 'Sign up with Forem' },
    { image: '/github.svg', title: 'Sign up with GitHub' },
    { image: '/google.svg', title: 'Sign up with Google' },
    { image: '/x.svg', title: 'Sign up with Twitter (X)' },
    { image: '/email.svg', title: 'Sign up with Email' }
  ]

  return (
    <main>
      <Toaster position='top-right' richColors />
      <section className='flex flex-col justify-center items-center gap-4 w-full min-h-screen bg-white p-4'>
        <div className='rounded-md p-6 pt-4 w-full max-w-[600px] bg-white'>
          <div className='flex flex-col justify-center items-center gap-3 mb-6'>
            <img
              className='w-[60px] h-[48px]'
              src='https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png'
              alt='DEV Community Logo'
            />
            <h1 className='text-2xl md:text-3xl font-bold text-center'>
              Join the DEV Community
            </h1>
            <span className='font-light text-center'>
              DEV Community is a community of 1,707,784 amazing developers
            </span>
          </div>
          <div className='flex flex-col gap-3'>
            {buttons.map((button, index) => (
              <SignUpButtons
                key={index}
                image={button.image}
                title={button.title}
              />
            ))}
            <div className='mt-6 text-center'>
              <span className='block text-sm text-black/40 italic'>
                By signing in, you are agreeing to our privacy policy, terms of use and code of conduct.
              </span>
              <hr className='h-[1px] mt-6 mb-6 bg-cu9 border-none' />
              <div className='flex justify-center items-center gap-2'>
                <span className='font-extralight'>
                  Already have an account?
                </span>
                <Link
                  href='/loginPage'
                  className='text-blue-700 font-extralight'
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
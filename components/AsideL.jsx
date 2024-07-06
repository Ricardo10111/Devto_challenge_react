import CardAside from './CardsAside'
import Tags from './Tags'
import MediaCards from './MediaCards'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function AsideL() {
  const router = useRouter()
  const [hasToken, setHasToken] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasToken(!!window.localStorage.getItem('token'))
    }
  }, [])

  const handleCreatePost = () => {
    if (hasToken) {
      router.push('/createpost')
    } else {
      router.push('/loginPage')
    }
  }

  return (
    <aside className='hidden h-dvh w-full md:max-w-[300px] lg:max-w-[230px] lg:ml-[10px] md:block'>
      <section className='flex flex-col gap-[2.3rem] rounded-[10px] min-h-[15em] w-[95%] p-[15px] bg-[#ffffff] shadow-[#282c2d0d] mb-10'>
        <div className='relative p-[1px] w-full max-h-[20em]'>
          <h2 className='text-xl font-bold font-gill'>
            Dale click en el boton de abajo para crear un post
          </h2>
        </div>
        <div className='flex flex-col gap-8'>
          <span
            onClick={handleCreatePost}
            className='border-blue-600 border-[1px] text-center text-[#0000ff]   py-2 px-4 rounded font-gill cursor-pointer hover:bg-blue-700
            hover:underline hover:decoration-white
            hover:text-white
            hover:border hover:border-blue-700'
          >
            Crear Post
          </span>
        </div>
      </section>
      <CardAside />
      <MediaCards />
      <Tags />
      <section className='flex flex-col gap-[2.3rem] rounded-[10px] min-h-[15em] w-[95%] p-[15px] bg-[#ffffff] shadow-[#282c2d0d] mt-10'>
        <div>
          <img
            className='h-[212px] w-[212px]'
            src='https://res.cloudinary.com/practicaldev/image/fetch/s--GkDXbK0b--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oky7tpxe4z0f8ksng5ta.png'
            alt=''
          />
        </div>
        <div className='relative p-[1px] w-full max-h-[20em] flex flex-col gap-4'>
          <h2 className='text-xl font-bold font-gill'>
            Life is too short to browse without{' '}
            <span className='underline text-[#0000ff]'>dark mode.</span>
          </h2>
          <p>
            You can customize your theme, font, and more{' '}
            <span className='underline text-[#0000ff]'>
              when you are signed in.
            </span>
          </p>
        </div>
      </section>

      <section className='p-6 flex flex-col gap-4'>
        <p>
          <a className='text-[#0000ff]' href='#'>
            DEV Community
          </a>{' '}
          A constructive and inclusive social network for software developers.
          With you every step of your journey.
        </p>
        <p>
          Built on{' '}
          <a className='text-[#0000ff]' href=''>
            Forem
          </a>{' '}
          — the{' '}
          <a className='text-[#0000ff]' href=''>
            open source
          </a>{' '}
          software that powers{' '}
          <a className='text-[#0000ff]' href=''>
            DEV
          </a>{' '}
          and other inclusive communities.
        </p>
        <p>
          Made with love and{' '}
          <a className='text-[#0000ff]' href=''>
            Ruby on Rails.
          </a>{' '}
          DEV Community © 2016 - 2024.
        </p>
      </section>
    </aside>
  )
}

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function NavBar() {
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    const id = window.localStorage.getItem('id')
    setIsAuth(!!token && !!id)
  }, [])

  function handleLogout() {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('id')
    setIsAuth(false)
    router.push('/')
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='bg-[#ffffff] shadow-[0_1px_1px] shadow-[#181a1b1a] t-0 l-0 r-0 h-[56px] z-[100] block'>
      <nav className='max-w-[1280px] p-[0_1rem] m-auto flex items-center relative h-[56px]'>
        <div className='flex mb-2'>
          <img
            className='w-12 h-10'
            src='https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png'
            alt=''
          />
        </div>
        <div className='h-[90%] max-w-[420px] flex-auto'>
          <div className='flex flex-row flex-wrap h-[90%] justify-center items-center content-center'>
            <div className='flex flex-col text-base relative h-[90%] flex-1 justify-center'>
              <input
                className='h-[38px] px-[8px] py-[1px] font-inherit text-base w-full resize-y bg-white border-[1.5px] border-gray-300 rounded-md transition-all ease-[cubic-bezier(0.17, 0.67, 0.5, 0.71)] duration-[100ms]'
                type='text'
                placeholder='Search...'
              />
              <button className='absolute pt-0 pb-0 mt-0 left-auto top-[1px] right-[1px] bottom-[1px] p-2 bg-transparent text-[rgba(59,73,223,0.1)] inline-block font-inherit text-center border-none break-normal hover:bg-[rgba(59,73,223,0.1)] hover:text-[rgba(59,73,223,0.1)] hover:rounded-[0.375rem] hover:border-[rgba(59,73,223,0.1)] hover:cursor-pointer'>
                <img src='/search.svg' alt='' />
              </button>
            </div>
          </div>
        </div>

        <div className='hidden md:flex items-center justify-center h-full w-[14.5em] gap-[3%] ml-auto'>
          {!isAuth && (
            <>
              <Link
                className='text-center pt-2 w-[27%] h-[80%] hover:bg-[rgba(59,73,223,0.1)] hover:border hover:border-[rgba(59,73,223,0.1)] hover:rounded-md hover:text-blue-500 hover:underline hover:decoration-blue-500'
                href='loginPage'
              >
                Log in
              </Link>
              <Link
                className='border-[1px] border-[#0000ff] rounded-md text-[#0000ff] pt-2 text-center h-[80%] w-[67%] hover:bg-blue-700 hover:underline hover:decoration-white hover:text-white hover:border hover:border-blue-700'
                href='signupPage'
              >
                Create account
              </Link>
            </>
          )}
          {isAuth && (
            <button
              className='border-[1px] border-[#0000ff] rounded-md text-[#0000ff] text-center h-[80%] w-[67%] hover:bg-blue-700 hover:underline hover:decoration-white hover:text-white hover:border hover:border-blue-700'
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>

        <div className='flex md:hidden items-center ml-auto z-20'>
          <button onClick={toggleMenu} className='p-2'>
            <img
              src='/hamburger_icon_143010.svg'
              alt='Menu'
              className='w-6 h-6'
            />
          </button>
        </div>

        {isMenuOpen && (
          <div className='md:hidden absolute top-full right-0 w-full bg-white shadow-md z-30'>
            <div className='flex flex-col items-center p-4'>
              {!isAuth && (
                <>
                  <Link
                    className='mb-2 w-full text-center p-2 bg-blue-500 text-white rounded'
                    href='loginPage'
                    onClick={toggleMenu}
                  >
                    Log in
                  </Link>
                  <Link
                    className='w-full text-center p-2 bg-green-500 text-white rounded'
                    href='signupPage'
                    onClick={toggleMenu}
                  >
                    Create account
                  </Link>
                </>
              )}
              {isAuth && (
                <button
                  className='w-full text-center p-2 bg-red-500 text-white rounded'
                  onClick={() => {
                    handleLogout()
                    toggleMenu()
                  }}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

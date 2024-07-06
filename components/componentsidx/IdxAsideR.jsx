import { useRouter } from 'next/router'
import { getPostById } from '@/lib/api'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function IdxAsideR() {
  const router = useRouter()
  const { id } = router.query
  const [post, setPost] = useState({})

  useEffect(() => {
    getPostById(id)
      .then((post) => {
        setPost(post)
        console.log('Post:', post)
      })
      .catch((error) => {
        // toast.error('Error to get post')
        console.error('Error to get post', error)
      })
  }, [id])

  const formattedDate = new Date(post.join).toLocaleDateString()

  return (
    <main className='hidden h-dvh w-full lg:block lg:mr-[70px] lg:max-w-[400px]'>
      <div className='flex flex-col font-roboto bg-white border-2 border-gray-300 rounded-lg pb-5 m-5 relative w-full mb-2.5 gap-4'>
        <div className='grid gap-4 pb-4 break-words'>
          <div className=' border-t-[2rem] p-4 pt-0 gap-4 grid'>
            <div className='-mt-4'>
              <Link className='flex' href=''>
                <span className='m-2 shrink-0 w-12 h-12'>
                  <img
                    className='h-full w-full rounded-full object-cover border-2 border-gray-300'
                    src={post.name?.profilePicture}
                    alt=''
                  />
                </span>

                <div className='flex justify-start flex-col'>
                  <span className='text-[#3d3d3d] font-semibold mt-5 w-64 rounded-[10px] pt-[3px] border-2 border-white pb-[3px] hover:transition hover:duration-300 hover:ease-in-out hover:text-black hover:border-2 hover:border-white hover:bg-gray-100 hover:cursor-pointer'>
                    {post.name?.name}
                  </span>
                </div>
              </Link>
            </div>
            <div>
              <button className='w-full border bg-cu5 text-white rounded-md h-10'>
                Follow
              </button>
            </div>
            <div className='text-[#575757]'>
              
                Few things are as exciting as getting new knowledge and skills
                in something you are absolutely fascinated by! ✨
              
            </div>
            <div>
              <div className='text-xs font-bold uppercase text-[#525252]'>LOCATION</div>
              <div className='text-[#575757]'>{post.location}</div>
            </div>
            <div>
              <div className='text-xs font-bold uppercase text-[#525252]'>EDUCATION</div>
              <div className='text-[#575757]'>
                Moglestu Business School and Barbu IB School of Economics
              </div>
            </div>
            <div >
              <div className='text-xs font-bold uppercase text-[#525252]'>WORK</div>
              <div className='text-[#575757]'>{post.work}</div>
            </div>
            <div>
              <div className='text-xs font-bold uppercase text-[#525252]'>
                JOINED
              </div>
              <div className='text-[#575757]'>{formattedDate}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

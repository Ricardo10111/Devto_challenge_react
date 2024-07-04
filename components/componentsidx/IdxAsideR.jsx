import { useRouter } from 'next/router'
import { getPostById } from '@/lib/api'
import { useEffect, useState } from 'react'

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

  const formattedDate = new Date(post.date).toLocaleDateString()

  return (
    <main className='hidden h-dvh w-full lg:block lg:mr-[70px] lg:max-w-[400px]'>
      <div className='flex flex-col font-roboto bg-white border-2 border-gray-300 rounded-lg pb-5 m-5 relative w-full mb-2.5 gap-4'>
        <div className='grid gap-4 pb-4 break-words'>
          <div className=' border-t-[2rem] p-4 pt-0 gap-4 grid'>
            <div className='-mt-4'>
              <a className='flex' href=''>
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

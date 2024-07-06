import { useRouter } from 'next/router'
import { getPostById } from '@/lib/api'
import { useEffect, useState } from 'react'

export default function CenterPost({ reactionCounts }) {
  const router = useRouter()
  const { id } = router.query
  const [post, setPost] = useState({})

  useEffect(() => {
    if (id) {
      getPostById(id)
        .then((post) => {
          setPost(post)
          console.log('Post:', post)
        })
        .catch((error) => {
          console.error('Error to get post', error)
        })
    }
  }, [id])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.toLocaleString('es-ES', { month: 'short' })
    return `${day} ${month}`
  }

  const formattedDate = post.date ? formatDate(post.date) : ''

  return (
    <main className='h-dvh w-full m-0 flex flex-col  ml-4 sm:ml-0 md:p-3 mr-[34px] md:mr-[20px] md:w-[60%] lg:max-w-[56rem]'>
      <div className='flex flex-col font-roboto bg-white border-2 border-gray-300 rounded-lg pb-5 m-5 relative w-full mb-2.5 gap-4'>
        <img
          className='overflow-clip box-content w-full'
          src={post.image}
          alt={post.title}
        />
        <div className='flex justify-start items-center flex-row flex-nowrap w-[14em] ml-'>
          <div className='flex justify-start items-center flex-row flex-nowrap w-[14em] ml-4'>
            <img
              className='h-[48px] w-[48px] rounded-full'
              src={post.name?.profilePicture}
              alt=''
            />
            <div className='flex justify-start flex-col ml-3'>
              <span className='text-[#3d3d3d] font-semibold rounded-[10px] pt-[3px] border-2 border-white pb-[3px] hover:transition hover:duration-300 hover:ease-in-out hover:text-black hover:border-2 hover:border-white hover:bg-gray-100 hover:cursor-pointer'>
                {post.name?.name}
              </span>
              <span className='text-[12px] font-[300] text-[#3d3d3d]'>
                Posted on {formattedDate}
              </span>
            </div>
          </div>
        </div>
        <div className='containerDown flex flex-row ml-[65px]'>
          <div className='iconsRactionsContainer flex justify-center items-center pl-[10px] border-2 border-white rounded-[10px] h-[40px] w-[200px]'>
            <div className='iconsreaction flex justify-center items-center gap-4 w-[40px] h-full'>
              {reactionCounts.map((reaction, index) => (
                <div
                  key={index}
                  className=' mb-[5px] gap-2   text-[#3d3d3d] cursor-pointer flex justify-center items-center w-[40px] h-full'
                >
                  <div className='text-[1.5rem]'><span className=''>{reaction.emoji}</span></div>
                  <div>{reaction.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex justify-start ml-[30px] -mt-5'>
          <h2 className='text-[30px] font-bold hover:text-[#3b49df] cursor-pointer'>
            {post.title}
          </h2>
        </div>

        <div className='flex flex-row flex-nowrap md:gap-[2px] ml-[6px]'>
              <span
                className='flex justify-center items-center text-[12px] md:text-[14.5px] font-light rounded-md h-6 md:h-[30px] w-[90px] md:w-[120px] hover:cursor-pointer hover:bg-blue-100 hover:border hover:border-blue-600 hover:rounded-md'
                href=''
              >
                <span className='text-lime-500'>#</span>
                {post.hashtags}
              </span>
              <span
                className='flex justify-center items-center text-[12px] md:text-[14.5px] font-light rounded-md h-6 md:h-[30px] w-[90px] md:w-[120px] hover:cursor-pointer hover:bg-pink-100 hover:border hover:border-pink-400 hover:rounded-md'
                href=''
              >
                <span className='text-pink-400'>#</span>
                {post.hashtags2}
              </span>
              <span
                className='flex justify-center items-center text-[12px] md:text-[14.5px] font-light rounded-md h-6 md:h-[30px] w-[90px] md:w-[120px] hover:cursor-pointer hover:bg-indigo-100 hover:border hover:border-indigo-900 hover:rounded-md'
                href=''
              >
                <span className='text-blue-400'>#</span>
                {post.hashtags3}
              </span>
            </div>
      </div>

      <div>
        <h2 className='text-[30px] font-bold'>Comments</h2>
        <p>{post.description}</p>
      </div>
    </main>
  )
}

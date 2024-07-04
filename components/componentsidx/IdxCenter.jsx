import { useRouter } from 'next/router'
import { getPostById } from '@/lib/api'
import { useEffect, useState } from 'react'

export default function CenterPost() {
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
    <main className='h-dvh w-full m-0 flex flex-col p-4 md:p-3 mr-[34px] md:mr-[20px] md:w-[100%] lg:max-w-[60rem]  '>
      <div className='flex flex-col font-roboto bg-white border-2 border-gray-300 rounded-lg pb-5 m-5 relative w-full mb-2.5 gap-4'>
        <img
          className='overflow-clip box-content w-full'
          src={post.image}
          alt={post.title}
        />
        <div className='flex justify-start items-center flex-row flex-nowrap w-[14em] ml-4'>
          <div className='flex justify-start items-center flex-row flex-nowrap w-[14em] ml-4'>
            <img
              className='h-8 w-8 rounded-full'
              src={post.name?.profilePicture}
              alt=''
            />
            <div className='flex justify-start flex-col'>
              <span className='text-[#3d3d3d] font-[400] rounded-[10px] pt-[3px] border-2 border-white pb-[3px] hover:transition hover:duration-300 hover:ease-in-out hover:text-black hover:border-2 hover:border-white hover:bg-gray-100 hover:cursor-pointer'>
                {post.name?.name}
              </span>
              <span className='text-[12px] font-[300] text-[#3d3d3d]'>
                {formattedDate}
              </span>
            </div>
          </div>
        </div>
        <div className='flex justify-start ml-[75px]'>
          <h2 className='text-[30px] font-bold hover:text-[#3b49df] cursor-pointer'>
            {post.title}
          </h2>
        </div>

        <div className='flex flex-row flex-nowrap gap-[2px] ml-[75px]'>
          <a
            className='flex justify-center items-center text-[14.5px] rounded-md h-[30px] w-[120px] hover:cursor-pointer hover:bg-blue-100 hover:border hover:border-blue-600 hover:rounded-md'
            href=''
          >
            {post.hashtags}
          </a>
          <a
            className='flex justify-center items-center text-[14.5px] rounded-md h-[30px] w-[120px] hover:cursor-pointer hover:bg-pink-100 hover:border hover:border-pink-400 hover:rounded-md'
            href=''
          >
            {post.hashtags2}
          </a>
          <a
            className='flex justify-center items-center text-[14.5px] rounded-md h-[30px] w-[120px] hover:cursor-pointer hover:bg-indigo-100 hover:border hover:border-indigo-900 hover:rounded-md'
            href=''
          >
            {post.hashtags3}
          </a>
        </div>

        <div className='containerDown flex flex-row ml-[65px]'>
          <div className='iconsRactionsContainer flex justify-center items-center pl-[10px] border-2 border-white rounded-[10px] h-[40px] w-[200px]'>
            <div className='iconsreaction flex justify-center items-center w-[40px] h-full'>
              <span className='m-[-2.5px] mb-[5px] h-6 w-6 rounded-[50%] border-2 border-white bg-white'>
                {post.reactions}
              </span>
              <span className='m-[-2.5px] mb-[5px] h-6 w-6 rounded-[50%] border-2 border-white bg-white'>
                {post.reactions2}
              </span>
              <span className='m-[-2.5px] mb-[5px] h-6 w-6 rounded-[50%] border-2 border-white bg-white'>
                {post.reactions3}
              </span>
              <span className='m-[-2.5px] mb-[5px] h-6 w-6 rounded-[50%] border-2 border-white bg-white'>
                {post.reactions4}
              </span>
            </div>
            <div className='containerreaction flex justify-center items-center w-[60%] h-full'>
              <span className='text-[14.5px]'>{post.numberOfReactions}</span>
            </div>
          </div>

          <div className='comentsContainer flex justify-center items-center h-[40px] w-[150px] border-2 border-white rounded-[10px]'>
            <img src='http://127.0.0.1:5500/logos_svg/comments.svg' alt='' />
            <span className='text-[14.5px]'>{post.numberOfComments}</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className='text-[30px] font-bold'>Comments</h2>
        <p>{post.description}</p>
      </div>
    </main>
  )
}

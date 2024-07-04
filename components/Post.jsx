import { useEffect, useState } from 'react'
import { getPosts, deletePost as apiDeletePost } from '@/lib/api'
import { toast, Toaster } from 'sonner'
import { format } from 'date-fns'
import { useRouter } from 'next/router'

export default function PostsPage() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const router = useRouter()

  

  useEffect(() => {
    getPosts()
      .then((posts) => {
        const sortedPosts = posts.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        )
        setPosts(sortedPosts)
        setFilteredPosts(sortedPosts)
        console.log('posts:', posts)
      })
      .catch((error) => {
        toast.error('Error to get posts')
        console.error('Error to get posts', error)
      })
  }, [])

  useEffect(() => {
    if (fromDate && toDate) {
      const from = new Date(fromDate)
      const to = new Date(toDate)

      const filtered = posts.filter((post) => {
        const postDate = new Date(post.date)
        return postDate >= from && postDate <= to
      })

      setFilteredPosts(filtered)
    } else {
      setFilteredPosts(posts)
    }
  }, [fromDate, toDate, posts])

  return (
    <main className='h-dvh w-full m-0 flex flex-col p-4 md:p-3 mr-[34px] md:mr-[20px] md:w-[60%] lg:max-w-[39em]'>
      <Toaster position='top-right' richColors />

      <section className='headerPosts flex flex-wrap ml-5  md:flex-wrap justify-start items-center gap-7'>
        <div>
          <span className='text-[1.17em] font-semibold'>Relevant</span>
          <span className='p-[10px] bg-transparent text-[#404040] font-[300] text-[1.10em]'>Latest</span>
          <span className='p-[10px] bg-transparent text-[#404040] font-[300] text-[1.10em]'>Top</span>
        </div>
        {/* // Los escondiste con hidden */}
        <div className=' flex-row gap-4 justify-center hidden'>
          <div className='flex flex-row gap-2'>
            <label className='text-xs hidden md:block' htmlFor="">from</label>
            <input
              type='date'
              id='from'
              name='from'
              className='border border-gray-300 rounded '
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className='flex flex-row gap-2'>
            <label className='hidden md:block text-xs' htmlFor="">to</label>
            <input
              type='date'
              id='to'
              name='to'
              className='border border-gray-300 rounded'
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
             
          </div>
        </div>
      </section>
      {filteredPosts.map((post, idx) => {
        const formattedDate = format(new Date(post.date), 'yyyy-MM-dd')

        return (
          <div
            key={`post-${idx}`}
            className='flex flex-col font-roboto bg-white border-2 border-gray-300 rounded-lg pb-5 m-2 relative w-full mb-2.5 gap-4'
            onClick={()=> {router.push(`/${post._id}`)}}
          >
            <img
              className='overflow-clip box-content w-full'
              src={post.image}
              alt={post.image}
            />
            <div className='flex justify-start items-center flex-row flex-nowrap w-[14em] ml-4' >
              <img
                className='h-8 w-8 rounded-full'
                src={post.name.profilePicture}
                alt=''
              />
              <div className='flex justify-start flex-col'>
                <span className='text-[#3d3d3d] text-sm font-normal rounded-[10px] pt-[3px] border-2 border-white pb-[3px] hover:transition hover:duration-300 hover:ease-in-out hover:text-black hover:border-2 hover:border-white hover:bg-gray-100 hover:cursor-pointer'>
                  {post.name.name}
                </span>
                <span className='text-[12px] font-[300] text-[#3d3d3d]'>
                  {formattedDate}
                </span>
              </div>
            </div>
            <div className='flex justify-start ml-[75px]'>
              <h2 className='text-[30px] font-bold hover:text-[#3b49df] cursor-pointer' onClick={()=> {router.push(`/${post._id}`)}}>
                {post.title}
              </h2>
            </div>

            <div className='flex flex-row flex-nowrap gap-[2px] ml-[75px]'>
              <a
                className='flex justify-center items-center text-[14.5px] font-light rounded-md h-[30px] w-[120px] hover:cursor-pointer hover:bg-blue-100 hover:border hover:border-blue-600 hover:rounded-md'
                href=''
              >
                <span className='text-lime-500'>#</span>{post.hashtags}
              </a>
              <a
                className='flex justify-center items-center text-[14.5px] font-light rounded-md h-[30px] w-[120px] hover:cursor-pointer hover:bg-pink-100 hover:border hover:border-pink-400 hover:rounded-md'
                href=''
              >
                <span className='text-pink-400'>#</span>{post.hashtags2}
              </a>
              <a
                className='flex justify-center items-center text-[14.5px] font-light rounded-md h-[30px] w-[120px] hover:cursor-pointer hover:bg-indigo-100 hover:border hover:border-indigo-900 hover:rounded-md'
                href=''
              >
                <span className='text-blue-400'>#</span>{post.hashtags3}
              </a>
            </div>

            <div className='containerDown flex flex-row ml-[65px]'>
              <div className='iconsRactionsContainer flex justify-center items-center pl-[10px] border-2 border-white rounded-[10px] h-[40px] w-[200px]'>
                <div className='iconsreaction flex justify-center items-center w-[40px] h-full'>
                  <span className='mr-[-2px] mb-[5px] h-6 w-6 rounded-[15px] border-2 border-custom-white bg-cu7'>
                    {post.reactions}
                  </span>
                  <span className='mr-[-2px] mb-[5px] h-6 w-6 rounded-[15px] border-2 border-custom-white bg-cu7'>
                    {post.reactions2}
                  </span>
                  <span className='mr-[-2px] mb-[5px] h-6 w-6 rounded-[15px] border-2 border-custom-white bg-cu7'>
                    {post.reactions3}
                  </span>
                  <span className='mr-[-2px] mb-[5px] h-6 w-6 rounded-[15px] border-2 border-custom-white bg-cu7'>
                    {post.reactions4}
                  </span>
                </div>
                <div className='containerreaction flex justify-center items-center w-[60%] h-full'>
                  <span className='text-[13.5px] text-[#404040] font-light'>
                    {post.numberOfReactions} reactions
                  </span>
                </div>
              </div>

              <div className='comentsContainer flex justify-center items-center h-[40px] w-[150px] border-2 border-white rounded-[10px]'>
                <img
                  src='http://127.0.0.1:5500/logos_svg/comments.svg'
                  alt=''
                />
                <span className='text-[13.5px] text-[#404040] font-light'>{post.numberOfComments} comments</span>
              </div>

              <div className='flex justify-center items-center ml-auto mr-[30px] gap-4'>
                <div>
                  <span className='text-xs font-light'>4 min read</span>
                </div>
                logo
                <div><img src="" alt="" /></div>
              </div>
            </div>
          </div>
        )
      })}
    </main>
  )
}

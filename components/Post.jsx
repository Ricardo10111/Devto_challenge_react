import { useEffect, useState } from 'react';
import { getPosts, deletePost as apiDeletePost } from '@/lib/api';
import { toast, Toaster } from 'sonner';
import { format } from 'date-fns';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  function handleDeletePost(id) {
    apiDeletePost(id)
      .then(() => {
        toast.success('Post deleted');
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        toast.error('Error to delete post');
        console.error('Error to delete post', error);
      });
  }

  useEffect(() => {
    getPosts()
      .then((posts) => {
        const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sortedPosts);
        console.log('posts:', posts);
      })
      .catch((error) => {
        toast.error('Error to get posts');
        console.error('Error to get posts', error);
      });
  }, []);

  return (
    <main className='h-dvh w-full m-0 flex flex-col mr-[20px] md:w-[60%] lg:max-w-[39em]'>
      <Toaster position='top-right' richColors />
      <section className='headerPosts flex justify-center items-center gap-7'>
        <span className='text-[1.17em] font-semibold'>Relevant</span>
        <span className='p-[10px] bg-transparent'>Latest</span>
        <span>Top</span>
      </section>
      {posts.map((post, idx) => {
        const formattedDate = format(new Date(post.date), 'yyyy-MM-dd');

        return (
          <div
            key={`post-${idx}`}
            className='flex flex-col font-roboto bg-white border-2 border-gray-300 rounded-lg pb-5 m-5 relative w-full mb-2.5 gap-4'
          >
            <img
              className='overflow-clip box-content w-full'
              src={post.image}
              alt={post.title}
            />
            <div className='flex justify-start items-center flex-row flex-nowrap w-[14em] ml-4'>
              <img
                className='h-8 w-8 rounded-full'
                src={post.name.profilePicture}
                alt=''
              />
              <div className='flex justify-start flex-col'>
                <span className='text-[#3d3d3d] font-[400] rounded-[10px] pt-[3px] border-2 border-white pb-[3px] hover:transition hover:duration-300 hover:ease-in-out hover:text-black hover:border-2 hover:border-white hover:bg-gray-100 hover:cursor-pointer'>
                  {post.name.name}
                </span>
                <span className='text-[12px] font-[300] text-[#3d3d3d]'>
                  {formattedDate}
                </span>
              </div>
            </div>
            <div className='flex justify-start ml-[75px]'>
              <h2 className='text-[30px] font-bold hover:text-[#3b49df] cursor-pointer'>
                {post.description}
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
                  <span className='text-[14.5px]'>
                    {post.numberOfReactions}
                  </span>
                </div>
              </div>

              <div className='comentsContainer flex justify-center items-center h-[40px] w-[150px] border-2 border-white rounded-[10px]'>
                <img
                  src='http://127.0.0.1:5500/logos_svg/comments.svg'
                  alt=''
                />
                <span className='text-[14.5px]'>{post.numberOfComments}</span>
              </div>

              <div className='flex justify-center items-center ml-auto mr-[20px]'>
                <button
                  className='w-[1.5em] h-[1.5em] rounded-[5px] cursor-pointer'
                  onClick={() => handleDeletePost(post.id)}
                >
                  <img
                    src='http://127.0.0.1:5500//logos_svg/trashcan_114640.svg'
                    alt=''
                  />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}

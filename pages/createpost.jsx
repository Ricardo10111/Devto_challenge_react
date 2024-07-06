import { createPost } from '@/lib/api';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/router';

export default function CreatePost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset
  } = useForm();

  const router = useRouter();

  async function onSubmit(data) {
    try {
      const id = window.localStorage.getItem('id');

      if (!id) {
        toast.error('User ID not found. Please log in again.');
        return;
      }

      data.name = id;

      const response = await createPost(data);

      if (response) {
        toast.success('Post created successfully');
        reset();
        router.push('/');
      } else {
        toast.error('Failed to create post');
        setError('root.credentials', {
          type: 'manual',
          message: 'Invalid credentials'
        });
      }
    } catch (error) {
      toast.error('Error to create post');
      console.error('[createPost error]', error);
    }
  }

  return (
    <main className='flex justify-center flex-col items-center h-full p-9 gap-6'>
      <Toaster position='top-right' richColors />
      <img
        className='w-[60px] h-[48px]'
        src='https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png'
        alt=''
      />
      <h2 className='text-[30px] font-roboto font-semibold'>
        Create your Post
      </h2>
      <form
        className='flex flex-col max-w-[700px] w-full gap-8 p-4 bg-white rounded-lg shadow-md border-2 border-gray-300'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className='border-2 border-gray-300 rounded-lg p-2'
          type='text'
          placeholder='Title'
          {...register('title', { required: true })}
        />
        {errors.description && <span>This field is required</span>}
        <input
          className='border-2 border-gray-300 rounded-lg p-2'
          type='text'
          placeholder='Location'
          {...register('location', { required: true })}
        />
        {errors.description && <span>This field is required</span>}
        <input
          className='border-2 border-gray-300 rounded-lg p-2'
          type='text'
          placeholder='Work'
          {...register('work', { required: true })}
        />
        {errors.description && <span>This field is required</span>}
       
        
        <input
          className='border-2 border-gray-300 rounded-lg p-2'
          type='date'
          placeholder='Date'
          {...register('date', { required: true })}
        />
        {errors.date && <span>This field is required</span>}
        <input
          className='border-2 border-gray-300 rounded-lg p-2'
          type='text'
          placeholder='Hashtags'
          {...register('hashtags', { required: true })}
        />
        {errors.hashtags && <span>This field is required</span>}
        <input
          className='border-2 border-gray-300 rounded-lg p-2'
          type='text'
          placeholder='Hashtags2'
          {...register('hashtags2', { required: true })}
        />
        {errors.hashtags2 && <span>This field is required</span>}
        <input
          className='border-2 border-gray-300 rounded-lg p-2'
          type='text'
          placeholder='Hashtags3'
          {...register('hashtags3', { required: true })}
        />
        {errors.hashtags3 && <span>This field is required</span>}

        <select
          id='options'
          className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
          {...register('reactions', { required: true })}
        >
          <option value='' disabled>
            Select an option
          </option>
          <option value='♥️'>♥️</option>
          <option value='🦄'>🦄</option>
          <option value='😲'>😲</option>
          <option value='🙌🏻'>🙌🏻</option>
          <option value='🔥'>🔥</option>
        </select>
        {errors.reactions && <span>This field is required</span>}
        <select
          id='options'
          className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
          {...register('reactions2', { required: true })}
        >
          <option value='' disabled>
            Select an option
          </option>
          <option value='♥️'>♥️</option>
          <option value='🦄'>🦄</option>
          <option value='😲'>😲</option>
          <option value='🙌🏻'>🙌🏻</option>
          <option value='🔥'>🔥</option>
        </select>
        {errors.reactions2 && <span>This field is required</span>}
        <select
          id='options'
          className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
          {...register('reactions3', { required: true })}
        >
          <option value='' disabled>
            Select an option
          </option>
          <option value='♥️'>♥️</option>
          <option value='🦄'>🦄</option>
          <option value='😲'>😲</option>
          <option value='🙌🏻'>🙌🏻</option>
          <option value='🔥'>🔥</option>
        </select>
        {errors.reactions3 && <span>This field is required</span>}
        <select
          id='options'
          className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
          {...register('reactions4', { required: true })}
        >
          <option value='' disabled>
            Select an option
          </option>
          <option value='♥️'>♥️</option>
          <option value='🦄'>🦄</option>
          <option value='😲'>😲</option>
          <option value='🙌🏻'>🙌🏻</option>
          <option value='🔥'>🔥</option>
        </select>
        {errors.reactions4 && <span>This field is required</span>}
        <input
          className='border-2 border-gray-300 rounded-lg p-2'
          type='text'
          placeholder='Number of reactions'
          {...register('numberOfReactions', { required: true })}
        />
        {errors.numberOfReactions && <span>This field is required</span>}
        <input
          className='border-2 border-gray-300 rounded-lg p-2'
          type='text'
          placeholder='Number of comments'
          {...register('numberOfComments', { required: true })}
        />
        {errors.numberOfComments && <span>This field is required</span>}
        <input
          className='border-2 border-gray-300 rounded-lg p-2'
          type='text'
          placeholder='Image'
          {...register('image')}
        />
        <input
          className='border-2 border-gray-300 rounded-lg p-2'
          type='text'
          placeholder='Description'
          {...register('description', { required: true })}
        />
        {errors.description && <span>This field is required</span>}

        <button
          className='bg-blue-500 text-white border-2 border-blue-600 rounded-lg p-2 disabled:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed'
          type='submit'
        >
          Create Post
        </button>
      </form>
    </main>
  );
}

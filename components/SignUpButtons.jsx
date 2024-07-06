import { useRouter } from "next/router"
export default function SignUpButtons({ image, title}) {
const router = useRouter()

function handleClick() {
  if(title !== 'Sign up with Email') return
    router.push('/createAcount')
}

  return (
    <article className='flex flex-col gap-4 w-full  mr-auto'>
        <div className="flex border-[1px] border-black/20 p-4 justify-between items-center gap-2 w-full h-12 bg-white rounded-md text-[#404040] cursor-pointer hover:bg-gray-100" onClick={handleClick}>
        <span><img className="w-6 h-6" src={image} alt={title} /></span>
        <span className="text-sm">{title}</span>
        <span></span>

        </div>
    </article>
  )
}

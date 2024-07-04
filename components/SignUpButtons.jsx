import { useRouter } from "next/router"
export default function SignUpButtons({ image, title}) {
const router = useRouter()

function handleClick() {
    router.push('/createAcount')
}

  return (
    <article className='flex flex-col gap-2'>
        <div className="border-2 border-red-500 w-[40rem]" onClick={handleClick}>
        <span><img src={image} alt={title} /></span>
        <span on className='col-[2/3]'>{title}</span>

        </div>
    </article>
  )
}

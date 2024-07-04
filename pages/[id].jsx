import NavBar from '@/components/NavBar'
import CenterPost from '@/components/componentsidx/IdxCenter'
import IdxAsideL from '@/components/componentsidx/IdxAsideL'
import IdxAsideR from '@/components/componentsidx/IdxAsideR'


export default function PostDetail() {
  return (
    <main className=''>
      <NavBar />
      <section className=' flex justify-center flex-nowrap  sm:mt-5'>
        <IdxAsideL />
          <CenterPost />
        <IdxAsideR />
      </section>
    </main>
  )
}

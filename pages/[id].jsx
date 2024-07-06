import NavBar from '@/components/NavBar'
import IdxAsideR from '@/components/componentsidx/IdxAsideR'
import LeftMainContent from '@/components/componentsidx/LeftMainContent'


export default function PostDetail() {
  return (
    <main className=''>
      <NavBar />
      <section className=' flex justify-center flex-nowrap  sm:mt-5'>
        <LeftMainContent />
        <IdxAsideR />
      </section>
    </main>
  )
}

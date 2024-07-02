import NavBar from '@/components/NavBar'
import AsideL from '@/components/AsideL'
import AsideR from '@/components/AsideR'
import Post from '@/components/Post'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/900.css'
import '@fontsource/roboto/700.css'

export default function Home() {
  return (
    <main className=''>
      <NavBar />
      <section className=' flex justify-center flex-nowrap mt-[70px] sm:mt-5'>
        <AsideL />
          <Post />
        <AsideR />
      </section>
    </main>
  )
}

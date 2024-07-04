import clsx from 'clsx'
const cardAside = [
  {
    title: 'FOLLOWERS SPIKE IN 7 HOURS ON DEVTO',
    comments: '5 comments'
  },
  {
    title: '10000 Followers... Thank you!',
    comments: 'New'
  },
  {
    title: 'Does TypeScript fail at enums?',
    comments: 'New'
  },
  {
    title: 'Are you a Beginner, Intermediate, or Expert Programmer?',
    comments: '24 comments'
  },
  {
    title: 'Weekly Watercooler Thread',
    comments: '12 comments'
  }
]
const cardAside2 = [
  {
    title: 'Weekly Watercooler Thread',
    comments: '12 comments'
  },
  {
    title: 'Okay! Next.js 🤯 is not that bad',
    comments: 'New'
  },
  {
    title: 'BatchGPT - Run multiple prompts, download conversations - No API key required',
    comments: '1 comment'
  }
]

export default function AsideR() {
  return (
    <aside className='hidden h-dvh w-full lg:block lg:mr-[70px] lg:max-w-[400px]'>
      <section className='rounded-md text-[#404040] shadow-[#1717170D] min-w-0 bg-white'>
        <header className='p-[0.75rem_1rem] border-b border-custom-gray'>
          <h3 className='text-[1.25rem] font-semibold '>
            <a className='text-[#404040] hover:text-[#3B49DF] cursor-pointer'>
              #discuss
            </a>
          </h3>
          <div className='text-[0.75rem] text-[#717171]'>
            Discussion threads targeting the whole community
          </div>
        </header>
        {cardAside.map((card, index) => (
          <div key={index}>
            <a className='block p-4 border-b border-custom-gray text-[#404040] font-light hover:text-[#3B49DF] cursor-pointer'>
              {card.title}
              <div className={clsx('text-[0.875rem] text-[#717171] pt-1', card.comments === 'New' && 'bg-[#FCD34D] p-1 text-center leading-none w-9 rounded-md text-[#78350F]')}>
                {card.comments} 
              </div>
            </a>
          </div>
        ))}
      </section>


      <section className='rounded-md text-[#404040] shadow-[#1717170D] min-w-0 bg-white mt-5'>
        <header className='p-[0.75rem_1rem] border-b border-custom-gray'>
          <h3 className='text-[1.25rem] font-semibold '>
            <a className='text-[#404040] hover:text-[#3B49DF] cursor-pointer'>
              #watercooler
            </a>
          </h3>
          <div className='text-[0.75rem] text-[#717171]'>
          Light, and off-topic conversation.
          </div>
        </header>
        {cardAside2.map((card, index) => (
          <div key={index}>
            <a className='block p-4 border-b border-custom-gray text-[#404040] font-light hover:text-[#3B49DF] cursor-pointer'>
              {card.title}
              <div className={clsx('text-[0.875rem] text-[#717171] pt-1', card.comments === 'New' && 'bg-[#FCD34D] p-1 text-center leading-none w-9 rounded-md text-[#78350F]')}>
                {card.comments} 
              </div>
            </a>
          </div>
        ))}
      </section>
    </aside>
  )
}

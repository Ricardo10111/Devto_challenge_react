export default function MediaCards() {
  const mediaCards = [
    {
      imagen: '/x.svg'
    },
    {
      imagen: '/facebook.svg'
    },
    {
      imagen: '/github.svg'
    },
    {
      imagen: '/instagram.svg'
    },
    {
      imagen: '/twitch.svg'
    },
    {
      imagen: '/mastodon.svg'
    }
  ]

  return (
    <section className='flex justify-start items-center gap-3 mt-4'>
      {mediaCards.map((cards, idx) => {
        return (
         
            <div key={idx} className='cursor-pointer hover:'>
              <img src={cards.imagen} alt='' className='w-6 h-6' />
            </div>
        
        )
      })}
    </section>
  )
}

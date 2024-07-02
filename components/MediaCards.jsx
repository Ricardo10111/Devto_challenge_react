export default function MediaCards() {
  const mediaCards = [
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/twitter.svg'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/facebook.svg'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/github.svg'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/instagram.svg'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/twitch.svg'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/mastodon.svg'
    }
  ]

  return (
    <section className='flex justify-start items-center gap-3 mt-4'>
      {mediaCards.map((cards, idx) => {
        return (
         
            <div key={idx} className='cursor-pointer'>
              <img src={cards.imagen} alt='' className='w-6 h-6' />
            </div>
        
        )
      })}
    </section>
  )
}

export default function CardsAside() {
  const cards = [
    {
      imagen: '/home.svg',
      title: 'Home'
    },
    {
      imagen: '/reading-list.svg',
      title: 'Readin List'
    },
    {
      imagen: '/potcast.svg',
      title: 'Potcast'
    },
    {
      imagen: '/videos.svg',
      title: 'Videos'
    },
    {
      imagen: '/tags.svg',
      title: 'Tags'
    },
    {
      imagen: '/FAQ.svg',
      title: 'FAQ'
    },
    {
      imagen: '/forem-shop.svg',
      title: 'Forem Shop'
    },
    {
      imagen: '/advertise.svg',
      title: 'Advertise on DEV'
    },
    {
      imagen: 'about.svg',
      title: 'About'
    },
    {
      imagen: '/contact.svg',
      title: 'Contact'
    },
    {
      imagen: '/guides.svg',
      title: 'Guides'
    },
    {
      imagen: 'software-comparisons.svg',
      title: 'Software comparisons'
    }
  ]

  const secondCards = [
    {
      imagen: 'code.svg',
      title: 'Code of comparisons'
    },
    {
      imagen: '/privacy.svg',
      title: 'Privacy Policy'
    },
    {
      imagen: '/terms.svg',
      title: 'Terms of use'
    }
  ]
  return (
    <div className='flex flex-col '>
      {cards.map((card, idx) => (
        <div
          key={idx}
          className='flex flex-row items-center gap-1 p-[5px] hover:bg-[#3b49df1a] hover:underline hover:text-[#0000ff] rounded-md cursor-pointer h-11'
        >
          <img
            src={card.imagen}
            alt={card.title}
            className='w-[24px] h-[24px]'
          />
          <p className='font-light text-custom-black text-[16px] hover:text-[#0000ff] '>
            {card.title}
          </p>
        </div>
      ))}

      <h2 className='mt-11 text-2xl font-bold font-gill'>Others</h2>

      {secondCards.map((card, idx) => (
        <div
          key={idx}
          className='flex flex-row items-center p-[5px] gap-3 hover:bg-[#3b49df1a] hover:underline hover:text-[#0000ff] rounded-md cursor-pointer h-11'
        >
          <img
            src={card.imagen}
            alt={card.title}
            className='w-[24px] h-[24px]'
          />
          <p className='font-light text-custom-black text-[16px] hover:text-[#0000ff] '>
            {card.title}
          </p>
        </div>
      ))}
    </div>
  )
}

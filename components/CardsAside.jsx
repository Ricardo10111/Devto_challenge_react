export default function CardsAside() {
  const cards = [
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/home.svg',
      title: 'Home'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/reading-list.svg',
      title: 'Readin List'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/potcast.svg',
      title: 'Potcast'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/videos.svg',
      title: 'Videos'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/tags.svg',
      title: 'Tags'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/FAQ.svg',
      title: 'FAQ'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/forem-Shop.svg',
      title: 'Forem Shop'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/advertise.svg',
      title: 'Advertise on DEV'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/about.svg',
      title: 'About'
    },
    {
      imagen: '	http://127.0.0.1:5500/logos_svg/contact.svg',
      title: 'Contact'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/guides.svg',
      title: 'Guides'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/software-comparisons.svg',
      title: 'Software comparisons'
    }
  ]

  const secondCards = [
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/code.svg',
      title: 'Code of comparisons'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/privacy.svg',
      title: 'Privacy Policy'
    },
    {
      imagen: 'http://127.0.0.1:5500/logos_svg/terms.svg',
      title: 'Terms of use'
    }
  ]
  return (
    <div className='flex flex-col gap-5'>
      {cards.map((card, idx) => (
        <div
          key={idx}
          className='flex flex-row items-center p-[5px] gap-3 hover:bg-[#3b49df1a] hover:underline hover:text-[#0000ff] rounded-md cursor-pointer'
        >
          <img
            src={card.imagen}
            alt={card.title}
            className='w-[24px] h-[24px]'
          />
          <p>{card.title}</p>
        </div>
      ))}

      <h2 className="mt-11 text-2xl font-bold font-gill">Others</h2>

      {secondCards.map((card, idx) => (
        <div
          key={idx}
          className='flex flex-row items-center p-[5px] gap-3 hover:bg-[#3b49df1a] hover:underline hover:text-[#0000ff] rounded-md cursor-pointer'
        >
          <img
            src={card.imagen}
            alt={card.title}
            className='w-[24px] h-[24px]'
          />
          <p>{card.title}</p>
        </div>
      ))}
    </div>
  )
}

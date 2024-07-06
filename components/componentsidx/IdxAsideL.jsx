import { useState } from 'react'

const buttons = [
  { image: '/heard.svg', number: 14 },
  { image: '/commentsAside.svg', number: 12 },
  { image: '/saveAside.svg', number: 29 },
  { image: '/dots.svg', number: '' }
]

export default function IdxAsideL({ reactionCounts, handleEmojiClick }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const handleMouseEnter = (image) => {
    if (image === '/heard.svg') {
      setIsMenuVisible(true)
    }
  }

  const handleMouseLeave = () => {
    setIsMenuVisible(false)
  }

  return (
    <aside className='hidden h-dvh w-full md:max-w-[120px] lg:max-w-[120px] lg:ml-[70px] md:block'>
      <div className='flex flex-col justify-center gap-5 mt-[30px] relative z-10'>
        {buttons.map((button, idx) => (
          <div
            key={idx}
            className='relative flex flex-col gap-4 justify-center items-center'
            onMouseEnter={() => handleMouseEnter(button.image)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={button.image} alt={`icon-${idx}`} />
            <span>
              {button.image === '/heard.svg'
                ? reactionCounts.reduce((acc, r) => acc + r.count, 0)
                : button.number}
            </span>
            {button.image === '/heard.svg' && isMenuVisible && (
              <div className='absolute left-12 bg-white border border-gray-300 rounded-lg p-4 shadow-lg flex gap-4 z-20'>
                {reactionCounts.map((reaction, index) => (
                  <div
                    key={index}
                    className='flex flex-col items-center cursor-pointer'
                    onClick={() => handleEmojiClick(index)}
                  >
                    <span className='text-2xl'>{reaction.emoji}</span>
                    <span>{reaction.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  )
}

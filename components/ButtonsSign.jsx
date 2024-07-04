import Apple from "./logos/AppleLogo"

const buttons = [
    {
        imagen: Apple,
        title: 'Continue with Apple',
    },
    {
        imagen: 'google.png',
        title: 'Continue with Facebook',
    },
    {
        imagen: 'google.png',
        title: 'Continue with Forem',
    },
    {
        imagen: 'google.png',
        title: 'Continue with GitHub',
    },
    {
        imagen: 'google.png',
        title: 'Continue with Google',
    },
    {
        imagen: 'google.png',
        title: 'Continue with Twitter (X)',
    }
]

export default function ButtonsSign() {
    return (
        <div className='flex flex-col gap-4 w-full  mr-auto mt-6'>
            {buttons.map((button, index) => (

                <div key={index} className='flex border-[1px] border-black/20 p-4 justify-between items-center gap-2 w-full h-12 bg-white rounded-md text-[#404040]'>
                    <img className='w-6 h-6' src={`/images/${button.imagen}`} alt='' />
                    <span>{button.title}</span>
                    <span></span>
                </div>
            ))}
        </div>
    )
}
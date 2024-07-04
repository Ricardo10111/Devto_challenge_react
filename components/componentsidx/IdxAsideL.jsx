const buttons = [
    {image: '/public/heard.svg', number: 14},
    {image: '/public/heard.svg', number: 12},
    {image: '/public/heard.svg', number: 29}
]
export default function IdxAsideL() {
    return (
        <aside className="hidden h-dvh w-full md:max-w-[120px] lg:max-w-[120px] lg:ml-[70px] md:block ">
        <div className="flex flex-col justify-center gap-5 mt-[30px]">
            {
                buttons.map((button, idx)=>{
                    return(
                        <div key={idx} className='flex flex-col gap-4 justify-center items-center'>
                            <img src={button.image} />
                            <span>{button.number}</span>
                        </div>
                    )
                })
            }
        </div>
        </aside>
    );
}
import SignUpButtons from "@/components/SignUpButtons";
import NavBar from "@/components/NavBar";

export default function SingupPage() {
    const buttons = [
        {image: '/images/google.png', title: 'Sign up with Google'},
        {image: '/images/facebook.png', title: 'Sign up with Facebook'},
        {image: '/images/email.png', title: 'Sign up with Email'}
    ]
    return (
        <main >
            <NavBar />
            <div className='flex justify-center items-center flex-col gap-4 w-full min-h-dvh'>

            <h1 className='text-4xl font-bold text-center'>Sign up</h1>
            <section className='flex flex-col gap-4'>
                {buttons.map((button, index) => (
                    <SignUpButtons key={index} image={button.image} title={button.title} />
                ))}
            </section>

            </div>
        </main>
    )

}
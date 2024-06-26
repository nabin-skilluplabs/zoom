import { Link } from 'react-router-dom';

function Landing () {
    return (
        <div className='h-screen flex flex-col justify-center items-center bg-blue'>
            <div className='flex flex-col gap-20'>
                <div className='flex justify-center'><img  src="https://st3.zoom.us/static/6.3.22759/image/home2/logo_ZM_Products.png" alt="Zoom Logo" /></div>
                <div className='bg-white p-8 flex flex-col gap-3 rounded-2xl w-96'>
                    <Link className='bg-blue p-2 rounded-xl text-white text-lg border border-blue text-center hover:bg-blue/90 transition-all' to="/join-a-meeting">Join a meeting</Link>
                    <Link className='bg-white p-2 rounded-xl text-black text-lg border border-black  text-center hover:bg-slate-100 transition-all' to="/sign-up">Sign up</Link>
                    <Link className='bg-wite p-2 rounded-xl text-black text-lg border border-black  text-center hover:bg-slate-100 transition-all' to="/sign-in">Sign in</Link> 
                </div>
            </div>
            <p className='text-white fixed bottom-0 text-sm'>Version: 1.0.0</p>
        </div>
    )
}

export default Landing
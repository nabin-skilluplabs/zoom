import { Link } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from 'react';


function SignUp() {
    const features = [
        'Unlimited meetings for up to 40 minutes and 100 participants each',
        'Automated captions to help make meetings more inclusive',
        'Secure, HD-quality audio and video',
        '3 editable whiteboards',
        'Team Chat for collaboration, file sharing, and more',
        'Zoom Mail and Calendar in the Zoom app',
        'Notes for creating and sharing editable documents',
        'Screen sharing, virtual backgrounds, breakout rooms, and local recording'
    ];
    const [birthYear, setBirthYear] = useState('');

    const handleBirthYear = function(event) {
        const value = event.target.value;
        setBirthYear(value);
    }

    const handleVerifyAge = (event) => {
        event.preventDefault();
        const today = new Date();
        const currentYear = today.getFullYear();
        const age = currentYear - parseInt(birthYear);
        console.log({age})
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='w-1/2 flex flex-col gap-16'>
                <h2 className='text-center text-3xl font-bold'>Verify Your Age</h2>
                <div className='flex gap-16'>
                    <div className='bg-white flex flex-col gap-4 rounded-md shadow-lg p-8'>
                        <h3 className='font-bold font-xl'>Create your free Basic account</h3>
                        <ul className='flex flex-col gap-3'>
                            {
                                features.map((feature, key) => (
                                    <li key={key} className='flex gap-2 text-sm'>
                                        <div className='w-4 flex-grow-0'>
                                            <FaCircleCheck size={16} className='flex-grow-0 mt-1 text-green-500' />
                                        </div>
                                        {feature}
                                        </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='flex items-center'>
                        <form onSubmit={handleVerifyAge} className='flex flex-col gap-5'>
                            <label className='text-center'>Please confirm your birth year. This data will not be stored.</label>
                            <input value={birthYear} onChange={handleBirthYear} className='border border-black text-md p-3 rounded-md' type='text' placeholder='Birth Year' />
                            <button disabled={!birthYear} className='p-2 text-md rounded-xl bg-blue text-white disabled:bg-slate-100 disabled:text-slate-500 '>Continue</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='fixed bottom-0 flex justify-between w-1/2 p-4'>
                <Link to="/">Back</Link>
                <p>Already have an account? <Link to="">Sign In</Link></p>
            </div>
        </div>
    )
}
export default SignUp
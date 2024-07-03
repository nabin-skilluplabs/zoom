import { Link } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../validationSchemas/getStarted';
import { signUpCheckEmail } from '../actions/signUp';


function GetStarted() {
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
   
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(validationSchema),
      });

    async function handleEmail(data) {
        await signUpCheckEmail(data);
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='w-1/2 flex flex-col gap-16'>
                
                <div className='flex items-center gap-16'>
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

                    <div className='flex flex-col  items-center'>
                        <h2 className='text-center text-3xl mb-8 font-bold'>Let's Get Started</h2>
                        <form onSubmit={handleSubmit(handleEmail)} className='flex flex-col gap-5'>
                            <input {...register('email')} className='border border-black text-md p-3 rounded-md' type='text' placeholder='Email Address' />
                            {errors.email?.message && <span className='text-sm text-red-600'>{errors.email.message}</span>}
                            <button disabled={!watch('email')} className='p-2 text-md rounded-xl bg-blue text-white disabled:bg-slate-100 disabled:text-slate-500 '>Continue</button>
                            <p>By proceeding, I agree to <Link to="#">Zoom's Privacy Statement</Link> and <Link to="#">Terms of Service</Link>.</p>
                        </form>
                    </div>
                    
                </div>
            </div>
            <div className='fixed bottom-0 flex justify-between w-1/2 p-4'>
                <Link to="/sign-up">Back</Link>
                <p>Already have an account? <Link to="/sign-in">Sign In</Link></p>
            </div>
        </div>
    )
}
export default GetStarted;
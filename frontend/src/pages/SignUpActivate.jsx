import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../validationSchemas/signupVerification';
import {  signUpVerifyCode } from '../actions/signUp';
import { useState } from 'react';


function SignUpActivate() {
    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const email = searchParams.get('email');
    const [otpError, setOtpError] = useState('');

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

    async function handleCode(data) {
        setOtpError('');
        const response = await signUpVerifyCode({
            ...data,
            email,
        });
        const body = await response.json();
        if(response.status === 400) {
            
            setOtpError(body);
        }
        else if(response.status === 200) {
            navigate(`/sign-up/activate?email=${email}&id=${body.id}`)
        }
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
                        <h2 className='text-center text-3xl mb-8 font-bold'>Create Your Account
                        </h2>
                        <p className='text-md my-4'>Enter your full name and password.

</p>
                        {
                            otpError && (<p className='text-sm text-red-600 my-4'>{otpError}</p>)
                        }
                        <form onSubmit={handleSubmit(handleCode)} className='flex flex-col gap-5'>
                            <input {...register('code')} className='border border-black text-md p-3 rounded-md' type='text' placeholder='Verification code' />
                            {errors.code?.message && <span className='text-sm text-red-600'>{errors.code.message}</span>}
                            <button disabled={!watch('code')}  className='p-2 text-md rounded-xl bg-blue text-white disabled:bg-slate-100 disabled:text-slate-500 '>Continue</button>
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
export default SignUpActivate;
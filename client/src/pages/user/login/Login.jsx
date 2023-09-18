import { Button, Input } from 'antd'
import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from '../../../firebase/firebaseConfig';

export default function Login() {
    const navigate = useNavigate();
    //dang nhap voi API co san


    //dang nhap voi goodle
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(response => {
                console.log(response);
                const userLocal = {
                    email: response.user.email,
                    userName: response.user.displayName,
                    image: response.user.photoURL,
                    userId: response.user.uid,
                };
                //luu thong tin len local
                localStorage.setItem("userLocal", JSON.stringify(userLocal));

                //chuyen huog ve trang home
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <>
            <div className='flex items-center justify-center min-h-screen'>
                <form className='p-6 border rounded w-1/4'>
                    <h3 className='text-center text-2xl'>Login</h3>
                    <div className='mb-4'>
                        <label htmlFor="email">Email</label>
                        <Input status="error" id='email' className='mt-2' placeholder='Enter email' />
                        <div className='mt-1 text-red-400 text-xs'>Email is required</div>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password">Password</label>
                        <Input status="error" id='password' className='mt-2' placeholder='Enter password' />
                        <div className='mt-1 text-red-400 text-xs'>Password is required</div>
                    </div>
                    <div>
                        <Button type='primary' className='w-full t-btn-primary'>Login</Button>
                    </div>
                    <div className='flex justify-between items-center mt-3 text-sm'>
                        <Link to={"/"}>Back to Home</Link>
                        <Link to={"/forgot-password"}>Forgot Password</Link>
                    </div>
                    <div className='text-center my-3'>
                        <span>Or</span>
                    </div>
                    <div >
                        <Button onClick={signInWithGoogle} className='w-full flex items-center justify-center'>
                            <img height={20} width={20}
                                src="https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg" alt="" />
                            Login with Google</Button>
                    </div>
                    <div className='text-center mt-2 text-sm'>
                        You dont't have account? <Link to="/register"> Register</Link>
                    </div>

                </form>
            </div>
        </>
    )
}

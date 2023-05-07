import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FaEye } from 'react-icons/fa';
import { AiTwotoneEyeInvisible } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from '../hooks/useToken';
import Loading from '../Shared/Loading';



const Login = () => {

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, googleUser, Googleloading, GoogleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const [token] = useToken(user || googleUser)
    const emailvalue = getValues("email");

    const [passwordVisivility, setPasswordVisivility] = useState(false)

    let signInError;
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {

            navigate(from, { replace: true });
        }

    }, [token, from, navigate])


    if (loading || Googleloading) {
        return <Loading></Loading>
    }

    if (error || GoogleError) {
        signInError = <small className='text-red-500'>{error?.message || GoogleError?.message}</small>
    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)

    };



    return (

        <div className='flex  mt-5 justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-lg">
                <div className="card-body ">
                    <h2 className="text-center font-bold text-2xl">LOGIN</h2>


                    {/*  form  */}

                    <form onSubmit={handleSubmit(onSubmit)}>





                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>

                            {/* email input */}

                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },

                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Please provide a valid Email"
                                    }
                                })}

                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            </label>

                        </div>

                        {/* pasword  input*/}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <div className='input-group'>
                                <input
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'password is required'
                                        },

                                        minLength: {
                                            value: 6,
                                            message: "Must be 6 characters or longer"
                                        }
                                    })}

                                    // type="password"
                                    type={passwordVisivility ? "text" : "password"}
                                    placeholder="password"
                                    className="input shadow-0 input-bordered w-full max-w-xs"
                                />
                                <span
                                    onClick={() => setPasswordVisivility(!passwordVisivility)}
                                    className='cursor-pointer'
                                >{passwordVisivility ? <AiTwotoneEyeInvisible /> : <FaEye />} </span>
                            </div>

                            <label className="label">
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            </label>

                        </div>



                        {signInError}
                        <input type="submit" value={'LOGIN'} className='btn w-full btn-secondary text-white' />
                        <Link to='/signup'><small>New To Friends Factory ? <span className='text-primary font-mono hover:underline'>Create an account</span></small></Link>
                        <br />


                        <small>Forgate password ? <button onClick={async () => {
                            await sendPasswordResetEmail(emailvalue);
                            alert('Sent email');
                        }} className='text-primary font-mono hover:underline'>Resate password</button></small>


                    </form>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="hover:bg-[#060517] btn btn-outline"
                    >Continew with Google</button>

                </div>

            </div>
        </div>
    );
};

export default Login;
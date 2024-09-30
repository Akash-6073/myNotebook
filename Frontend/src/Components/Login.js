import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FootAbout from './FootAbout';
import axios from 'axios'; // Import axios
import { useForm } from 'react-hook-form'; // Import useForm

function Login() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm(); // Destructure from useForm
    let navigate = useNavigate();
    const url = process.env.REACT_APP_URL;

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${url}/login`, {
                email: data.email,
                password: data.password
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const json = response.data;
            console.log(json);

            if (json.success) {
                // Redirect on successful login
                localStorage.setItem('token', json.token); // Save token to local storage
                setTimeout(() => {
                    navigate("/home");
                }, 500);

                toast.success('Logged in Successfully!', {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                handleLoginError(json);
            }
        } catch (error) {
            console.log("Error logging in:", error);
            toast.error("Something went wrong. Please try again.", {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    const handleLoginError = (json) => {
        let msg;
        if (json.error === "Password Wrong") {
            msg = "Invalid Password !!";
            document.querySelector('.passCheck').classList.add("error");
        }
        if (json.error === "User Wrong") {
            msg = "Invalid Email !!";
            document.querySelector('.userCheck').classList.add("error");
        }
        setTimeout(() => {
            document.querySelector('.passCheck').classList.remove("error");
            document.querySelector('.userCheck').classList.remove("error");
        }, 1000);
        toast.error(msg, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <>
         <ToastContainer
                        position="top-center"
                        autoClose={1500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                        theme="light"
                    />
            <div className="loginForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Sign in</h1>
                    <hr />
                    <div className="frm">
                        <label htmlFor="email">Email</label>
                        <div className={errors.email?"passCheck errorSubmit":"passCheck "} style={{ display: "flex", border: "2px solid white", alignItems: "center", backgroundColor: "#E8F0FE", borderRadius: "5px" }}>
                            <div >
                                <i style={{ margin: "0 15px"}} className="fa-solid fa-envelope"></i>
                            </div>
                            <input
                                type="email"
                                className={errors.email?"inputError":""}
                                placeholder={errors.email && "Enter Your Email"}
                                {...register('email', { required: true})} // Register input
                            />
                        </div>
                        {/* {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>} Display error */}
                        <br />
                        <label htmlFor="password">Password</label>
                        <div className={errors.password? "errorSubmit":""} style={{ display: "flex", border: "2px solid white", alignItems: "center", backgroundColor: "#E8F0FE", borderRadius: "5px" }}>
                            <i style={{ margin: "0 15px" }} className="fa-solid fa-lock"></i>
                            <input
                                type="password"
                                className={errors.password?"inputError":""}
                                placeholder={errors.password && "Enter Your Password*"}
                                {...register('password', { required: true })} // Register input
                            />
                        </div>
                        {/* {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>} Display error */}
                        <br />
                        <button type="submit"  className={isSubmitting?"sinup handlSubmmit":"sinup"} style={{ cursor: "pointer" }} disabled={isSubmitting}>
                            {isSubmitting ? "Signing in..." : "Sign in"} {isSubmitting?"":<i className="fa-solid fa-arrow-right-to-bracket"></i>} 
                        </button>
                        <a>Don't have an Account? <Link to="/signup" style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>Sign up</Link></a>
                    </div>

                   
                </form>
            </div>
            <FootAbout />
        </>
    )
}

export default Login;

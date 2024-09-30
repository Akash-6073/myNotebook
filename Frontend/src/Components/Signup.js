import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FootAbout from './FootAbout';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Signup() {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const url = process.env.REACT_APP_URL;
    const handleSubmitSignup = async (data) => {
        try {
            const response = await axios.post(`${url}/createUser`, {
                name: data.name,
                email: data.email,
                password: data.password,
            });

            const json = response.data;
            console.log(json);

            if (json.success) {
                localStorage.setItem('token', json.token); // Save token
                navigate("/home");
                toast.success('Signed Up Successfully 👍!', {
                    position: "bottom-right",
                    autoClose: 1500,
                    theme: "colored",
                });
            }
        } catch (error) {
          if (error.response && error.response.status === 400) {
            console.error("Validation Error: ", error.response.data.errors);
            toast.error('User Already Exists', {
               position: "top-center",
               autoClose: 1500,
               theme: "dark",
            });
         } else {
            console.error(error);
            toast.error('Something went wrong. Please try again.', {
               position: "top-center",
               autoClose: 1500,
               theme: "dark",
            });
         }
        }
    };

    return (
        <div>
            <div className='loginForm'>
                <form onSubmit={handleSubmit(handleSubmitSignup)}>
                    <h1>Sign Up</h1>
                    <hr />
                    <div className="frm">
                        <label htmlFor="name">Username</label>
                        <div className={errors.name?"passCheck errorSubmit":"passCheck "} style={{ display: "flex",border: "2px solid white", alignItems: "center", backgroundColor: "#E8F0FE", borderRadius: "5px" }}>
                            <i style={{ margin: "0 15px" }} className="fa-solid fa-user"></i>
                            <input
                                type="text"
                                name='name'
                                placeholder={errors.name && "Username should be at least 3 characters"}
                                {...register('name', { required: true, minLength: { value: 3, message: "Username should be at least 3 characters" } })}
                                className={errors.name ? 'inputError' : ''}
                            />
                        </div>
                        {/* {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>} */}
                        <br />

                        <label htmlFor="email">Email</label>
                        <div className={errors.email?"passCheck errorSubmit":"passCheck "} style={{ display: "flex",border: "2px solid white", alignItems: "center", backgroundColor: "#E8F0FE", borderRadius: "5px" }}>
                            <i style={{ margin: "0 15px" }} className="fa-solid fa-envelope"></i>
                            <input
                                type="email"
                                name='email'
                                {...register('email', { required:true })}
                                className={errors.email ? 'inputError' : ''}
                                placeholder={errors.email && "Email is required"}
                            />
                        </div>
                        {/* {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>} */}
                        <br />

                        <label htmlFor="password">Password</label>
                        <div className={errors.password? "errorSubmit":""} style={{ display: "flex",border: "2px solid white", alignItems: "center", backgroundColor: "#E8F0FE", borderRadius: "5px" }}>
                            <i style={{ margin: "0 15px" }} className="fa-solid fa-lock"></i>
                            <input
                                type="password"
                                name='password'
                                placeholder={errors.password && "Password must be at least 5 characters"}
                                {...register('password', { required: "Password is required", minLength: { value: 5, message: "Password must be at least 5 characters" } })}
                                className={errors.password ? 'inputError' : ''}
                            />
                        </div>
                        {/* {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>} */}
                        <br />

                        <button type='submit' className={isSubmitting?"sinup handlSubmmit":"sinup"} disabled={isSubmitting}>
                            {isSubmitting ? "Signing up..." : "Sign Up"} {isSubmitting?"":<i className="fa-solid fa-user-plus"></i>} 
                        </button>
                        <a>Already have an Account? <Link to="/login" style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>Sign in </Link></a>
                        <Link to='/' style={{ textAlign: "center", color: "#ff004f", textDecoration: "underline", textUnderlineOffset: "5px" }}>- Why Create an account ? -</Link>
                    </div>
                </form>
                <ToastContainer position="top-center"
                    autoClose={1500}
                    hideProgressBar={false}
                    closeOnClick
                    draggable
                    theme="light" />
            </div>
            <FootAbout />
        </div>
    )
}

export default Signup;

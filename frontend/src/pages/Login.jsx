import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [signupData, setSignupData] = useState({ name: "", email: "", password: "", role: "user" });
    const [isLoginView, setIsLoginView] = useState(true);
    const navigate = useNavigate();
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/users/login', loginData);
            toast.success("Login successful!");
            localStorage.setItem("token", response.data.token);
            navigate('/view-task'); 
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed!");
        }
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/users/register', signupData);
            toast.success("Signup successful! You can now log in.");
            setIsLoginView(true); 
        } catch (error) {
            toast.error(error.response?.data?.message || "Signup failed!");
        }
    };

    const handleInputChange = (e, isSignup = false) => {
        const { name, value } = e.target;
        if (isSignup) {
            setSignupData((prev) => ({ ...prev, [name]: value }));
        } else {
            setLoginData((prev) => ({ ...prev, [name]: value }));
        }
    };

    return (
        <div className="container">
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="user-data-form">
                <div className="form-wrapper m-auto">
                    {isLoginView ? (
                        // Login Form
                        <>
                            <div className="text-center mb-20">
                                <h2>Welcome Back!</h2>
                            </div>
                            <form onSubmit={handleLoginSubmit}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative mb-25">
                                            <label>Email*</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={loginData.email}
                                                onChange={(e) => handleInputChange(e)}
                                                placeholder="Youremail@gmail.com"
                                                autoComplete="email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative mb-20">
                                            <label>Password*</label>
                                            <input
                                                type="password"
                                                name="password"
                                                value={loginData.password}
                                                onChange={(e) => handleInputChange(e)}
                                                placeholder="Enter Password"
                                                className="pass_log_id"
                                                autoComplete="current-password"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="fs-20 color-dark text-center d-flex align-items-center justify-content-center">
                                            <span>Don't have an account?</span>{" "}
                                            <button 
                                                type="button" 
                                                onClick={() => setIsLoginView(false)}
                                                className="btn btn-link text-primary text-decoration-underline fs-20 p-0 ms-2"
                                            >
                                                Sign Up
                                            </button>
                                        </div>
                                        <p className="fs-20 color-dark text-center">
                                            <Link to={"/forget-password"} className="text-primary">Forget Password?</Link>
                                        </p>
                                        <button type="submit" className="btn-two w-100 text-uppercase d-block mt-20 bg-primary">
                                            Login
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </>
                    ) : (
                        // Signup Form
                        <>
                            <div className="text-center mb-20">
                                <h2>Register</h2>
                            </div>
                            <form onSubmit={handleSignupSubmit}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative mb-25">
                                            <label>Name*</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={signupData.name}
                                                onChange={(e) => handleInputChange(e, true)}
                                                placeholder="Your Full Name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative mb-25">
                                            <label>Email*</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={signupData.email}
                                                onChange={(e) => handleInputChange(e, true)}
                                                placeholder="Your Email"
                                                autoComplete="email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative d-flex mb-25">
                                            <label className="me-5">Select Role</label>
                                            <select
                                                name="role"
                                                value={signupData.role}
                                                onChange={(e) => handleInputChange(e, true)}
                                                required
                                            >
                                                <option value="User">User</option>
                                                <option value="Admin">Admin</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta position-relative mb-20">
                                            <label>Password*</label>
                                            <input
                                                type="password"
                                                name="password"
                                                value={signupData.password}
                                                onChange={(e) => handleInputChange(e, true)}
                                                placeholder="Enter Password"
                                                className="pass_log_id"
                                                autoComplete="new-password"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="fs-20 color-dark text-center d-flex align-items-center justify-content-center">
                                            <span>Already have an account?</span>{" "}
                                            <button 
                                                type="button" 
                                                onClick={() => setIsLoginView(true)}
                                                className="btn btn-link text-primary text-decoration-underline fs-20 p-0 ms-2"
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <button type="submit" className="btn-two w-100 text-uppercase d-block mt-20 bg-primary">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;

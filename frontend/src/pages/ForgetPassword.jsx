import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";


const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/password-reset/send-otp`, { email });
      toast.success("OTP sent to your email!");
      localStorage.setItem("otpToken", response.data.otpToken); 
      localStorage.setItem("email", email); 
      navigate('/otp')
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send OTP!");
    }
  };

  return (
    <div className="container">
      <div className="user-data-form">
        <div className="form-wrapper m-auto">
          <div className="tab-content mt-30">
            <div className="tab-pane show active" role="tabpanel" id="fc1">
              <div className="text-center mb-20">
                <h2>Forget Password!</h2>
                <p className="fs-20 color-dark">Enter your Email ID</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="input-group-meta position-relative mb-25">
                      <label>Email*</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="abcd@gmail.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn-two bg-primary w-100 text-uppercase d-block mt-20">
                      Send OTP
                    </button>
                    <p className="fs-20 color-dark text-center">
                                            <Link to={"/login"} className="text-dark mt-20">Back to Login!</Link>
                                        </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

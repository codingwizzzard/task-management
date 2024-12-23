import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const otpToken = localStorage.getItem("otpToken");
  
    if (!otpToken) {
      toast.error("OTP token is missing. Please try again.");
      return;
    }
    
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/password-reset/verify-otp`, {
        otp,
        otpToken,
        password,
      });
  
      toast.success(response.data.message);
      localStorage.removeItem("otpToken");
      navigate("/login");
    } catch (error) {
      // Check if the error is due to an incorrect OTP
      if (error.response?.data?.message?.toLowerCase().includes("incorrect otp")) {
        toast.error("The OTP you entered is incorrect. Please try again.");
      } else {
        toast.error(error.response?.data?.message || "Failed to verify OTP.");
      }
    }
  };
  

  return (
    <div className="container">
      <div className="user-data-form">
        <div className="form-wrapper m-auto">
          <div className="tab-content mt-30">
            <div className="tab-pane show active" role="tabpanel" id="fc1">
              <div className="text-center mb-20">
                <h2>Verify OTP</h2>
                <p className="fs-20 color-dark">Enter your OTP and New Password</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="input-group-meta position-relative mb-25">
                      <label>OTP*</label>
                      <input
                        type="text"
                        name="otp"
                        placeholder="Enter OTP"
                        required
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group-meta position-relative mb-25">
                      <label>New Password*</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter New Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn-two w-100 text-uppercase d-block mt-20 bg-primary">
                      Verify OTP
                    </button>
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

export default OTP;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../../utils/api";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState(localStorage.getItem("email") || ""); 
  const navigate = useNavigate();

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        alert("Email not found. Please login again.");
        navigate("/user/login");
        return;
      }

      const response = await apiFetch("/user/loginotp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }), 
      });
      console.log(response)

      const data = await response.json();
      console.log(data);

      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        navigate("/user/dashboard");
      } else {
        alert(data.message || "OTP verification failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error verifying OTP");
    }
  };

  return (
    <form onSubmit={handleVerifyOtp}>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button type="submit">Verify OTP</button>
    </form>
  );
}

export default VerifyOtp;



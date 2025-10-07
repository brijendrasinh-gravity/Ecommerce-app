import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { apiFetch, setAuth } from "../../utils/api";
 
function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await apiFetch("/user/login", {
        method: "POST",
        body: { email, password },
      });
 
      console.log(res);
      localStorage.setItem("email", email);
       
      if (res.token) {
        setAuth(res.token, "user");
      }
 
      alert("OTP sent to your email");
      navigate("/user/dashboard"); 
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Card className="p-4 shadow-sm  w-25  ">
      <h3>User Login</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" disabled={loading} className="w-100">
          {loading ? "Logging in" : "Login"}
        </Button>
      </Form>
      <div className="d-flex justify-content-between mt-3">
        <Link to="/user/register">Register</Link>
        <Link to="/user/forgot-password">Forgot Password?</Link>
      </div>
    </Card>
    </div>
  );
}
 
export default UserLogin;

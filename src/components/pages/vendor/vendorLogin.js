import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { apiFetch, setAuth } from "../../utils/api";

function VendorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiFetch("/vendor/login", {
        method: "POST",
        body: { email, password },
      });
      setAuth(res.token, "vendor");
      navigate("/vendor/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Card className="p-4 shadow-sm  w-25">
      <h3 className="d-flex justify-content-center align-items-center">Vendor Login</h3>
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
        <Button type="submit" className="w-100">
          Login
        </Button>
      </Form>
      <div className="d-flex justify-content-between mt-3">
        <Link to="/vendor/register">Register</Link>
        <Link to="/vendor/forgot-password">Forgot Password?</Link>
      </div>
    </Card>
    </div>
  );
}

export default VendorLogin;

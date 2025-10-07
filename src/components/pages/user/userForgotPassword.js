import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { apiFetch } from "../../utils/api";
import { useNavigate } from "react-router-dom";

function UserForgotPassword() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [issuedToken, setIssuedToken] = useState("");
  let navigate = useNavigate()


  const handleSend = async (e) => {
    e.preventDefault();
    try {
      const res = await apiFetch("/user/forgotpassword", {
        method: "POST",
        body: { email },
      });
      
      setIssuedToken(res.resetToken || "");
      alert("Reset token generated. Copy it and go to Reset page.");
      setToken(res.resetToken || "");
      navigate("/user/reset-password");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Card className="p-4 shadow-sm">
      <h3>User Forgot Password</h3>
      <Form onSubmit={handleSend}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" className="w-100">
          Send Reset Token
        </Button>
      </Form>
      {issuedToken && (
        <div className="mt-3">
          <small className="text-muted">Token:</small>
          <pre className="bg-light p-2" style={{ whiteSpace: "pre-wrap" }}>
            {token}
          </pre>
        </div>
      )}
    </Card>
  );
}

export default UserForgotPassword;
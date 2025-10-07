import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../../utils/api";

function VendorRegister() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiFetch("/vendor/register", {
        method: "POST",
        body: { fullname, email, password },
      });
      alert("Registered. Wait for admin approval.");
      navigate("/vendor/login");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Card className="p-4 shadow-sm">
      <h3>Vendor Register</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </Form.Group>
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
          Register
        </Button>
      </Form>
    </Card>
  );
}
export default VendorRegister;
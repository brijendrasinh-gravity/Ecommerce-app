import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { apiFetch } from "../../utils/api";

function AdminResetPassword() {
  const [token, setToken] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiFetch("/admin/forgotresetpassword", {
        method: "POST",
        body: { token, newpassword },
      });
      alert("Password reset. Please login.");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Card className="p-4 shadow-sm">
      <h3>Admin Reset Password</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Reset Token</Form.Label>
          <Form.Control
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            value={newpassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" className="w-100">
          Reset
        </Button>
      </Form>
    </Card>
  );
}

export default AdminResetPassword;
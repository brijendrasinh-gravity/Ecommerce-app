import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { apiFetch } from "../../utils/api";

function UserChangePassword() {
  const [oldpassword, setOld] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiFetch("/user/changepassword", {
        method: "POST",
        auth: true,
        body: { oldpassword, newpassword },
      });
      alert("Password changed");
      setOld("");
      setNewPassword("");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Card className="p-4 shadow-sm">
      <h3>User Change Password</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Old Password</Form.Label>
          <Form.Control
            type="password"
            value={oldpassword}
            onChange={(e) => setOld(e.target.value)}
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
          Change
        </Button>
      </Form>
    </Card>
  );
}

export default UserChangePassword;
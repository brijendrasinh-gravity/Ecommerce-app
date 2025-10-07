import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { apiFetch } from "../../utils/api";

function AdminChangePassword() {
  const [oldpassword, setOld] = useState("");
  const [newpassword, setNewP] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiFetch("/admin/changepassword", {
        method: "POST",
        auth: true,
        body: { oldpassword, newpassword },
      });
      alert("Password changed");
      setOld("");
      setNewP("");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Card className="p-4 shadow-sm">
      <h3>Admin Change Password</h3>
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
            onChange={(e) => setNewP(e.target.value)}
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

export default AdminChangePassword;  
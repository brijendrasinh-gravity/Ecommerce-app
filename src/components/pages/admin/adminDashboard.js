import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function AdminDashboard() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Card className="p-4 shadow-sm w-50">
      <h3 className="mb-3">Admin Dashboard</h3>
      <div className="d-flex flex-wrap gap-2">


        <Button as={Link} to="/admin/pending-vendors">
          Pending Vendors
        </Button>
        <Button as={Link} to="/admin/change-password" variant="secondary">
          Change Password
        </Button>


        <Button as={Link} to="/admin/users-orders" variant="info">
          Users & Orders
        </Button>
        <Button as={Link} to="/admin/vendors-products" variant="warning">
          Vendors & Products
        </Button>
        <Button as={Link} to="/admin/orders" variant="success">
          All Orders
        </Button>
      </div>
    </Card>
    </div>
  );
}

export default AdminDashboard;
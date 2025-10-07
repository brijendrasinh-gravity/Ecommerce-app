import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function VendorDashboard() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" >
    <Card className="p-4 shadow-sm w-50">
      <h3>Vendor Dashboard</h3>
      <div className="d-flex gap-2">
        <Button as={Link} to="/vendor/products">
          Manage Products
        </Button>
        <Button as={Link} to="/vendor/change-password" variant="secondary">
          Change Password
        </Button>
      </div>
    </Card>
    </div>
  );
}

export default VendorDashboard;


import React from "react";
import { Card, Table, Button } from "react-bootstrap";
import { apiFetch } from "../../utils/api";
import { useState, useEffect } from "react";


function PendingVendors(){

    const [vendors, setVendors] = useState([]);
    const load = async () => {
      try {
        const res = await apiFetch("/admin/pendingvendors", { auth: true });
        setVendors(res || []);
      } catch (err) {
        alert(err.message);
      }
    };
    useEffect(() => {
      load();
    }, []);
  
    const approve = async (id) => {
      try {
        await apiFetch(`/admin/approvevendor/${id}`, {
          method: "PUT",
          auth: true,
        });
        await load();
      } catch (err) {
        alert(err.message);
      }
    };
    const reject = async (id) => {
      try {
        await apiFetch(`/admin/rejectvendor/${id}`, {
          method: "PUT",
          auth: true,
        });
        await load();
      } catch (err) {
        alert(err.message);
      }
    }


    return(
        <Card className="p-4 shadow-sm">
      <h3>Pending Vendors</h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((v) => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.fullname}</td>
              <td>{v.email}</td>
              <td>{v.isVerified}</td>
              <td className="d-flex gap-2">
                <Button size="sm" onClick={() => approve(v.id)}>
                  Approve
                </Button>
                <Button size="sm" variant="danger" onClick={() => reject(v.id)}>
                  Reject
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
    )
}

export default PendingVendors;
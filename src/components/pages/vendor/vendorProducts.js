import React, { useEffect, useState } from "react";
import { apiFetch } from "../../utils/api";
import { Card, Form, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

function VendorProducts() {
  const [stock, setStock] = useState("");
  const [editId, setEditId] = useState(null);
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const load = async () => {
    try {
      const res = await apiFetch("/vendor/list");
      setList(res || []);
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    load();
  }, []);

  const createOrUpdate = async (e) => {
    e.preventDefault();
    const body = {
      name,
      description,
      price: Number(price),
      stock: Number(stock),
    };
    try {
      if (editId) {
        await apiFetch(`/vendor/updateproduct/${editId}`, {
          method: "PUT",
          auth: true,
          body,
        });
        alert("Product updated");
      } else {
        await apiFetch("/vendor/createproduct", {
          method: "POST",
          auth: true,
          body,
        });
        alert("Product created");
      }
      setName("");
      setDescription("");
      setPrice("");
      setStock("");
      setEditId(null);
      await load();
    } catch (err) {
      alert(err.message);
    }
  };

  const editRow = (p) => {
    setEditId(p.id);
    setName(p.name || "");
    setDescription(p.description || "");
    setPrice(p.price || "");
    setStock(p.stock || "");
  };
  const delRow = async (id) => {
    try {
      await apiFetch(`/vendor/deleteproduct/${id}`, {
        method: "DELETE",
        auth: true,
      });
      alert("Deleted");
      await load();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Card className="p-4 shadow-sm">
      <h3>Vendor Products</h3>

      <Form onSubmit={createOrUpdate} className="mb-3">
        <div className="row g-2">
          <div className="col-md-3">
            <Form.Control
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3">
            <Form.Control
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <Form.Control
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="col-md-2">
            <Form.Control
              type="number"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </div>
          <div className="col-md-2">
            <Button type="submit" className="w-100">
              {editId ? "Update" : "Create"}
            </Button>
          </div>
        </div>
      </Form>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{p.price}</td>
              <td>{p.stock}</td>
              <td className="d-flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => editRow(p)}
                >
                  Edit
                </Button>
                <Button size="sm" variant="danger" onClick={() => delRow(p.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}

export default VendorProducts;

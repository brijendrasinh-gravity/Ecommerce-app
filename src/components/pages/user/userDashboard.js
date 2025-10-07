import React, { useEffect, useState } from "react";
import { Card, Button, Table, Form } from "react-bootstrap";
import { apiFetch } from "../../utils/api";

function UserDashboard() {
  const [products, setProducts] = useState([]);
  const [id, setProductId] = useState("");
  const [stock, setQuantity] = useState(1);
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const load = async () => {
    try {
      const res = await apiFetch("/user/products");
      setProducts(res || []);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const placeOrder = async () => {
    try {
      await apiFetch("/user/order", {
        method: "POST",
        auth: true,
        body: {
    //       "id":4,
    // "stock":1,
    // "address":"ahmedabad", 
    // "mobileNumber":123123123    , id, stock, address, mobileNumber
    id: Number(id),
    stock: Number(stock),
          address,
          mobileNumber,
        },
      });
      alert("Order placed!");
      // setProducts([]);

      setProductId("");
      setQuantity(1);
      setAddress("");
      setMobileNumber("");

      await load();
      console.log(products);


    } catch (err) {
      console.error("Order failed:", err);
      alert(err.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Card className="p-4 shadow-sm w-50">
      <h3 >User Dashboard</h3>

      <div className="d-flex flex-column gap-2 mb-3">
        <Form.Select
          value={id}
          onChange={(e) => setProductId(e.target.value)}
        >
          <option value="">Select product</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
            {p.name} - ₹{p.price}
            </option>
          ))}
        </Form.Select>

        <Form.Control
          type="number"
          style={{ maxWidth: 200 }}
          value={stock}
          onChange={(e) => setQuantity(e.target.value)}
          min={1}
          placeholder="stock"
        />

        <Form.Control
          type="text"
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <Form.Control
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />

        <Button className="btn btn-success"
          onClick={placeOrder}
          disabled={!id || !address || !mobileNumber}
        >
          Place Order
        </Button>
      </div>


      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
    </div>
  );
}

export default UserDashboard;


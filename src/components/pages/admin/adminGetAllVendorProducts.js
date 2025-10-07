import React from "react";
import { useEffect, useState } from "react";
import { Card, Table, Spinner, Alert } from "react-bootstrap";
import { apiFetch, getAuth, getToken } from "../../utils/api";
// import ListGroupItem from "react-bootstrap";

function AdminVendorProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const token = getToken("admin"); 
        const res = await apiFetch("/admin/vendors-products", {
          method: "GET",
          auth:true
        //   headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(res || []);
        console.log(products); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Card className="p-4 shadow-sm">
      <h3>All Vendor Products</h3>
      {loading && (
        <div className="d-flex justify-content-center my-3">
          <Spinner animation="border" />
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && !error && (
        <Table striped bordered hover responsive className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Vendor</th>
              <th>Product</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>
         
          <tbody>
            {products.map((p)=>(
                <tr key={p.id}>
                  <td>{p + 1}</td>
                  <td>{p.fullname}</td>
                  <td>{p.name}</td>
                  <td>{p.description}</td>
                  <td>{p.subcategory?.name || "-"}</td>
                  <td>₹{p.price}</td>
                  <td>{p.stock}</td>
                  <td>{p.name}</td>
                </tr>
))}
            
            {/* ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  No products found.
                </td>
              </tr>
            )} */}
          </tbody>
        </Table>
      )}
    </Card>
  );
}

export default AdminVendorProducts;
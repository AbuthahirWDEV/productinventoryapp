import React from "react";

const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <ul style={{ display: "flex" }}>
      {products.length === 0 ? (
        <li style={{ listStyle: "none" }}>
          No product available, please add products...
        </li>
      ) : (
        products.map((product) => (
          <li
            key={product.id}
            style={{
              border: "1px solid #222",
              margin: "6px",
              listStyle: "none",
              padding: "12px",
              width: "200px",
            }}
          >
            <h5>Product Name: {product.productName}</h5>
            <p>Price: {product.price}</p>
            <p>Category: {product.categorcies}</p>

            <label>In Stock</label>
            <input type="checkbox" checked={product.inStock}/>

            <div>
              <button onClick={() => onEdit(product.id)}>Edit</button>
              <button onClick={() => onDelete(product.id)}>Delete</button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default ProductList;

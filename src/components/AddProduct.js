import React, { useEffect, useState } from "react";

const AddProduct = ({ onAddProduct, editMode, productToEdit , category }) => {
  

  // const [formData, setFormData] = useState({
  //   productName: "",
  //   price: "",
  //   category: "",
  //   inStock: false,
  // });

  useEffect(() => {
    if (editMode && productToEdit) {
      setProductName(productToEdit.productName);
      setPrice(productToEdit.price);
      setCategorcies(productToEdit.categorcies);
      setInStock(productToEdit.inStock);
    }
  }, [editMode, productToEdit]);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [categorcies, setCategorcies] = useState("Electronics");
  const [inStock, setInStock] = useState(false);

  function reset() {
    setProductName("");
    setPrice("");
    setCategorcies("Electronics");
    setInStock(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!productName && !price) return;

    const newProduct = {
      id: editMode ? productToEdit.id : Date.now(),
      productName,
      price,
      categorcies,
      inStock,
    };

    onAddProduct(newProduct);
    reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Products</h2>
      <label>Prodcut name</label>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <label>Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label>Category </label>
      <select
        value={categorcies}
        onChange={(e) => setCategorcies(e.target.value)}
      >
        {category.map((categories, index) => (
          <option key={index}>{categories}</option>
        ))}
      </select>
      <label>Stock availablity</label>
      <input
        type="checkbox"
        checked={inStock}
        onChange={(e) => setInStock(e.target.value)}
      />
      <button>Add Prodcut</button>
    </form>
  );
};

export default AddProduct;

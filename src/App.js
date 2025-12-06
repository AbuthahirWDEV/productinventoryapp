import "./App.css";
import { useState } from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  function handleAddProducts(newProduct) {
    if (isEditMode) {
      setProducts((prev) =>
        prev.map((prod) => (prod.id === newProduct.id ? newProduct : prod))
      );
      setIsEditMode(false);
      setEditProduct(null);
      return;
    }

    setProducts((prev) => [...prev, newProduct]);
  }

  function handleDelete(productId) {
    const afterDelete = products.filter((prod) => prod.id !== productId);
    setProducts(afterDelete);
  }

  function handleEdit(productId) {
    const prod = products.find((item) => item.id === productId);
    setEditProduct(prod);
    setIsEditMode(true);
  }

  return (
    <div className="App">
      <AddProduct
        onAddProduct={handleAddProducts}
        editMode={isEditMode}
        productToEdit={editProduct}
      />
      <ProductList
        products={products}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;

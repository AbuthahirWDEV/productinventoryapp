import "./App.css";
import { useEffect, useState } from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import { type } from "@testing-library/user-event/dist/type";
import FilterBar from "./components/FilterBar";
import SortBar from "./components/SortBar";

function App() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState("");
  const [filtervalue, setFiltervalue] = useState("");
  const category = ["Electronics", "Grocery", "Clothing", "Books", "Other"];
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

  function handleSearch(query) {
    setSearchQuery(query);
  }

  function handleFilterValue(filterValue) {
    setFiltervalue(filterValue);
    console.log(filterValue);
  }
  const filterList = products
    .filter((product) =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      filtervalue === "All"
        ? product
        : product.categorcies.toLowerCase().includes(filtervalue.toLowerCase())
    );

  //  To show different message for Search bar empty
  useEffect(() => {
    if (searchQuery !== "" && filterList.length === 0) {
      setMessage("No product in this name available ....");
    } else {
      setMessage("");
    }
  }, [searchQuery, filterList]);

  return (
    <div className="App">
      <AddProduct
        category={category}
        onAddProduct={handleAddProducts}
        editMode={isEditMode}
        productToEdit={editProduct}
      />
      <FilterBar category={category} onFilter={handleFilterValue} />

      <SearchBar onSearch={handleSearch} />

      <SortBar />

      {message ? (
        message
      ) : (
        <ProductList
          products={filterList}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductManage.css"; // If you want to add custom CSS

const ProductManage = () => {
  // State variables
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState(null);
  const [currentProductId, setCurrentProductId] = useState(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src =
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  // Fetch products from the API
  useEffect(() => {
    axios
      .get("https://dersim-new-blog-backend.onrender.com/api/products") // Corrected the URL format
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Handle product creation or update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("brand", brand);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("slug", slug);
    if (image) {
      formData.append("image", image);
    }

    try {
      if (currentProductId) {
        // Update product
        await axios.put(
          `https://dersim-new-blog-backend.onrender.com/api/products/${currentProductId}`, // Corrected the URL format
          formData
        );
        alert("Product updated successfully");
      } else {
        // Create new product
        await axios.post(
          "https://dersim-new-blog-backend.onrender.com/api/products",
          formData
        ); // Corrected the URL format
        alert("Product created successfully");
      }

      // Clear the form after submission
      resetForm();

      // Reload products after creating/updating
      loadProducts();
    } catch (error) {
      console.error("Error submitting product:", error);
      alert("Error submitting product");
    }
  };

  // Load products after creation or update
  const loadProducts = async () => {
    try {
      const response = await axios.get(
        "https://dersim-new-blog-backend.onrender.com/api/products"
      ); // Corrected the URL format
      setProducts(response.data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  // Handle deleting a product
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://dersim-new-blog-backend.onrender.com/api/products/${id}`
      ); // Corrected the URL format
      alert("Product deleted successfully");
      loadProducts(); // Reload the products after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error deleting product");
    }
  };

  // Handle editing a product
  const handleEdit = (product) => {
    setCurrentProductId(product._id);
    setName(product.name);
    setBrand(product.brand);
    setDescription(product.description);
    setPrice(product.price);
    setSlug(product.slug);
    setImage(null); // Optional, if you want to handle image editing
  };

  // Reset form fields
  const resetForm = () => {
    setName("");
    setBrand("");
    setDescription("");
    setPrice("");
    setSlug("");
    setImage(null);
    setCurrentProductId(null);
  };

  // Handle creating a new product (reset to "Create" mode)
  const handleCreateNewProduct = () => {
    resetForm();
  };

  return (
    <div className="container">
      <h2 className="my-4">
        {currentProductId ? "Update Product" : "Add Product"}
      </h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Brand</label>
          <input
            type="text"
            className="form-control"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Slug</label>
          <input
            type="text"
            className="form-control"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {currentProductId ? "Update" : "Add"} Product
        </button>
        {currentProductId && (
          <button
            type="button"
            className="btn btn-secondary ml-2"
            onClick={handleCreateNewProduct}
          >
            Add New Product
          </button>
        )}
      </form>

      <h3 className="my-4">Product List</h3>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product._id}>
            <div className="card mb-4">
              <img
                src={product.image || "/default-image.jpg"} // Handle default image
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Brand: {product.brand}</p>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManage;

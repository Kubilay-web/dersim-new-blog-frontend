import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../../redux/products/productsApi";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/products/cartSlice";
import "./HomeCommerce.css"; // Import custom CSS for styles

const HomeCommerce = () => {
  const { data, error, isLoading, refetch } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="container py-5">
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center" role="alert">
          An error occurred: {error.message}
        </div>
      ) : (
        <>
          <h2 className="text-center mb-5 font-weight-bold text-dark">
            New Arrivals
          </h2>
          <div className="row g-4">
            {data?.map((product) => (
              <div key={product._id} className="col-sm-6 col-md-4 col-lg-3">
                <div className="card shadow-sm rounded-lg product-card">
                  <img
                    src={product.image}
                    className="card-img-top rounded-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="card-price fw-bold">{product.price} TL</p>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn btn-primary btn-add-to-cart"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeCommerce;

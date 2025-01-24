import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../../redux/products/productsApi";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/products/cartSlice";

const HomeCommerce = () => {
  const { data, error, isLoading, refetch } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

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
          <h2 className="text-center mb-4">New Arrivals</h2>
          <div className="row g-4">
            {data?.map((product) => (
              <div key={product._id} className="col-sm-6 col-md-3 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate">{product.name}</h5>
                    <p className="card-text text-muted">
                      {product.description}
                    </p>
                    <p className="card-text fw-bold">{product.price} TL</p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="btn btn-primary mt-auto"
                    >
                      Add To Cart
                    </button>
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

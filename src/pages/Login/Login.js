import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../css/css-2.css";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";

export default function Login() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill all the fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch(
        "https://dersim-new-blog-backend.onrender.com/api/auth/signin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/shop");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="mt-5 mb-5 bg-white">
      <div className="container d-flex justify-content-center align-items-center flex-column flex-md-row gap-5">
        {/* Left Section - Optional, can be added if needed */}
        <div className="flex-1 d-flex justify-content-center align-items-center">
          {/* Optional content can go here */}
        </div>

        {/* Right Section */}
        <div className="flex-1 d-flex justify-content-center align-items-center flex-column">
          <form
            className="d-flex flex-column gap-3"
            onSubmit={handleSubmit}
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <div>
              <label htmlFor="email" className="form-label">
                Your email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@company.com"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="form-label">
                Your password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="**********"
                onChange={handleChange}
              />
            </div>
            <button
              className="btn btn-primary mt-3"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="ms-2">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="d-flex gap-2 text-sm mt-3">
            <span>Don't have an account?</span>
            <Link to="/sign-up" className="text-primary">
              Sign Up
            </Link>
          </div>

          {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
}

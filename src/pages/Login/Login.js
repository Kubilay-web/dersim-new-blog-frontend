import { useState, useEffect } from "react";
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

  useEffect(() => {
    // Reset error state when the component mounts
    dispatch(signInFailure(null));
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      dispatch(signInFailure("Please fill all the fields"));
      setTimeout(() => {
        dispatch(signInFailure(null)); // Clear error after 3 seconds
      }, 3000);
      return;
    }
    try {
      dispatch(signInStart());
      const res = await fetch(
        "https://dersim-new-blog-backend.vercel.app/api/auth/signin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        setTimeout(() => {
          dispatch(signInFailure(null)); // Clear error after 3 seconds
        }, 3000);
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/shop");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
      setTimeout(() => {
        dispatch(signInFailure(null)); // Clear error after 3 seconds
      }, 3000);
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
              <label
                style={{ color: "#000" }}
                htmlFor="email"
                className="form-label"
              >
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
              <label
                style={{ color: "#000" }}
                htmlFor="password"
                className="form-label"
              >
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
            <span style={{ color: "#000" }}>Don't have an account?</span>
            <Link to="/sign-up" className="text-primary">
              Sign Up
            </Link>
          </div>

          {/* Display error message if it exists and is shown after clicking Sign In */}
          {errorMessage && (
            <div
              style={{
                color: "red",
                marginTop: "10px",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

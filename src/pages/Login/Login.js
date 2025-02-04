import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";

export default function Login() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

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
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/signin`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data) {
        dispatch(signInSuccess(res.data));
        navigate("/shop");
      } else {
        dispatch(signInFailure("Login failed"));
      }
    } catch (error) {
      dispatch(
        signInFailure(error.response?.data?.message || "An error occurred")
      );
    }
  };

  return (
    <div className="mt-5 mb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="btn btn-gradient"
                disabled={loading}
              >
                {loading ? "Loading..." : "Sign In"}
              </button>
            </form>
            <div className="mt-3">
              <span>Don't have an account? </span>
              <Link to="/sign-up" className="text-primary">
                Sign Up
              </Link>
            </div>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

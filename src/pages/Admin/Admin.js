import React, { useState, useEffect } from "react";
import "./Admin.css";
import { Helmet } from "react-helmet";
import Dashboard from "../../components/Dashboard/Dashboard";
import PaymentManage from "../../components/PaymentManage/PaymentManage";
import ProductManage from "../../components/ProductManage/ProductManage";
import Subscription from "../../components/Subscription/Subscription";
import PostManage from "../../components/PostManage/PostManage";
import { useSelector, useDispatch } from "react-redux";
import { signoutSuccess } from "../../redux/user/userSlice";
import { toast } from "react-toastify";
import axios from "axios";
import ContactManage from "../../components/ContactManage/ContactManage";
import ContentManage from "../../components/ContentManage/ContentManage";
import AccordionManage from "../../components/AccordionManage/AccordionManage";
import BlogManage from "../../components/BlogManage/BlogManage";

function Admin() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // Bootstrap CSS'i dinamik olarak yükle
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";
    document.head.appendChild(cssLink);

    // Bootstrap JS'i dinamik olarak yükle
    const jsScript = document.createElement("script");
    jsScript.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
    jsScript.defer = true; // Script'in yüklenmesini bekler
    document.body.appendChild(jsScript);

    // Temizleme işlemi
    return () => {
      document.head.removeChild(cssLink);
      document.body.removeChild(jsScript);
    };
  }, []);

  const [currentPage, setCurrentPage] = useState("dashboard");
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle("navbar-nav bg-gradient-dark sidebar sidebar-dark accordion");
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSignout = async () => {
    try {
      const response = await axios.post(
        `https://dersim-new-blog-backend.vercel.app/api/user/signout`,
        {},
        { withCredentials: true }
      );

      // Başarılı çıkış
      if (response.status === 200) {
        dispatch(signoutSuccess());
        toast.warning("Logged out", { position: "bottom-left" });
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      // Hata durumunda
      console.error(error.message);
    }
  };

  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="css/sb-admin-2.min.css" />
        <link
          href="vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      </Helmet>

      <div id="wrapper">
        {/* Sidebar */}
        <ul className={style} id="accordionSidebar">
          {/* Sidebar Brand */}
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange("dashboard");
            }}
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">
              SB Admin <sup>2</sup>
            </div>
          </a>

          {/* Divider */}
          <hr className="sidebar-divider my-0" />

          {/* Nav Item - Dashboard */}
          <li className="nav-item active">
            <a
              className="nav-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange("dashboard");
              }}
            >
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>AnaSayfa</span>
            </a>
          </li>

          {/* Divider */}
          <hr className="sidebar-divider" />

          {/* Nav Item - Blog Management */}
          {/* <li className="nav-item active">
            <a
              className="nav-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange("blog-manage");
              }}
            >
              <i className="fas fa-fw fa-blog"></i>
              <span>Blogs</span>
            </a>
          </li> */}

          {/* Nav Item - Post Management */}
          <li className="nav-item active">
            <a
              className="nav-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange("post-manage");
              }}
            >
              <i className="fas fa-fw fa-pencil-alt"></i> {/* Post icon */}
              <span>Posts</span>
            </a>
          </li>

          {/* Nav Item - Payment Management */}
          <li className="nav-item active">
            <a
              className="nav-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange("payment-manage");
              }}
            >
              <i className="fas fa-fw fa-credit-card"></i>
              <span>Payments</span>
            </a>
          </li>

          {/* Nav Item - Product Management */}
          <li className="nav-item active">
            <a
              className="nav-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange("product-manage");
              }}
            >
              <i className="fas fa-fw fa-box"></i> {/* Product icon */}
              <span>Products</span>
            </a>
          </li>

          {/* Nav Item - Subscription */}
          <li className="nav-item active">
            <a
              className="nav-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange("subscription");
              }}
            >
              <i className="fas fa-fw fa-clipboard-list"></i>{" "}
              {/* Subscription icon */}
              <span>Subscription</span>
            </a>
          </li>

          <li className="nav-item active">
            <a
              className="nav-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange("blog");
              }}
            >
              <i className="fas fa-fw fa-clipboard-list"></i>{" "}
              {/* Subscription icon */}
              <span>BlogManage</span>
            </a>
          </li>

          <li className="nav-item active">
            <a
              className="nav-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange("contact");
              }}
            >
              <i className="fas fa-fw fa-clipboard-list"></i>{" "}
              {/* Subscription icon */}
              <span>Contact</span>
            </a>
          </li>

          <li className="nav-item active">
            <a
              className="nav-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange("content");
              }}
            >
              <i className="fas fa-fw fa-clipboard-list"></i>{" "}
              {/* Subscription icon */}
              <span>Contents</span>
            </a>
          </li>

          <li className="nav-item active">
            <a
              className="nav-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange("accordion");
              }}
            >
              <i className="fas fa-fw fa-clipboard-list"></i>{" "}
              {/* Subscription icon */}
              <span>Accordion</span>
            </a>
          </li>
        </ul>

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
                onClick={changeStyle}
              >
                <i className="fa fa-bars"></i>
              </button>
              {/* Topbar Search */}
              <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>

              <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block"></div>

                {/* User Dropdown */}
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      {currentUser.username}
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src={currentUser.profilePicture}
                      alt="User Profile"
                    />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a className="dropdown-item" href="/profile">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                    </a>

                    <div className="dropdown-divider"></div>

                    <div onClick={handleSignout}>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>

            {/* Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">
                  {currentPage === "dashboard"
                    ? "Dashboard"
                    : currentPage === "payment-manage"
                    ? "Payment Management"
                    : currentPage === "product-manage"
                    ? "Product Management"
                    : currentPage === "subscription"
                    ? "Subscription Management"
                    : currentPage === "post-manage"
                    ? "Post Management"
                    : currentPage === "contact"
                    ? "Contacts"
                    : currentPage === "content"
                    ? "Contents"
                    : currentPage === "accordion"
                    ? "Accordion"
                    : currentPage === "blog"
                    ? "BlogManage"
                    : ""}
                </h1>
              </div>
              {currentPage === "dashboard" ? (
                <Dashboard />
              ) : currentPage === "payment-manage" ? (
                <PaymentManage />
              ) : currentPage === "product-manage" ? (
                <ProductManage />
              ) : currentPage === "subscription" ? (
                <Subscription />
              ) : currentPage === "post-manage" ? (
                <PostManage />
              ) : currentPage === "contact" ? (
                <ContactManage />
              ) : currentPage === "content" ? (
                <ContentManage />
              ) : currentPage === "accordion" ? (
                <AccordionManage />
              ) : currentPage === "blog" ? (
                <BlogManage />
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
}

export default Admin;

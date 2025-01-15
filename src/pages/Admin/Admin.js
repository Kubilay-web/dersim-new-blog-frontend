import React, { useState } from "react";
import "./Admin.css";
import { Helmet } from "react-helmet";
import BlogManage from "../../components/BlogManage/BlogManage";
import Dashboard from "../../components/Dashboard/Dashboard";

function Admin() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  // Sidebar stilini değiştiren fonksiyon
  const changeStyle = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle("navbar-nav bg-gradient-dark sidebar sidebar-dark accordion");
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  // Sayfa değiştirme fonksiyonu
  const handlePageChange = (page) => {
    setCurrentPage(page);
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
              e.preventDefault(); // Sayfa yenilemesini engeller
              handlePageChange("dashboard"); // Dashboard sayfasına geç
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
                e.preventDefault(); // Sayfa yenilemesini engeller
                handlePageChange("dashboard"); // Dashboard sayfasına geç
              }}
            >
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>

          {/* Divider */}
          <hr className="sidebar-divider" />

          {/* Nav Item - Blog Management */}
          <li className="nav-item active">
            <a
              className="nav-link"
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Sayfa yenilemesini engeller
                handlePageChange("blog-manage"); // Blog yönetimi sayfasına geç
              }}
            >
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Blogs</span>
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
                      Douglas McGee
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="img/undraw_profile.svg"
                      alt="User Profile"
                    />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      Activity Log
                    </a>
                    <div className="dropdown-divider"></div>
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
                </li>
              </ul>
            </nav>

            {/* Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">
                  {currentPage === "dashboard" ? "Dashboard" : "Blog Yönetimi"}
                </h1>
              </div>

              {/* Sayfa İçeriği */}
              {currentPage === "dashboard" ? <Dashboard /> : <BlogManage />}
            </div>
          </div>

          {/* Footer */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2021</span>
              </div>
            </div>
          </footer>
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

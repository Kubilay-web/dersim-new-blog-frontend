import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogManage = () => {
  const URL = process.env.REACT_APP_BACKEND_URL;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editBlogId, setEditBlogId] = useState(null);

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

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Blogları listele
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${URL}/api/blogs`);
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs", error);
    }
  };

  // Blog oluştur veya güncelle
  const handleCreateOrUpdateBlog = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    if (image) {
      formData.append("image", image);
    }

    try {
      if (editMode) {
        // Blog güncelle
        await axios.put(`${URL}/api/blogs/${editBlogId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setEditMode(false);
        setEditBlogId(null);
      } else {
        // Blog oluştur
        await axios.post(`${URL}/api/blogs`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      fetchBlogs();
      resetForm();
    } catch (error) {
      console.error(
        editMode ? "Error updating blog" : "Error creating blog",
        error
      );
    }
  };

  // Blogu sil
  const handleDeleteBlog = async (id) => {
    const confirmDelete = window.confirm(
      "Bu blogu silmek istediğinizden emin misiniz?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${URL}/api/blogs/${id}`);
      fetchBlogs(); // Blogları yeniden yükle
    } catch (error) {
      console.error("Error deleting blog", error);
    }
  };

  // Blogu düzenleme moduna al
  const handleEditBlog = (blog) => {
    setTitle(blog.title);
    setContent(blog.content);
    setCategory(blog.category);
    setImage(null); // Görseli yeniden seçmek gerekebilir
    setEditBlogId(blog._id);
    setEditMode(true);
  };

  // Formu sıfırla
  const resetForm = () => {
    setTitle("");
    setContent("");
    setCategory("");
    setImage(null);
  };

  // Formu sıfırlayıp düzenleme moduna geç
  const handleCreateNewBlog = () => {
    resetForm();
    setEditMode(false); // Reset to create mode
    setEditBlogId(null);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={handleCreateOrUpdateBlog} className="mb-5">
            <div className="form-group">
              <label htmlFor="title" className="font-weight-bold">
                Başlık:
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Blog başlığını girin..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="content" className="font-weight-bold">
                İçerik:
              </label>
              <textarea
                id="content"
                className="form-control"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Blog içeriğini girin..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category" className="font-weight-bold">
                Kategori:
              </label>
              <input
                type="text"
                id="category"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Kategori girin..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="image" className="font-weight-bold">
                Resim:
              </label>
              <input
                type="file"
                id="image"
                className="form-control-file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              {editMode ? "Blog Güncelle" : "Blog Oluştur"}
            </button>
            {editMode && (
              <button
                type="button"
                className="btn btn-secondary btn-block mt-2"
                onClick={handleCreateNewBlog}
              >
                Yeni Blog Oluştur
              </button>
            )}
          </form>

          <h3 className="text-center">Mevcut Bloglar</h3>
          <div className="list-group">
            {blogs.map((blog) => (
              <div key={blog._id} className="list-group-item mb-3">
                <h4>{blog.title}</h4>
                <p>{blog.content}</p>
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="img-fluid rounded mb-3"
                  />
                )}
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleEditBlog(blog)}
                  >
                    Düzenle
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteBlog(blog._id)}
                  >
                    Sil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogManage;

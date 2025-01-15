import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogManage = () => {
  const URL = process.env.REACT_APP_BACKEND_URL;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [blogs, setBlogs] = useState([]);

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

  // Blog oluştur
  const handleCreateBlog = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.post(`${URL}/api/blogs`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchBlogs(); // Blogları yeniden yükle
      setTitle("");
      setContent("");
      setCategory("");
      setImage(null); // Formu sıfırla
    } catch (error) {
      console.error("Error creating blog", error);
    }
  };

  return (
    <div className="blog-manage">
      <form onSubmit={handleCreateBlog} className="blog-form">
        <div className="form-group">
          <label htmlFor="title">Başlık:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog başlığını girin..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">İçerik:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Blog içeriğini girin..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Kategori:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Kategori girin..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Resim:</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button type="submit" className="submit-btn">
          Blog Oluştur
        </button>
      </form>

      <h2>Mevcut Bloglar</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-item">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            {blog.image && (
              <img src={blog.image} alt={blog.title} className="blog-image" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogManage;

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
    // Bootstrap CSS dosyasını dahil et
    const bootstrapCss = document.createElement("link");
    bootstrapCss.href =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
    bootstrapCss.rel = "stylesheet";
    bootstrapCss.integrity =
      "sha384-pzjw8f+ua7Kw1TIq0ffW4dt8yW7Y7B9S3xa9IT6x67vsE9S4Z0eGaxQtzcf1W1jI";
    bootstrapCss.crossOrigin = "anonymous";
    document.head.appendChild(bootstrapCss);

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
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center mb-4">Blog Yönetimi</h2>

          <form onSubmit={handleCreateBlog} className="mb-5">
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
              Blog Oluştur
            </button>
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
                    className="img-fluid rounded"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogManage;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactQuill from "react-quill-new"; // Zengin metin düzenleyici
import "react-quill-new/dist/quill.snow.css"; // Quill stilini dahil et

const ContentManage = () => {
  const [contents, setContents] = useState([]);
  const [newContent, setNewContent] = useState({ title: "", body: "" });
  const [editContent, setEditContent] = useState(null);
  const [loading, setLoading] = useState(true); // Yazılar yükleniyor durumu
  const [error, setError] = useState(""); // Hata mesajları

  const quillRef = useRef(null); // ReactQuill için ref

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src =
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
    script.integrity =
      "sha384-pzjw8f+ua7Kw1TIq0p6n6YDpU7tQAxpfe4EdT9B5o8TJOz1IpD7mf6p7r5pXj/Ud";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await axios.get(
          "https://dersim-new-blog-backend.vercel.app/api/contents"
        );
        setContents(response.data);
      } catch (err) {
        setError("Yazılar alınırken hata oluştu");
      } finally {
        setLoading(false);
      }
    };
    fetchContents();
  }, []);

  const handleCreateContent = async () => {
    if (!newContent.title || !newContent.body) {
      setError("Başlık ve içerik boş olamaz.");
      return;
    }

    try {
      const response = await axios.post(
        "https://dersim-new-blog-backend.vercel.app/api/contents",
        {
          title: newContent.title,
          body: newContent.body, // Quill içeriği olduğu gibi gönderiyoruz
        }
      );
      setContents([...contents, response.data]);
      setNewContent({ title: "", body: "" });
      setError("");
    } catch (err) {
      setError("Yazı eklerken hata oluştu");
    }
  };

  const handleEditContent = async (id) => {
    try {
      const response = await axios.get(
        `https://dersim-new-blog-backend.vercel.app/api/contents/${id}`
      );
      setEditContent(response.data);
    } catch (err) {
      setError("Yazı düzenlenirken hata oluştu");
    }
  };

  const handleUpdateContent = async () => {
    if (!editContent.title || !editContent.body) {
      setError("Başlık ve içerik boş olamaz.");
      return;
    }

    try {
      const response = await axios.put(
        `https://dersim-new-blog-backend.vercel.app/api/contents/${editContent._id}`,
        {
          title: editContent.title,
          body: editContent.body, // Quill içeriği olduğu gibi gönderiyoruz
        }
      );
      setContents(
        contents.map((content) =>
          content._id === editContent._id ? response.data : content
        )
      );
      setEditContent(null);
      setError("");
    } catch (err) {
      setError("Yazı güncellenirken hata oluştu");
    }
  };

  const handleDeleteContent = async (id) => {
    if (window.confirm("Bu yazıyı silmek istediğinizden emin misiniz?")) {
      try {
        await axios.delete(
          `https://dersim-new-blog-backend.vercel.app/api/contents/${id}`
        );
        setContents(contents.filter((content) => content._id !== id));
        setError("");
      } catch (err) {
        setError("Yazı silinirken hata oluştu");
      }
    }
  };

  if (loading) {
    return <div className="text-center">Yazılar yükleniyor...</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Yazı Yönetimi</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="card mb-4">
        <div className="card-header">
          <h3>Yeni Yazı Ekle</h3>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Başlık"
              value={newContent.title}
              onChange={(e) =>
                setNewContent({ ...newContent, title: e.target.value })
              }
            />
          </div>
          <ReactQuill
            ref={quillRef} // ReactQuill için ref ekledik
            value={newContent.body}
            onChange={(value) => setNewContent({ ...newContent, body: value })}
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ align: [] }],
                ["bold", "italic", "underline", "strike"],
                ["blockquote", "code-block"],
                ["link", "image"], // resim ekleme
                [{ color: [] }, { background: [] }],
                ["clean"],
                [{ "line-height": ["1", "1.5", "2", "2.5"] }], // satır aralığı
                [{ size: ["small", "normal", "large", "huge"] }], // yazı boyutu
                ["image"], // resim boyutları
                ["align"], // hizalama
              ],
            }}
          />
          <button
            className="btn btn-primary mt-3"
            onClick={handleCreateContent}
          >
            Yazı Ekle
          </button>
        </div>
      </div>

      {editContent && (
        <div className="card mb-4">
          <div className="card-header">
            <h3>Yazıyı Düzenle</h3>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={editContent.title}
                onChange={(e) =>
                  setEditContent({ ...editContent, title: e.target.value })
                }
              />
            </div>
            <ReactQuill
              ref={quillRef}
              value={editContent.body}
              onChange={(value) =>
                setEditContent({ ...editContent, body: value })
              }
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{ align: [] }],
                  ["bold", "italic", "underline", "strike"],
                  ["blockquote", "code-block"],
                  ["link", "image"],
                  [{ color: [] }, { background: [] }],
                  ["clean"],
                  [{ "line-height": ["1", "1.5", "2", "2.5"] }],
                  [{ size: ["small", "normal", "large", "huge"] }],
                  ["image"],
                  ["align"],
                ],
              }}
            />
            <button
              className="btn btn-success mt-3"
              onClick={handleUpdateContent}
            >
              Yazıyı Güncelle
            </button>
          </div>
        </div>
      )}

      <h3 className="text-center mb-3">Yazılar</h3>
      {contents.length === 0 ? (
        <p className="text-center">Henüz yazı yok.</p>
      ) : (
        <ul className="list-group">
          {contents.map((content) => (
            <li className="list-group-item" key={content._id}>
              <h5>{content.title}</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: content.body,
                }}
              />
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEditContent(content._id)}
                >
                  Düzenle
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteContent(content._id)}
                >
                  Sil
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContentManage;

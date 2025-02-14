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
    // Yazıları getirme
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

  // Yeni yazı oluşturma
  const handleCreateContent = async () => {
    if (!newContent.title || !newContent.body) {
      setError("Başlık ve içerik boş olamaz.");
      return;
    }

    try {
      // Sadece metin (HTML etiketleri olmadan) alıyoruz
      const response = await axios.post(
        "https://dersim-new-blog-backend.vercel.app/api/contents",
        {
          title: newContent.title,
          body: newContent.body.replace(/<[^>]+>/g, ""), // HTML etiketlerini temizliyoruz
        }
      );
      setContents([...contents, response.data]);
      setNewContent({ title: "", body: "" });
      setError("");
    } catch (err) {
      setError("Yazı eklerken hata oluştu");
    }
  };

  // Yazı düzenleme
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

  // Yazıyı güncelleme
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
          body: editContent.body.replace(/<[^>]+>/g, ""), // HTML etiketlerini temizliyoruz
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

  // Yazıyı silme
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
    return <div>Yazılar yükleniyor...</div>;
  }

  return (
    <div>
      <h2>Yazı Yönetimi</h2>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <h3>Yeni Yazı Ekle</h3>
      <input
        type="text"
        placeholder="Başlık"
        value={newContent.title}
        onChange={(e) =>
          setNewContent({ ...newContent, title: e.target.value })
        }
      />
      <ReactQuill
        ref={quillRef} // ReactQuill için ref ekledik
        value={newContent.body}
        onChange={(value) => setNewContent({ ...newContent, body: value })}
      />
      <button onClick={handleCreateContent}>Yazı Ekle</button>

      {editContent && (
        <div>
          <h3>Yazıyı Düzenle</h3>
          <input
            type="text"
            value={editContent.title}
            onChange={(e) =>
              setEditContent({ ...editContent, title: e.target.value })
            }
          />
          <ReactQuill
            ref={quillRef} // ReactQuill için ref ekledik
            value={editContent.body}
            onChange={(value) =>
              setEditContent({ ...editContent, body: value })
            }
          />
          <button onClick={handleUpdateContent}>Yazıyı Güncelle</button>
        </div>
      )}

      <h3>Yazılar</h3>
      {contents.length === 0 ? (
        <p>Henüz yazı yok.</p>
      ) : (
        <ul>
          {contents.map((content) => (
            <li key={content._id}>
              <h4>{content.title}</h4>
              <p>{content.body}</p>
              <button onClick={() => handleEditContent(content._id)}>
                Düzenle
              </button>
              <button onClick={() => handleDeleteContent(content._id)}>
                Sil
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContentManage;

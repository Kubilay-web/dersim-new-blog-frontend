import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Modal,
  Table,
  Spinner,
  Pagination,
} from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify"; // Notification gösterimi için
import ReactPaginate from "react-paginate"; // react-paginate import edilmiştir
import "./PostManage.css";

const PostManage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [postDetails, setPostDetails] = useState({
    title: "",
    content: "",
    category: "",
    image: null,
    event: "",
    date: "",
    price: "",
    slug: "",
    color: "#ffffff", // Varsayılan renk
    language: "turkish", // Varsayılan dil
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Arama sorgusu
  const [currentPage, setCurrentPage] = useState(0); // Sayfa numarası
  const [postsPerPage] = useState(5); // Sayfa başına post sayısı
  const [languageFilter, setLanguageFilter] = useState("all"); // Dil filtresi

  // API'ye postları almak için istek gönder
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://dersim-new-blog-backend.vercel.app/api/post/getposts"
      ); // Backend URL
      setPosts(response.data.posts);
    } catch (error) {
      toast.error("Postlar alınırken bir hata oluştu!");
    } finally {
      setLoading(false);
    }
  };

  // Yeni post eklemek için API'yi çağır
  const handleCreatePost = async () => {
    const formData = new FormData();
    formData.append("title", postDetails.title);
    formData.append("content", postDetails.content);
    formData.append("category", postDetails.category);
    formData.append("event", postDetails.event);
    formData.append("date", postDetails.date);
    formData.append("price", postDetails.price);
    formData.append("slug", postDetails.slug);
    formData.append("color", postDetails.color); // Renk bilgisi eklendi
    formData.append("language", postDetails.language); // Dil bilgisi eklendi

    if (postDetails.image) {
      formData.append("image", postDetails.image); // Resim ekleme
    }

    try {
      const response = await axios.post(
        "https://dersim-new-blog-backend.vercel.app/api/post/create",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setPosts([...posts, response.data]);
      toast.success("Yeni yazı başarıyla eklendi!");
      setShowModal(false);
    } catch (error) {
      toast.error("Yazı eklenirken bir hata oluştu!");
    }
  };

  // Postu güncelle
  const handleUpdatePost = async () => {
    const formData = new FormData();
    formData.append("title", postDetails.title);
    formData.append("content", postDetails.content);
    formData.append("category", postDetails.category);
    formData.append("event", postDetails.event);
    formData.append("date", postDetails.date);
    formData.append("price", postDetails.price);
    formData.append("slug", postDetails.slug);
    formData.append("color", postDetails.color); // Yeni renk bilgisi eklendi
    formData.append("language", postDetails.language); // Dil bilgisi eklendi

    if (postDetails.image) {
      formData.append("image", postDetails.image); // Yeni resim ekleme
    }

    try {
      const response = await axios.put(
        `https://dersim-new-blog-backend.vercel.app/api/post/updatepost/${postDetails._id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setPosts(
        posts.map((post) =>
          post._id === response.data._id ? response.data : post
        )
      );
      toast.success("Yazı başarıyla güncellendi!");
      setShowModal(false);
    } catch (error) {
      toast.error("Yazı güncellenirken bir hata oluştu!");
    }
  };

  // Postu sil
  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(
        `https://dersim-new-blog-backend.vercel.app/api/post/deletepost/${postId}`
      ); // Backend URL
      setPosts(posts.filter((post) => post._id !== postId));
      toast.success("Yazı başarıyla silindi!");
    } catch (error) {
      toast.error("Yazı silinirken bir hata oluştu!");
    }
  };

  // Modalı aç ve düzenleme moduna geç
  const handleShowModal = (post = null) => {
    if (post) {
      setPostDetails(post);
      setImagePreview(post.image || null); // Var olan görseli önizlemede göster
      setIsEditMode(true);
    } else {
      setPostDetails({
        title: "",
        content: "",
        category: "",
        image: null,
        event: "",
        date: "",
        price: "",
        slug: "",
        color: "#ffffff", // Yeni post için varsayılan renk
        language: "turkish", // Varsayılan dil
      });
      setImagePreview(null);
      setIsEditMode(false);
    }
    setShowModal(true);
  };

  // Sayfa yüklendiğinde postları çek
  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostDetails({ ...postDetails, image: file });
      setImagePreview(URL.createObjectURL(file)); // Preview the selected image
    }
  };

  // Arama filtreleme fonksiyonu
  const filterPosts = () => {
    let filtered = posts.filter(
      (post) =>
        (post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.content.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (languageFilter === "all" || post.language === languageFilter)
    );
    return filtered;
  };

  // Pagination hesaplamaları
  const filteredPosts = filterPosts();
  const offset = currentPage * postsPerPage;
  const currentPosts = filteredPosts.slice(offset, offset + postsPerPage);

  // Sayfa değiştirme fonksiyonu
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Yazı Yönetimi</h2>

      {/* Arama Barı */}
      <Form.Control
        type="text"
        placeholder="Kategori veya içerik arayın..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4"
      />

      {/* Dil Filtreleme */}
      <Form.Group controlId="languageFilter" className="mb-4">
        <Form.Label>Dil Seçin</Form.Label>
        <Form.Control
          as="select"
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}
        >
          <option value="all">Tüm Diller</option>
          <option value="turkish">Türkçe</option>
          <option value="english">İngilizce</option>
          <option value="german">Almanca</option>
          <option value="kurdish">Kürtçe</option>
          <option value="zazaki">Zazaca</option>
        </Form.Control>
      </Form.Group>

      {/* Post Listesi */}
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Başlık</th>
              <th>İçerik</th>
              <th>Kategori</th>
              <th>Dil</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post) => (
              <tr key={post._id}>
                <td>{post.title}</td>
                <td>{post.content.slice(0, 50)}...</td>
                <td>{post.category}</td>
                <td>{post.language}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => handleShowModal(post)}
                  >
                    Düzenle
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => handleDeletePost(post._id)}
                  >
                    Sil
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Sayfalama */}
      <ReactPaginate
        pageCount={Math.ceil(filteredPosts.length / postsPerPage)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
      />

      {/* Post Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEditMode ? "Yazıyı Düzenle" : "Yeni Yazı Ekle"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Başlık</Form.Label>
              <Form.Control
                type="text"
                value={postDetails.title}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>İçerik</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={postDetails.content}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, content: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Kategori</Form.Label>
              <Form.Control
                type="text"
                value={postDetails.category}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, category: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Etkinlik</Form.Label>
              <Form.Control
                type="text"
                value={postDetails.event}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, event: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tarih</Form.Label>
              <Form.Control
                type="date"
                value={postDetails.date}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, date: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fiyat</Form.Label>
              <Form.Control
                type="number"
                value={postDetails.price}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, price: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Slug</Form.Label>
              <Form.Control
                type="text"
                value={postDetails.slug}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, slug: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Renk</Form.Label>
              <Form.Control
                type="color"
                value={postDetails.color}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, color: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Dil</Form.Label>
              <Form.Control
                as="select"
                value={postDetails.language}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, language: e.target.value })
                }
              >
                <option value="turkish">Türkçe</option>
                <option value="english">İngilizce</option>
                <option value="german">Almanca</option>
                <option value="kurdish">Kürtçe</option>
                <option value="zazaki">Zazaca</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Görsel</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="img-fluid mt-3"
                  style={{ maxHeight: "200px" }}
                />
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Kapat
          </Button>
          <Button
            variant="primary"
            onClick={isEditMode ? handleUpdatePost : handleCreatePost}
          >
            {isEditMode ? "Güncelle" : "Ekle"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostManage;

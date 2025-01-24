import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table, Spinner } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify"; // Notification gösterimi için

const PostManage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [postDetails, setPostDetails] = useState({
    title: "",
    content: "",
    category: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

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
      setPostDetails({ title: "", content: "", category: "", image: null });
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

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Yazı Yönetimi</h2>

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
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td>{post.title}</td>
                <td>{post.content.slice(0, 50)}...</td>
                <td>{post.category}</td>
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

      {/* Yeni Post Modalı */}
      <Button variant="primary" onClick={() => handleShowModal()}>
        Yeni Yazı Ekle
      </Button>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEditMode ? "Yazıyı Düzenle" : "Yeni Yazı Ekle"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Başlık</Form.Label>
              <Form.Control
                type="text"
                placeholder="Yazı başlığını girin"
                value={postDetails.title}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, title: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>İçerik</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Yazı içeriğini girin"
                value={postDetails.content}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, content: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="category">
              <Form.Label>Kategori</Form.Label>
              <Form.Control
                type="text"
                placeholder="Kategori girin"
                value={postDetails.category}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, category: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Görsel</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} />
              {imagePreview && (
                <div className="mt-3">
                  <img
                    src={imagePreview}
                    alt="Görsel Önizleme"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
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

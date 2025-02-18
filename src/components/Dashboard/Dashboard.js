// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Spinner,
//   Alert,
//   Form,
//   Button,
//   Container,
//   Row,
//   Col,
//   Card,
//   Modal,
// } from "react-bootstrap";

// const Dashboard = () => {
//   const [homepageData, setHomepageData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedTitle, setSelectedTitle] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [editingPost, setEditingPost] = useState(null); // Düzenlenen post bilgisi

//   // Yeni post veya düzenlenen post için form verileri
//   const [postFormData, setPostFormData] = useState({
//     title: "",
//     content: "",
//     category: "",
//     image: "",
//     blogContent: "",
//   });

//   // Kategorilere göre postları çekme
//   const fetchPosts = async (category) => {
//     try {
//       setLoading(true);
//       const res = await axios.get(
//         `http://localhost:5000/api/post/getposts/category?category=${category}`
//       );
//       setPosts(res.data.posts);
//       setLoading(false);
//     } catch (error) {
//       console.error(`Kategori için postlar alınamadı: ${category}`, error);
//       setError("Postlar alınırken bir hata oluştu.");
//       setLoading(false);
//     }
//   };

//   // Ana sayfa verilerini çekme
//   useEffect(() => {
//     const fetchHomepageData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/home/homepage"
//         );
//         setHomepageData(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Ana sayfa verileri alınırken bir hata oluştu.");
//         setLoading(false);
//       }
//     };
//     fetchHomepageData();
//   }, []);

//   // Başlık seçildiğinde ilgili postları getir
//   const handleTitleSelect = (title) => {
//     setSelectedTitle(title);
//     fetchPosts(title);
//   };

//   // Post düzenleme modalını aç
//   const handleEditPost = (post) => {
//     setEditingPost(post);
//     setPostFormData({ ...post });
//     setShowModal(true);
//   };

//   // Yeni post oluşturma modalını aç
//   const handleNewPost = () => {
//     setEditingPost(null);
//     setPostFormData({
//       title: "",
//       content: "",
//       category: selectedTitle || "",
//       image: "",
//       blogContent: "",
//     });
//     setShowModal(true);
//   };

//   // Post form verilerini güncelle
//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setPostFormData({ ...postFormData, [name]: value });
//   };

//   // Post kaydetme veya güncelleme işlemi
//   const handleSavePost = async () => {
//     try {
//       if (editingPost) {
//         // Post güncelleme
//         await axios.put(
//           `http://localhost:5000/api/post/updatepost/${editingPost._id}`,
//           postFormData
//         );
//         alert("Post başarıyla güncellendi!");
//       } else {
//         // Yeni post oluşturma
//         await axios.post(
//           "http://localhost:5000/api/post/create",
//           postFormData
//         );
//         alert("Post başarıyla oluşturuldu!");
//       }
//       setShowModal(false);
//       fetchPosts(selectedTitle);
//     } catch (error) {
//       console.error("Post kaydedilirken bir hata oluştu:", error);
//       setError("Post kaydedilirken bir hata oluştu.");
//     }
//   };

//   // Post silme işlemi
//   const handleDeletePost = async (postId) => {
//     if (window.confirm("Bu postu silmek istediğinizden emin misiniz?")) {
//       try {
//         await axios.delete(
//           `http://localhost:5000/api/post/deletepost/${postId}`
//         );
//         alert("Post başarıyla silindi!");
//         fetchPosts(selectedTitle);
//       } catch (error) {
//         console.error("Post silinirken bir hata oluştu:", error);
//         setError("Post silinirken bir hata oluştu.");
//       }
//     }
//   };

//   // Yükleme durumu
//   if (loading) {
//     return (
//       <div className="d-flex justify-content-center">
//         <Spinner animation="border" variant="primary" />
//       </div>
//     );
//   }

//   // Hata durumu
//   if (error) {
//     return <Alert variant="danger">{error}</Alert>;
//   }

//   return (
//     <Container className="mt-5">
//       {/* Başlıklar ve Postlar */}
//       <Row className="mb-4">
//         <Col md={6}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Başlıklar</Card.Title>
//               <ul className="list-group">
//                 {homepageData &&
//                   [
//                     homepageData.title1,
//                     homepageData.title2,
//                     homepageData.title3,
//                     homepageData.title4,
//                     homepageData.title5,
//                     homepageData.title6,
//                   ].map((title, index) => (
//                     <li
//                       key={index}
//                       className="list-group-item"
//                       onClick={() => handleTitleSelect(title)}
//                     >
//                       {title}
//                     </li>
//                   ))}
//               </ul>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Postlar: {selectedTitle}</Card.Title>
//               <Button
//                 variant="success"
//                 className="mb-3"
//                 onClick={handleNewPost}
//               >
//                 Yeni Post Oluştur
//               </Button>
//               {posts.length > 0 ? (
//                 <ul className="list-group">
//                   {posts.map((post) => (
//                     <li key={post._id} className="list-group-item">
//                       <h5>{post.title}</h5>
//                       <p>{post.content}</p>
//                       <div className="d-flex justify-content-between">
//                         <Button
//                           variant="primary"
//                           onClick={() => handleEditPost(post)}
//                         >
//                           Düzenle
//                         </Button>
//                         <Button
//                           variant="danger"
//                           onClick={() => handleDeletePost(post._id)}
//                         >
//                           Sil
//                         </Button>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>Bu kategori için post bulunmamaktadır.</p>
//               )}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Post Düzenleme/Oluşturma Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {editingPost ? "Post Düzenle" : "Yeni Post Oluştur"}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formTitle">
//               <Form.Label>Başlık</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="title"
//                 value={postFormData.title}
//                 onChange={handleFormChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formContent">
//               <Form.Label>İçerik</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 name="content"
//                 value={postFormData.content}
//                 onChange={handleFormChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCategory">
//               <Form.Label>Kategori</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="category"
//                 value={postFormData.category}
//                 onChange={handleFormChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formImage">
//               <Form.Label>Görsel URL</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="image"
//                 value={postFormData.image}
//                 onChange={handleFormChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formBlogContent">
//               <Form.Label>Blog İçeriği</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={5}
//                 name="blogContent"
//                 value={postFormData.blogContent}
//                 onChange={handleFormChange}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Kapat
//           </Button>
//           <Button variant="primary" onClick={handleSavePost}>
//             Kaydet
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default Dashboard;

import React from "react";

const Dashboard = () => {
  return <div>Dashboard</div>;
};

export default Dashboard;

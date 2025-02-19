// import React, { useState, useEffect } from "react";

// function AccordionManage() {
//   const [accordionData, setAccordionData] = useState([]); // Başlangıçta boş dizi
//   const [categoryId, setCategoryId] = useState(""); // kategoriId için filtreleme
//   const [formData, setFormData] = useState({ key: "", title: "", content: "" });
//   const [editingAccordion, setEditingAccordion] = useState(null); // Düzenlemeye başlanan accordion

//   // categoryId'ye göre accordion verilerini çekme
//   useEffect(() => {
//     if (categoryId) {
//       const fetchAccordionData = async () => {
//         const response = await fetch(
//           `https://dersim-new-blog-backend.vercel.app/api/accordion/accordion-category/${categoryId}`
//         );
//         const data = await response.json();

//         // Gelen verinin bir dizi olduğunu kontrol et
//         if (Array.isArray(data)) {
//           setAccordionData(data);
//         } else {
//           setAccordionData([]); // Eğer dizi değilse boş bir dizi ata
//           console.error("Accordion verisi geçerli bir dizi değil:", data);
//         }
//       };

//       fetchAccordionData();
//     }
//   }, [categoryId]);

//   // Kategori değişikliğini işleme
//   const handleCategoryChange = (e) => {
//     setCategoryId(e.target.value);
//   };

//   // Form verilerini işleme
//   const handleFormChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Yeni accordion oluşturma işlemi
//   const handleCreateSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch(
//       `https://dersim-new-blog-backend.vercel.app/api/accordion/accordion-category/${categoryId}/create`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       }
//     );

//     if (response.ok) {
//       alert("Accordion başarıyla oluşturuldu!");
//       setFormData({ key: "", title: "", content: "" });
//       const updatedData = await response.json();
//       setAccordionData(updatedData); // Yeni verileri almak için
//     } else {
//       alert("Accordion oluşturulurken bir hata oluştu.");
//     }
//   };

//   // Accordion güncelleme işlemi
//   const handleUpdateSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch(
//       `https://dersim-new-blog-backend.vercel.app/api/accordion/accordion/${editingAccordion._id}`,
//       {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       }
//     );

//     if (response.ok) {
//       alert("Accordion başarıyla güncellendi!");
//       setFormData({ key: "", title: "", content: "" });
//       setEditingAccordion(null); // Düzenleme modunu kapat
//       const updatedData = await response.json();
//       setAccordionData(updatedData); // Güncellenmiş verileri almak için
//     } else {
//       alert("Accordion güncellenirken bir hata oluştu.");
//     }
//   };

//   // Accordion düzenleme işlemi
//   const handleEditClick = (accordion) => {
//     setEditingAccordion(accordion); // Düzenlemek için ilgili accordion'ı seç
//     setFormData({
//       key: accordion.key,
//       title: accordion.title,
//       content: accordion.content,
//     }); // Formu bu verilerle doldur
//   };

//   return (
//     <div>
//       <h1>Admin Panel</h1>

//       {/* Kategori Seçici */}
//       <select onChange={handleCategoryChange} value={categoryId}>
//         <option value="">Bir Kategori Seçin</option>
//         <option value="Ticket information">Ticket information</option>
//         <option value="Gallery information">Gallery information</option>
//         <option value="Full opening hours">Full opening hours</option>
//         <option value="Visit">Visit</option>
//         <option value="Entering the museum">Entering the museum</option>
//         <option value="Facilities">Facilities</option>
//         <option value="Facilities for families">Facilities for families</option>
//         <option value="Group visits">Group visits</option>
//         <option value="Private guided tours for groups">
//           Private guided tours for groups
//         </option>
//         <option value="FAQs">FAQs</option>
//         <option value="FAQs-Out-of-hours">FAQs-Out-of-hours</option>
//         <option value="Getting to the Museum">Getting to the Museum</option>
//         <option value="Accessibility around the Museum">
//           Accessibility around the Museum
//         </option>
//         <option value="Accessible resources">Accessible resources</option>
//         <option value="Gallery information for late opening on Fridays">
//           Gallery information for late opening on Fridays
//         </option>
//         <option value="FAQs-Support">FAQs-Support</option>
//         <option value="Governance">Governance</option>
//         <option value="Access to information about the Dersim Museum">
//           Access to information about the Dersim Museum
//         </option>
//         <option value="FAQs-Contact">FAQs-Contact</option>
//         <option value="Phone numbers">Phone numbers</option>
//         <option value="Making your request">Making your request</option>
//         <option value="Application process">Application process</option>
//         <option value="Accredited suppliers">Accredited suppliers</option>
//         <option value="Further information">Further information</option>
//         <option value="Study room information">Study room information</option>
//       </select>

//       {/* Yeni Accordion Oluşturma Formu */}
//       <h2>Yeni Accordion Oluştur</h2>
//       <form onSubmit={handleCreateSubmit}>
//         <input
//           type="text"
//           name="key"
//           placeholder="Accordion Anahtarı"
//           value={formData.key}
//           onChange={handleFormChange}
//           required
//         />
//         <input
//           type="text"
//           name="title"
//           placeholder="Accordion Başlığı"
//           value={formData.title}
//           onChange={handleFormChange}
//           required
//         />
//         <textarea
//           name="content"
//           placeholder="Accordion İçeriği"
//           value={formData.content}
//           onChange={handleFormChange}
//           required
//         />
//         <button type="submit">Accordion Oluştur</button>
//       </form>

//       {/* Accordion Güncelleme Formu */}
//       {editingAccordion && (
//         <div>
//           <h2>Accordion Düzenle</h2>
//           <form onSubmit={handleUpdateSubmit}>
//             <input
//               type="text"
//               name="key"
//               placeholder="Anahtar"
//               value={formData.key}
//               onChange={handleFormChange}
//               required
//             />
//             <input
//               type="text"
//               name="title"
//               placeholder="Başlık"
//               value={formData.title}
//               onChange={handleFormChange}
//               required
//             />
//             <textarea
//               name="content"
//               placeholder="İçerik"
//               value={formData.content}
//               onChange={handleFormChange}
//               required
//             />
//             <button type="submit">Güncelle</button>
//           </form>
//         </div>
//       )}

//       <h2>Mevcut Accordion Verileri</h2>
//       <ul>
//         {accordionData.length > 0 ? (
//           accordionData.map((accordion) => (
//             <li key={accordion._id}>
//               <strong>{accordion.title}</strong>: {accordion.content}
//               <button onClick={() => handleEditClick(accordion)}>
//                 Düzenle
//               </button>
//             </li>
//           ))
//         ) : (
//           <li>Henüz veri yok.</li>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default AccordionManage;

import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill-new"; // react-quill importu
import "react-quill-new/dist/quill.snow.css"; // Quill için stil dosyasını import ettik

function AccordionManage() {
  const [accordionData, setAccordionData] = useState([]); // Accordion verileri
  const [categoryId, setCategoryId] = useState(""); // Kategori ID'si
  const [formData, setFormData] = useState({ key: "", title: "", content: "" }); // Form verisi
  const [editingAccordion, setEditingAccordion] = useState(null); // Düzenlemeye başlanan accordion

  useEffect(() => {
    // Bootstrap CSS dosyasını dinamik olarak ekleyelim
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
    document.head.appendChild(link);

    // Bootstrap JS dosyasını dinamik olarak ekleyelim
    const script = document.createElement("script");
    script.src =
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
    script.integrity =
      "sha384-pzjw8f+ua7Kw1TIq0p6n6YDpU7tQAxpfe4EdT9B5o8TJOz1IpD7mf6p7r5pXj/Ud";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // Temizleme fonksiyonu, component unmount olduğunda link ve scripti kaldırır
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []); // Boş array, yalnızca component mount olduğunda çalışır

  // categoryId'ye göre accordion verilerini çekme
  useEffect(() => {
    if (categoryId) {
      const fetchAccordionData = async () => {
        const response = await fetch(
          `https://dersim-new-blog-backend.vercel.app/api/accordion/accordion-category/${categoryId}`
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          setAccordionData(data);
        } else {
          setAccordionData([]);
          console.error("Accordion verisi geçerli bir dizi değil:", data);
        }
      };

      fetchAccordionData();
    }
  }, [categoryId]);

  // Kategori değişikliğini işleme
  const handleCategoryChange = (e) => {
    setCategoryId(e.target.value);
  };

  // Yeni accordion oluşturma işlemi
  const handleCreateSubmit = async (e) => {
    e.preventDefault();

    // HTML içeriği, CSS ile birlikte olduğu gibi veritabanına gönderilecek
    const response = await fetch(
      `https://dersim-new-blog-backend.vercel.app/api/accordion/accordion-category/${categoryId}/create`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }), // HTML içeriği olduğu gibi gönder
      }
    );

    if (response.ok) {
      alert("Accordion başarıyla oluşturuldu!");
      setFormData({ key: "", title: "", content: "" });
      const updatedData = await response.json();
      setAccordionData(updatedData);
    } else {
      alert("Accordion oluşturulurken bir hata oluştu.");
    }
  };

  // Accordion güncelleme işlemi
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    // HTML içeriği, CSS ile birlikte olduğu gibi veritabanına gönderilecek
    const response = await fetch(
      `https://dersim-new-blog-backend.vercel.app/api/accordion/accordion/${editingAccordion._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }), // HTML içeriği olduğu gibi gönder
      }
    );

    if (response.ok) {
      alert("Accordion başarıyla güncellendi!");
      setFormData({ key: "", title: "", content: "" });
      setEditingAccordion(null);
      const updatedData = await response.json();
      setAccordionData(updatedData);
    } else {
      alert("Accordion güncellenirken bir hata oluştu.");
    }
  };

  // Accordion düzenleme işlemi
  const handleEditClick = (accordion) => {
    setEditingAccordion(accordion);
    setFormData({
      key: accordion.key,
      title: accordion.title,
      content: accordion.content,
    });
  };

  // Accordion silme işlemi
  const handleDeleteClick = async (accordionId) => {
    const response = await fetch(
      `https://dersim-new-blog-backend.vercel.app/api/accordion/accordion/${accordionId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      alert("Accordion başarıyla silindi!");
      const updatedData = await response.json();
      setAccordionData(updatedData); // Silme işlemi sonrası güncellenmiş verileri almak için
    } else {
      alert("Accordion silinirken bir hata oluştu.");
    }
  };

  return (
    <div className="container mt-4">
      {/* Kategori Seçici */}
      <div className="mb-4">
        <label htmlFor="categorySelect" className="form-label">
          Kategori Seçin
        </label>
        <select
          id="categorySelect"
          onChange={handleCategoryChange}
          value={categoryId}
          className="form-select"
        >
          <option value="">Bir Kategori Seçin</option>
          <option value="Ticket information">Ticket information</option>
          <option value="Gallery information">Gallery information</option>
          <option value="Full opening hours">Full opening hours</option>
          <option value="Visit">Visit</option>
          <option value="Entering the museum">Entering the museum</option>
          <option value="Facilities">Facilities</option>
          <option value="Facilities for families">
            Facilities for families
          </option>
          <option value="Group visits">Group visits</option>
          <option value="Private guided tours for groups">
            Private guided tours for groups
          </option>
          <option value="FAQs">FAQs</option>
          <option value="FAQs-Out-of-hours">FAQs-Out-of-hours</option>
          <option value="Getting to the Museum">Getting to the Museum</option>
          <option value="Accessibility around the Museum">
            Accessibility around the Museum
          </option>
          <option value="Accessible resources">Accessible resources</option>
          <option value="Gallery information for late opening on Fridays">
            Gallery information for late opening on Fridays
          </option>
          <option value="FAQs-Support">FAQs-Support</option>
          <option value="Governance">Governance</option>
          <option value="Access to information about the Dersim Museum">
            Access to information about the Dersim Museum
          </option>
          <option value="FAQs-Contact">FAQs-Contact</option>
          <option value="Phone numbers">Phone numbers</option>
          <option value="Making your request">Making your request</option>
          <option value="Application process">Application process</option>
          <option value="Accredited suppliers">Accredited suppliers</option>
          <option value="Further information">Further information</option>
          <option value="Study room information">Study room information</option>
        </select>
      </div>

      {/* Yeni Accordion Oluşturma Formu */}
      <h2 className="mb-3">Yeni Accordion Oluştur</h2>
      <form onSubmit={handleCreateSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="key"
            placeholder="Accordion Anahtarı"
            value={formData.key}
            onChange={(e) => setFormData({ ...formData, key: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="title"
            placeholder="Accordion Başlığı"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <ReactQuill
            value={formData.content}
            onChange={(content) => setFormData({ ...formData, content })}
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

                // Yeni eklenen özellikler
                [{ "line-height": ["1", "1.5", "2", "2.5"] }], // satır aralığı
                [{ size: ["small", "normal", "large", "huge"] }], // yazı boyutu
              ],
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Accordion Oluştur
        </button>
      </form>

      {/* Accordion Güncelleme Formu */}
      {editingAccordion && (
        <div className="mt-4">
          <h2 className="mb-3">Accordion Düzenle</h2>
          <form onSubmit={handleUpdateSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="key"
                placeholder="Anahtar"
                value={formData.key}
                onChange={(e) =>
                  setFormData({ ...formData, key: e.target.value })
                }
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="title"
                placeholder="Başlık"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <ReactQuill
                value={formData.content}
                onChange={(content) => setFormData({ ...formData, content })}
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

                    // Yeni eklenen özellikler
                    [{ "line-height": ["1", "1.5", "2", "2.5"] }], // satır aralığı
                    [{ size: ["small", "normal", "large", "huge"] }], // yazı boyutu
                  ],
                }}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Güncelle
            </button>
          </form>
        </div>
      )}

      {/* Accordion Listeleme */}
      <h2 className="mt-4">Mevcut Accordion Verileri</h2>
      <ul className="list-group">
        {accordionData.length > 0 ? (
          accordionData.map((accordion) => (
            <li
              key={accordion._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <strong>{accordion.title}</strong>:
              <div
                dangerouslySetInnerHTML={{
                  __html: accordion.content,
                }}
              />
              <div>
                <button
                  onClick={() => handleEditClick(accordion)}
                  className="btn btn-warning btn-sm mx-1"
                >
                  Düzenle
                </button>
                <button
                  onClick={() => handleDeleteClick(accordion._id)}
                  className="btn btn-danger btn-sm mx-1"
                >
                  Sil
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item">Henüz veri yok.</li>
        )}
      </ul>
    </div>
  );
}

export default AccordionManage;

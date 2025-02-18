import React, { useState, useEffect } from "react";

function AccordionManage() {
  const [accordionData, setAccordionData] = useState([]); // Başlangıçta boş dizi
  const [categoryId, setCategoryId] = useState(""); // kategoriId için filtreleme
  const [formData, setFormData] = useState({ key: "", title: "", content: "" });
  const [pageTitle, setPageTitle] = useState("");

  // categoryId'ye göre accordion verilerini çekme
  useEffect(() => {
    if (categoryId) {
      const fetchAccordionData = async () => {
        const response = await fetch(
          `https://dersim-new-blog-backend.vercel.app/api/accordion/accordion-category/${categoryId}`
        );
        const data = await response.json();

        // Gelen verinin bir dizi olduğunu kontrol et
        if (Array.isArray(data)) {
          setAccordionData(data);
        } else {
          setAccordionData([]); // Eğer dizi değilse boş bir dizi ata
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

  // Form verilerini işleme
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Yeni accordion oluşturma işlemi

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://dersim-new-blog-backend.vercel.app/api/accordion/accordion-category/${categoryId}/create`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      alert("Accordion başarıyla oluşturuldu!");
      setFormData({ key: "", title: "", content: "" });
      const updatedData = await response.json();
      setAccordionData(updatedData); // Yeni verileri almak için
    } else {
      alert("Accordion oluşturulurken bir hata oluştu.");
    }
  };

  // Sayfa başlığını güncelleme işlemi
  const handlePageTitleChange = (e) => {
    setPageTitle(e.target.value);
  };

  const handleTitleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://dersim-new-blog-backend.vercel.app/api/accordion/accordion-title/${categoryId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: pageTitle }),
      }
    );

    if (response.ok) {
      alert("Sayfa başlığı başarıyla güncellendi!");
    } else {
      alert("Sayfa başlığı güncellenirken bir hata oluştu.");
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      {/* Kategori Seçici */}
      <select onChange={handleCategoryChange} value={categoryId}>
        <option value="">Bir Kategori Seçin</option>
        <option value="Ticket information">Ticket information</option>
        <option value="Gallery information">Gallery information</option>
        <option value="Full opening hours">Full opening hours</option>
        <option value="Visit">Visit</option>
        <option value="Entering the museum">Entering the museum</option>
        <option value="Facilities">Facilities</option>
        <option value="Facilities for families">Facilities for families</option>
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

      {/* Sayfa Başlığı Editörü */}
      {/* <form onSubmit={handleTitleSubmit}>
        <input
          type="text"
          value={pageTitle}
          onChange={handlePageTitleChange}
          placeholder="Sayfa Başlığı"
          required
        />
        <button type="submit">Sayfa Başlığını Güncelle</button>
      </form> */}

      {/* Yeni Accordion Oluşturma Formu */}
      <h2>Yeni Accordion Oluştur</h2>
      <form onSubmit={handleCreateSubmit}>
        <input
          type="text"
          name="key"
          placeholder="Accordion Anahtarı"
          value={formData.key}
          onChange={handleFormChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Accordion Başlığı"
          value={formData.title}
          onChange={handleFormChange}
          required
        />
        <textarea
          name="content"
          placeholder="Accordion İçeriği"
          value={formData.content}
          onChange={handleFormChange}
          required
        />

        <button type="submit">Accordion Oluştur</button>
      </form>

      <h2>Mevcut Accordion Verileri</h2>
      <ul>
        {/* accordionData'nın bir dizi olup olmadığını kontrol et */}
        {Array.isArray(accordionData) && accordionData.length > 0 ? (
          accordionData.map((accordion, index) => (
            <li key={index}>
              <strong>{accordion.title}</strong>: {accordion.content}
            </li>
          ))
        ) : (
          <li>Henüz veri yok.</li> // Veri yoksa kullanıcıya bir mesaj göster
        )}
      </ul>
    </div>
  );
}

export default AccordionManage;

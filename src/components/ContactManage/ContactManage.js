import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactManage = () => {
  // State to store contact form data
  const [contactForms, setContactForms] = useState([]);

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

  // Fetch data from the backend on component mount
  useEffect(() => {
    axios
      .get("https://dersim-new-blog-backend.vercel.app/api/contact/get/contact") // API URL
      .then((response) => {
        setContactForms(response.data); // Set the response data to state
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // Log any error
      });
  }, []); // Run once when the component mounts

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">İletişim Formları</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Ad Soyad</th>
              <th>Email</th>
              <th>Mesaj</th>
              <th>Tarih</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping through contactForms state to render each form */}
            {contactForms.map((form) => (
              <tr key={form._id}>
                <td>{form.nameSurname}</td>
                <td>{form.email}</td>
                <td>{form.message}</td>
                <td>{new Date(form.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactManage;

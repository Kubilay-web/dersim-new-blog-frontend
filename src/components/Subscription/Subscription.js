import React, { useEffect, useState } from "react";

const Subscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);

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

  // Fetch subscriptions when the component mounts
  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await fetch(
          "https://dersim-new-blog-backend.vercel.app/api/subscribe/get"
        );
        const data = await response.json();
        setSubscriptions(data);
      } catch (error) {
        console.error("Abonelikleri alırken hata oluştu", error);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Abonelik Listesi</h2>

      {subscriptions.length > 0 ? (
        <div className="row">
          {subscriptions.map((subscription, index) => (
            <div className="col-md-6 mb-4 text-center" key={index}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <p className="card-text text-center">{subscription.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Henüz abone olan kimse yok.</p>
      )}
    </div>
  );
};

export default Subscription;

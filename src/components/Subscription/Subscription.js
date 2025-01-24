import React, { useEffect, useState } from "react";

const Subscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  // Bootstrap CSS ve JS dosyasını dinamik olarak yükle
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  // Fetch subscriptions when the component mounts
  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/subscribe/get");
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

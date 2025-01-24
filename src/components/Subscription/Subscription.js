import React, { useEffect, useState } from "react";

const Subscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);

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

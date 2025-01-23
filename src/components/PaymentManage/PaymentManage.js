import React, { useEffect, useState } from "react";
import axios from "axios";

const PaymentManage = () => {
  const [payments, setPayments] = useState([]);

  // API'den ödeme verilerini al
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(
          "https://dersim-new-blog-backend.onrender.com/api/payments"
        );
        setPayments(response.data.payments);
      } catch (error) {
        console.error("Error fetching payments", error);
      }
    };

    fetchPayments();
  }, []);

  // Ödeme detaylarının açılmasını ve kapanmasını kontrol et
  const toggleDetails = (paymentId) => {
    setPayments((prevPayments) =>
      prevPayments.map((payment) =>
        payment._id === paymentId
          ? { ...payment, isOpen: !payment.isOpen } // Eğer açıldıysa kapat, kapalıysa aç
          : payment
      )
    );
  };

  return (
    <div className="container mt-4">
      {/* Payment List Table */}
      <h4>Payments List</h4>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Status</th>
            <th>Payment Method</th>
            <th>Buyer</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {payments.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No payments found.
              </td>
            </tr>
          ) : (
            payments.map((payment) => (
              <tr key={payment._id}>
                <td>
                  {payment.paidPrice} {payment.currency}
                </td>
                <td>{payment.status}</td>
                <td>{payment.paymentChannel}</td>
                <td>
                  {payment.buyer.name} {payment.buyer.surname}
                </td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => toggleDetails(payment._id)}
                  >
                    {payment.isOpen ? "Hide Details" : "View Details"}
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Transaction Details for Selected Payment */}
      {payments.length > 0 &&
        payments.map(
          (payment) =>
            payment.isOpen && (
              <div key={payment._id} className="mt-4">
                <h4>Transaction Details</h4>
                <div>
                  <h5>Buyer Information</h5>
                  <p>
                    <strong>Name:</strong> {payment.buyer.name}{" "}
                    {payment.buyer.surname}
                  </p>
                  <p>
                    <strong>Email:</strong> {payment.buyer.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {payment.buyer.gsmNumber}
                  </p>

                  <h5>Shipping Address</h5>
                  <p>
                    <strong>Contact Name:</strong>{" "}
                    {payment.shippingAddress.contactName}
                  </p>
                  <p>
                    <strong>Address:</strong> {payment.shippingAddress.address}
                  </p>
                  <p>
                    <strong>City:</strong> {payment.shippingAddress.city},
                    <strong> Zip Code:</strong>{" "}
                    {payment.shippingAddress.zipCode},<strong>Country:</strong>{" "}
                    {payment.shippingAddress.country}
                  </p>

                  <h5>Billing Address</h5>
                  <p>
                    <strong>Contact Name:</strong>{" "}
                    {payment.billingAddress.contactName}
                  </p>
                  <p>
                    <strong>Address:</strong> {payment.billingAddress.address}
                  </p>
                  <p>
                    <strong>City:</strong> {payment.billingAddress.city},
                    <strong> Zip Code:</strong> {payment.billingAddress.zipCode}
                    ,<strong> Country:</strong> {payment.billingAddress.country}
                  </p>

                  <h5>Basket Items</h5>
                  <ul>
                    {payment.basketItems.map((item, index) => (
                      <li key={index}>
                        <strong>{item.name}</strong> - {item.price}{" "}
                        {payment.currency}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
        )}
    </div>
  );
};

export default PaymentManage;

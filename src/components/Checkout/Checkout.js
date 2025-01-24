import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { clearCart } from "../../redux/products/cartSlice";

const Checkout = () => {
  const { currentUser } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paymentDetails, setPaymentDetails] = useState({
    locale: "tr",
    conversationId: "123456789", // Örnek ID
    price: cart.cartTotalAmount || 0,
    paidPrice: cart.cartTotalAmount || 0,
    currency: "TRY",
    installment: "1",
    basketId: "B67832",
    paymentChannel: "WEB",
    paymentGroup: "PRODUCT",
    paymentCard: {
      cardHolderName: "",
      cardNumber: "",
      expireMonth: "",
      expireYear: "",
      cvc: "",
      registerCard: "0",
    },
    buyer: {
      id: currentUser?._id || "BY789",
      name: currentUser?.name || "John",
      surname: currentUser?.surname || "Doe",
      gsmNumber: currentUser?.gsmNumber || "+905350000000",
      email: currentUser?.email || "email@email.com",
      identityNumber: "74300864791",
      lastLoginDate: "2015-10-05 12:43:35",
      registrationDate: "2013-04-21 15:12:09",
      registrationAddress: "dfgdfgfdgfd",
      ip: "85.34.78.112",
      city: currentUser?.city || "Istanbul",
      country: "Turkey",
      zipCode: "34732",
    },
    shippingAddress: {
      contactName: currentUser?.name || "",
      city: currentUser?.city || "",
      country: "Turkey",
      address: "",
      zipCode: "",
    },
    billingAddress: {
      contactName: currentUser?.name || "Jane Doe",
      city: currentUser?.city || "Istanbul",
      country: "Turkey",
      address: "sdfdsfdsfsdsdfds",
      zipCode: "34742",
    },
    basketItems:
      cart.cartItems && Array.isArray(cart.cartItems)
        ? cart.cartItems.map((item) => ({
            id: item._id,
            name: item.name,
            category1: item.category1 || "Other",
            category2: item.category2 || "Other",
            itemType: item.itemType || "PHYSICAL",
            price: item.price * item.cartQuantity, // Fiyatı miktarla çarp
          }))
        : [],
    cartTotalAmount: cart.cartTotalAmount || 0,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split(".");

    if (nameParts[0] === "paymentCard") {
      setPaymentDetails((prevDetails) => ({
        ...prevDetails,
        paymentCard: {
          ...prevDetails.paymentCard,
          [nameParts[1]]: value,
        },
      }));
    } else if (nameParts[0] === "buyer") {
      setPaymentDetails((prevDetails) => ({
        ...prevDetails,
        buyer: {
          ...prevDetails.buyer,
          [nameParts[1]]: value,
        },
      }));
    } else if (nameParts[0] === "shippingAddress") {
      setPaymentDetails((prevDetails) => ({
        ...prevDetails,
        shippingAddress: {
          ...prevDetails.shippingAddress,
          [nameParts[1]]: value,
        },
      }));
    } else if (nameParts[0] === "billingAddress") {
      setPaymentDetails((prevDetails) => ({
        ...prevDetails,
        billingAddress: {
          ...prevDetails.billingAddress,
          [nameParts[1]]: value,
        },
      }));
    } else {
      setPaymentDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const URL = process.env.REACT_APP_BACKEND_URL;
    const apiUrl = `${URL}/api/payments/create`; // Backend API endpoint

    try {
      const response = await axios.post(apiUrl, paymentDetails, {
        headers: {
          "Content-Type": "application/json", // JSON format
        },
      });

      const { success, result } = response.data;

      if (result.status === "failure") {
        setPaymentStatus("failure");
        setErrorMessage(
          result.errorMessage || "Ödeme işlemi esnasında bir hata oluştu."
        );
      } else if (success && result.status === "success") {
        setPaymentStatus("success");
        dispatch(clearCart());
      }
    } catch (error) {
      console.error("Error during payment:", error);
      setPaymentStatus("failure");
      setErrorMessage("Ödeme sırasında bir hata oluştu.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="checkout-container container py-5">
      <h1 className="text-3xl font-semibold text-center mb-5">Ödeme Sayfası</h1>

      {paymentStatus === "success" ? (
        <div className="payment-status success text-center">
          <h2 className="h3 text-success">Ödeme Başarılı!</h2>
          <p className="text-muted">
            Ödeme işleminiz başarıyla tamamlandı. Siparişiniz işleme alındı.
          </p>
          <button onClick={() => navigate("/shop")} className="btn btn-primary">
            Ana Sayfaya Dön
          </button>
        </div>
      ) : paymentStatus === "failure" ? (
        <div className="payment-status failure text-center">
          <h2 className="h3 text-danger">Ödeme Başarısız!</h2>
          <p className="text-muted">
            {errorMessage ||
              "Ödeme işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin."}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary"
          >
            Tekrar Dene
          </button>
        </div>
      ) : (
        <form onSubmit={handlePayment} className="checkout-form">
          {/* Payment Card Information */}
          <div className="section mb-4">
            <h3>Ödeme Kartı Bilgileri</h3>
            <div className="input-group row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="paymentCard.cardHolderName"
                  value={paymentDetails.paymentCard.cardHolderName}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Kart Sahibi"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="paymentCard.cardNumber"
                  value={paymentDetails.paymentCard.cardNumber}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Kart Numarası"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="paymentCard.expireMonth"
                  value={paymentDetails.paymentCard.expireMonth}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Son Kullanma Ayı"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="paymentCard.expireYear"
                  value={paymentDetails.paymentCard.expireYear}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Son Kullanma Yılı"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="paymentCard.cvc"
                  value={paymentDetails.paymentCard.cvc}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="CVC"
                  required
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="section mb-4">
            <h3>Teslimat Bilgileri</h3>
            <div className="input-group row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="shippingAddress.contactName"
                  value={paymentDetails.shippingAddress.contactName}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Teslimat Adı"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="shippingAddress.address"
                  value={paymentDetails.shippingAddress.address}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Teslimat Adresi"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="shippingAddress.city"
                  value={paymentDetails.shippingAddress.city}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Şehir"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="shippingAddress.zipCode"
                  value={paymentDetails.shippingAddress.zipCode}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Posta Kodu"
                  required
                />
              </div>
            </div>
          </div>

          {/* Cart Information */}
          <div className="cart-items mb-4">
            <h4 className="mb-3">Sepet Bilgileri</h4>
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item row mb-3" key={cartItem._id}>
                  <div className="col-6 d-flex">
                    <img
                      src={cartItem.image}
                      alt={cartItem.name}
                      className="img-fluid"
                      style={{ maxWidth: "50px" }}
                    />
                    <div className="ms-2">
                      <h5>{cartItem.name}</h5>
                      <p className="text-muted">{cartItem.desc}</p>
                    </div>
                  </div>
                  <div className="col-2 text-center">
                    <span>{cartItem.price} TL</span>
                  </div>
                  <div className="col-2 text-center">
                    <span>x{cartItem.cartQuantity}</span>
                  </div>
                  <div className="col-2 text-end">
                    <span>{cartItem.price * cartItem.cartQuantity} TL</span>
                  </div>
                </div>
              ))}
          </div>

          <div className="subtotal mb-3 d-flex justify-content-between">
            <span>
              <b>Subtotal</b>
            </span>
            <span>{cart.cartTotalAmount} TL</span>
          </div>

          {/* Continue Shopping Button */}
          <div className="btn-container mb-3">
            <button
              type="button"
              className="btn btn-secondary w-65"
              onClick={() => navigate("/shop")}
            >
              Continue Shopping
            </button>
          </div>

          {/* Payment Button */}
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-primary w-65"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Ödeme Yap"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Order.module.css"; 
import CreditCardForm from "../CreditCardForm/CreditCardFord";

const Order = () => {
  const [step, setStep] = useState(1);
  const [orderData, setOrderData] = useState({});
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);
  const { cart } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleShowCreditCardForm = () => {
    setShowCreditCardForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order data:", orderData);
    console.log("Cart:", cart);
    navigate("/order-confirmation");
  };

  return (
    <section className={styles.order}>
      <h2>Оформление заказа</h2>
      <form className={styles.orderForm} onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <h3>Информация о покупателе</h3>
            <label>
              Имя:
              <input
                type="text"
                name="firstName"
                value={orderData.firstName || ""}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Фамилия:
              <input
                type="text"
                name="lastName"
                value={orderData.lastName || ""}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={orderData.email || ""}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Телефон:
              <input
                type="tel"
                name="phone"
                value={orderData.phone || ""}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="button" onClick={nextStep}>
              Далее
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h3>Информация об оплате</h3>
            {!showCreditCardForm ? (
              <button type="button" onClick={handleShowCreditCardForm}>
                Ввести данные карты
              </button>
            ) : (
              <CreditCardForm
                orderData={orderData}
                handleInputChange={handleInputChange}
              />
            )}
            <button type="button" onClick={prevStep}>
              Назад
            </button>
            <button type="button" onClick={nextStep}>
              Далее
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h3>Адрес доставки</h3>
            <label>
              Адрес:
              <input
                type="text"
                name="address"
                value={orderData.address || ""}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Город:
              <input
                type="text"
                name="city"
                value={orderData.city || ""}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Индекс:
              <input
                type="text"
                name="zipCode"
                value={orderData.zipCode || ""}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="button" onClick={prevStep}>
              Назад
            </button>
            <button type="submit">Подтвердить заказ</button>
          </>
        )}
      </form>
    </section>
  );
};

export default Order;
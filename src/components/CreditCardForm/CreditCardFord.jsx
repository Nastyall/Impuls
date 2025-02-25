import React from "react";
import styles from "../../styles/CreditCardForm.module.css";

const CreditCardForm = ({ orderData, handleInputChange }) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.front}>
              <div className={styles.type}>
             
              </div>
              <span className={styles.number}>############</span>
              <div className={styles.name}>ИМЯ ФАМИЛИЯ</div>
              <div className={styles.validate}>
                <span>VALID<br />THRU</span>
                <span>MM/YY</span>
              </div>
            </div>
            <div className={styles.back}>
              <div className={styles.strip}></div>
              <div className={styles.mgn}>
                <span>CVV</span>
                <span className={styles.cvv}>---</span>
              </div>
            </div>
          </div>
        </div>
        <form className={styles.form}>
          <label htmlFor="name">Имя на карте</label>
          <input
            type="text"
            id="name"
            name="cardName"
            placeholder="Имя Фамилия"
            value={orderData.cardName || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="number">Номер карты</label>
          <input
            type="number"
            id="number"
            name="cardNumber"
            placeholder="Номер карты"
            value={orderData.cardNumber || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="date">Срок действия</label>
          <input
            type="number"
            id="date"
            name="cardExpiry"
            placeholder="MM/YY"
            value={orderData.cardExpiry || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="code">CVV</label>
          <input
            type="number"
            id="code"
            name="cardCvv"
            placeholder="CVV"
            value={orderData.cardCvv || ""}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
};

export default CreditCardForm;
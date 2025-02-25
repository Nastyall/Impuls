import React from "react";

import styles from "../../styles/Home.module.css";

import BG from "../../images/speed.svg";

const Poster = () => (
  <section className={styles.home}>
    <div className={styles.title}>ИМПУЛЬС</div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subtitle}>только качественная одежда </div>
        <h1 className={styles.head}>Для быстрых покупок только к нам</h1>
      </div>
      <div className={styles.image}>
        <img src={BG} alt="" />
      </div>
    </div>
  </section>
);

export default Poster;

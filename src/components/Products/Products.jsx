import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Products.module.css";

const Products = ({ title, style = {}, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={styles.products} style={style}>
      {title && <h2>{title}</h2>}

      <div className={styles.list}>
        {list.map(({ id, imageUrl, name, category, price, description, sizes }) => { 
          const categoryName = category ? category.name : "Без категории"; 
          return (
            <Link to={`/products/${id}`} key={id} className={styles.product}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${imageUrl})` }}
              />

              <div className={styles.wrapper}>
                <h3 className={styles.title}>{name}</h3>
                <div className={styles.cat}>{categoryName}</div> 
                <div className={styles.info}>
                  <div className={styles.prices}>
                    <div className={styles.price}>{price}₽</div>
                    <div className={styles.oldPrice}>
                      {Math.floor(price * 1.2)}₽
                    </div>
                  </div>


                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../../styles/Favorites.module.css"; 


const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.list);

  return (
    <section className={styles.favorites}>
      <h2>Избранное</h2>
      {favorites.length === 0 ? (
        <p>В вашем списке избранного пока нет товаров.</p>
      ) : (
        <div className={styles.list}>
          {favorites.map((item) => (
            <div key={item.id} className={styles.item}>
              <Link to={`/products/${item.id}`}>
                <img src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price}₽</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Favorites;
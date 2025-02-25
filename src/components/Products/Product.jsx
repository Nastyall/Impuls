import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../utils/routes";
import styles from "../../styles/Product.module.css";
import { addItemToCart } from "../../features/user/userSlice";
import { addToFavorites, removeFromFavorites } from "../../features/favorites/favoritesSlice"; 

const Product = ({ item }) => {
  const { name, price, description, sizes, imageUrl, additionalImages, id } = item; 
  const dispatch = useDispatch();
  const [currentImage, setCurrentImage] = useState(imageUrl);
  const [currentSize, setCurrentSize] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const favorites = useSelector((state) => state.favorites.list);
  const isFavorite = favorites.some((favItem) => favItem.id === id);

  useEffect(() => {
    setCurrentImage(imageUrl);
  }, [imageUrl]);

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

  const handleAddToFavorites = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(item));
    }
  };

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={styles.additionalImages}>
          {additionalImages &&
            additionalImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Additional ${index + 1}`}
                className={styles.additionalImage}
                onClick={() => setCurrentImage(image)}
              />
            ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.price}>{price}₽</div>
        <div className={styles.sizes}>
          <span>Размер:</span>
          <div className={styles.list}>
            {sizes &&
              sizes.map((size) => (
                <div
                  onClick={() => {
                    setCurrentSize(size);
                    setSelectedSize(size);
                  }}
                  className={`${styles.size} ${
                    currentSize === size ? styles.active : ""
                  }`}
                  key={size}
                >
                  {size}
                </div>
              ))}
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <button
            onClick={addToCart}
            className={styles.add}
            disabled={!selectedSize}
          >
            Добавить в корзину
          </button>
          <button
            onClick={handleAddToFavorites}
            className={styles.favourite}
          >
            {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
          </button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.purchases}>
            {Math.floor(Math.random() * 20 + 1)} людей приобрело
          </div>
          <Link to={ROUTES.HOME}>Вернуться на главную</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
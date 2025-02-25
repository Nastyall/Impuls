import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "../../styles/Category.module.css";
import Products from "../Products/Products";

const Category = () => {
  const { id } = useParams();
  const { list: allProducts, isLoading } = useSelector((state) => state.products);
  const { list: categories } = useSelector(({ categories }) => categories);
  const [cat, setCat] = useState(null);

  const defaultValues = useMemo(() => ({
    title: "",
    price_min: 0,
    price_max: 0,
    size: "", 
  }), []);

  const defaultParams = useMemo(() => ({
    categoryId: id,
    limit: 5,
    offset: 0,
    ...defaultValues,
  }), [id, defaultValues]);

  const [isEnd, setEnd] = useState(false);
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!id) return;

    setValues(defaultValues);
    setProducts([]);
    setEnd(false);
    setParams({ ...defaultParams, categoryId: id });
  }, [id, defaultValues, defaultParams]);

  useEffect(() => {
    if (!id || !categories.length) return;

    const category = categories.find((item) => item.id === id);
    setCat(category);
  }, [categories, id]);

  useEffect(() => {
    if (isLoading || !id) return;

    const filteredProducts = allProducts.filter((product) => {
      if (product.category.id !== id) return false;
      if (values.title && !product.name.toLowerCase().includes(values.title.toLowerCase())) return false;
      if (values.price_min && product.price < values.price_min) return false;
      if (values.price_max && product.price > values.price_max) return false;
      if (values.size && !product.sizes.includes(values.size)) return false;

      return true;
    });

    const limitedProducts = filteredProducts.slice(params.offset, params.offset + params.limit);
    setProducts(limitedProducts);
    setEnd(limitedProducts.length < params.limit);
  }, [allProducts, id, isLoading, params, values]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([]);
    setEnd(false);
    setParams({ ...defaultParams, ...values });
  };

  const handleReset = () => {
    setValues(defaultValues);
    setParams(defaultParams);
    setEnd(false);
    setProducts([]);
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{cat?.name}</h2>

      <form className={styles.filters} onSubmit={handleSubmit}>
        <div className={styles.filter}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Название"
            value={values.title}
          />
        </div>
        <div className={styles.filter}>
          <input
            type="number"
            name="price_min"
            onChange={handleChange}
            placeholder="0"
            value={values.price_min}
          />
          <span>От</span>
        </div>
        <div className={styles.filter}>
          <input
            type="number"
            name="price_max"
            onChange={handleChange}
            placeholder="0"
            value={values.price_max}
          />
          <span>До</span>
        </div>
        <div className={styles.filter}>
          <select
            name="size"
            onChange={handleChange}
            value={values.size}
          >
            <option value="">Все размеры</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <button type="submit" hidden />
      </form>

      {isLoading ? (
        <div className="preloader">Загрузка..</div>
      ) : !allProducts.length ? (
        <div className={styles.back}>
          <span>Товары не найдены</span>
          <button onClick={handleReset}>Сбросить</button>
        </div>
      ) : (
        <Products
          title=""
          products={products}
          style={{ padding: 0 }}
          amount={products.length}
        />
      )}

      {!isEnd && (
        <div className={styles.more}>
          <button
            onClick={() =>
              setParams({ ...params, offset: params.offset + params.limit })
            }
          >
            Показать все товары
          </button>
        </div>
      )}
    </section>
  );
};

export default Category;
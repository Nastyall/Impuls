import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { getRelatedProducts } from "../../features/products/productsSlice";

import { ROUTES } from "../../utils/routes";

import Product from "../Products/Product";
import Products from "../Products/Products";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { list: products, related } = useSelector(({ products }) => products);

  const data = products.find((product) => product.id === id);

  useEffect(() => {
    if (!data) {
      navigate(ROUTES.HOME); 
    }
  }, [data, navigate]);

  useEffect(() => {
    if (!data) return;

    dispatch(getRelatedProducts(data.category.id));
  }, [data, dispatch]);

  if (!data) {
    return <section className="preloader">Товар не найден</section>;
  }

  return (
    <>
      <Product item={data} /> 
      <Products products={related} amount={5} title="Похожие товары" />
    </>
  );
};

export default SingleProduct;
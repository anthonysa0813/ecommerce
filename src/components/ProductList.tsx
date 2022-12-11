import { ProductInterface } from "interfaces";
import { GetServerSideProps } from "next";
import React from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/ProductList.module.css";

interface PropType {
  products: ProductInterface[];
}

const ProductList = ({ products }: PropType) => {
  return (
    <main className={styles.main}>
      <div className="wrapper">
        <div className={styles.mainContainer}>
          <h2>Ofertas del día</h2>
          {products.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default ProductList;

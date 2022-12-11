import ProductCard from "components/ProductCard";
import { getFetch } from "helpers/useFetch";
import { ProductsContext } from "hooks/ProductsContext";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { ProductInterface } from "../../interfaces/index";

const Products = () => {
  const {
    query: { q },
  } = useRouter();
  const context = useContext(ProductsContext);
  const [expRex, setExpRex] = useState(q);
  const [arrProductsFilter, setArrProductsFilter] = useState<
    ProductInterface[] | undefined
  >([]);
  useEffect(() => {
    const filter = context?.data.filter((product) => {
      const expReg = new RegExp(q as string, "i");
      // console.log(expReg)
      // console.log(expReg.test(product.title));
      if (expReg.test(product.title)) {
        return product;
      }
    });
    // console.log("filter", filter)
    setArrProductsFilter(filter);
  }, [q]);

  return (
    <div>
      <div className="wrapper">
        <h1>Products</h1>
        {arrProductsFilter?.length === 0 && <h4>No hay Products</h4>}
        {arrProductsFilter?.map((product: ProductInterface) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;

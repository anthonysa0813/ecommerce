import Button from "components/Button";
import CommentByUser from "components/CommentByUser";
import { usersData } from "helpers/data";
import { ProductInterface } from "interfaces";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import styles from "../../styles/ProductById.module.css";
import Slider from "react-slick";
import Image from "next/image";

const ProductById = () => {
  const {
    query: { id },
  } = useRouter();
  const [product, setProduct] = useState<ProductInterface>({
    _id: "",
    title: "",
    price: "",
    discount: "",
    starts: "",
    description: "",
    image: "",
    cantidad: 0,
  });

  const imagesArr = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dzgbz8lvg/image/upload/v1648915786/product-zoom1_xknaly.png",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dzgbz8lvg/image/upload/v1648915786/product-zoom2_gjfopy.png",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dzgbz8lvg/image/upload/v1648915786/product-zoom3_pk6awu.png",
    },
    { id: 4, url: product.image },
  ];

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className={styles.mainContainer}>
      <div className="wrapper">
        <div className={`${styles.mainGrid}`}>
          <div className={styles.photosGrid}>
            <div className={styles.containerImage}>
              <img
                src="https://res.cloudinary.com/dzgbz8lvg/image/upload/v1648915786/product-zoom1_xknaly.png"
                alt=""
              />
            </div>
            <div className={styles.containerImage}>
              <img
                src="https://res.cloudinary.com/dzgbz8lvg/image/upload/v1648915786/product-zoom2_gjfopy.png"
                alt=""
              />
            </div>
            <div className={styles.containerImage}>
              <img
                src="https://res.cloudinary.com/dzgbz8lvg/image/upload/v1648915786/product-zoom3_pk6awu.png"
                alt=""
              />
            </div>
            <div className={styles.containerImage}>
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className={styles.photosGridCarousel}>
            <div className={styles.item}>
              <img
                src="https://res.cloudinary.com/dzgbz8lvg/image/upload/v1648915786/product-zoom1_xknaly.png"
                alt=""
              />
            </div>
            <div className={styles.item}>
              <img
                src="https://res.cloudinary.com/dzgbz8lvg/image/upload/v1648915786/product-zoom2_gjfopy.png"
                alt=""
              />
            </div>
            <div className={styles.item}>
              <img
                src="https://res.cloudinary.com/dzgbz8lvg/image/upload/v1648915786/product-zoom3_pk6awu.png"
                alt=""
              />
            </div>
            <div className={styles.item}>
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className={styles.infoProduct}>
            <h2>{product.title}</h2>
            <div className="extraInfo">
              <span>${product.price}</span>
              <span>${product.discount}</span>
              <ReactStars
                count={5}
                value={Number(product.starts)}
                size={30}
                color2={"#ffd700"}
              />
            </div>
            <div className={styles.description}>
              <p>
                La {product.title} m??s delgada y ligera de Apple viene con los
                superpoderes del chip M1. Termina todos tus proyectos mucho m??s
                r??pido con el CPU de 8 n??cleos y disfruta como nunca antes de
                apps y juegos con gr??ficos avanzados gracias al GPU de hasta 8
                n??cleos. Adem??s, el Neural Engine de 16 n??cleos se encarga de
                acelerar todos los procesos de aprendizaje autom??tico. Todo en
                un dise??o silencioso sin ventilador que te ofrece la mayor
                duraci??n de bater??a en una MacBook Air: hasta 18 horas. (1)
                Port??til como siempre, m??s poderosa que nunca.
              </p>
            </div>
            <div className={styles.actionsButtons}>
              <Button type="button" content="Comprar ahora" bg="pink-fill" />
              <Button
                type="button"
                content="Agregar al carrito"
                bg="pink-outline"
              />
            </div>
          </div>
        </div>
        <div className={styles.charaterInfo}>
          <h4>Caracter??sticas de Apple MacBook Air A2337</h4>
          <div className={styles.valuesCharacter}>
            <span>Memoria RAM: 8 GB</span>
            <span>Tipo de resoluci??n: Full HD</span>
            <span>Tama??o de la pantalla: {"13''"}</span>
            <span>Duraci??n de la bater??a: 18 h</span>
          </div>
        </div>
        <div className={styles.commentsUsers}>
          <h4>Opiniones sobre Apple MacBook Air A2337</h4>
          <div className="commet">
            {usersData.map((user) => {
              return <CommentByUser key={user.id} user={user} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductById;

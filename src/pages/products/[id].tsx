import Button from 'components/Button';
import CommentByUser from 'components/CommentByUser';
import { usersData } from 'helpers/data';
import { ProductInterface } from 'interfaces'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars';
import styles from "../../styles/ProductById.module.css";

const ProductById = () => {
   const {query: {id}} = useRouter()
   const [product, setProduct] = useState<ProductInterface>({
    _id: "",
    title: "",
    price: "",
    discount: "",
    starts: "",
    description: "",
    image: "",
    cantidad: 0,
   })
   useEffect(() => {
    if(id) {
        fetch(`http://localhost:3000/api/products/${id}`).then(res => res.json())
        .then(data => setProduct(data))
    }
   }, [])
    return (
    <main className={styles.mainContainer}>
        <div className="wrapper">
            <div className={`${styles.mainGrid}`}>
                <div className={styles.photosGrid}>
                    <div className={styles.containerImage}>
                        <img src="https://res.cloudinary.com/dzgbz8lvg/image/upload/v1648915786/product-zoom1_xknaly.png" alt="" />
                    </div>
                    <div className={styles.containerImage}>
                        <img src="https://res.cloudinary.com/dzgbz8lvg/image/upload/v1648915786/product-zoom2_gjfopy.png" alt="" />
                    </div>
                    <div className={styles.containerImage}>
                        <img src="https://res.cloudinary.com/dzgbz8lvg/image/upload/v1648915786/product-zoom3_pk6awu.png" alt="" />
                    </div>
                    <div className={styles.containerImage}>
                        <img src={product.image} alt="" />
                    </div>
                </div>
                <div className="infoProduct">
                    <h2>{product.title}</h2>
                    <div className="extraInfo">
                        <span>${product.price}</span>
                        <span>${product.discount}</span>
                        <ReactStars
                            count={5}
                            value={Number(product.starts)}
                            size={30}
                            color2={'#ffd700'} />
                    </div>
                    <div className={styles.description}>
                        <p>La {product.title} más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos. Además, el Neural Engine de 16 núcleos se encarga de acelerar todos los procesos de aprendizaje automático. Todo en un diseño silencioso sin ventilador que te ofrece la mayor duración de batería en una MacBook Air: hasta 18 horas. (1) Portátil como siempre, más poderosa que nunca.</p>
                    </div>
                    <div className={styles.actionsButtons}>
                        <Button type="button" content="Comprar ahora" bg="pink-fill" />
                        <Button type="button" content="Agregar al carrito" bg="pink-outline" />
                    </div>
                </div>
            </div>
            <div className={styles.charaterInfo}>
                <h4>Características de Apple MacBook Air A2337</h4>
                <div className={styles.valuesCharacter}>
                    <span>Memoria RAM: 8 GB</span>
                    <span>Tipo de resolución: Full HD</span>
                    <span>Tamaño de la pantalla: {"13''"}</span>
                    <span>Duración de la batería: 18 h</span>
                </div>
            </div>
            <div className={styles.commentsUsers}>
                <h4>Opiniones sobre Apple MacBook Air A2337</h4>
                <div className="commet">
                    {
                        usersData.map((user) => {
                            return(
                                <CommentByUser key={user.id} user={user} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </main>
  )
}





export default ProductById
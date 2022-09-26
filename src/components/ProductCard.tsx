import { ProductInterface } from 'interfaces';
import Image from 'next/image';
import React, { useContext } from 'react';
import styles from "../styles/ProductCard.module.css";
import Button from './Button';
import ReactStars from 'react-stars';
import Link from 'next/link';
import { CartContext } from 'hooks/CartContext';
import { useRouter } from 'next/router';

type Prop  = {
    product: ProductInterface
}

const ProductCard = ({product}: Prop) => {
   const context = useContext(CartContext)
   const router = useRouter()
  return (
    <div className={` ${styles["productCard-container"]}`}>
        <div className={styles.imageContainer}>
            <img src={product.image} />
        </div>
        <div className="infoProduct">
            <Link href={`/products/${product._id}`}>
                <h1 className={styles.title}>{product.title}</h1>
            </Link>
            <div className={styles.extraInfo}>
                <span>${product.price}</span>
                <span>${product.price}</span>
                <ReactStars
                    count={5}
                    size={30}
                    color2={'#ffd700'} />
            </div>
            <p>{product.description}</p>
        </div>
        <div className={styles.actions}>
           
            <button className='btn pink-fill' type="button" onClick={() => router.push("/cart") }>Comprar ahora</button>
            <button className='btn pink-outline' type="button"  onClick={() => context?.saveProduct(product)}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ProductCard
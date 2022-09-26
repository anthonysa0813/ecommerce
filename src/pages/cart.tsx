import { CartContext } from 'hooks/CartContext';
import React, { useContext } from 'react';
import styles from "../styles/Cart.module.css";
import { ProductInterface } from '../interfaces/index';

const CartPage = () => {
    const context = useContext(CartContext);

  return (
    <main>
        <div className="wrapper">
            <div className={styles.cartContainer}>
                <h3>Carrito de Compras</h3>
                <div className={styles.cartGrid}>
                    <div className={styles.colLeft}>
                        <div className="field">
                            <h4>Productos</h4>
                        </div>
                        <div className="field">
                            <h4>Precio</h4>
                        </div>
                        <div className="field">
                            <h4>Cantidad</h4>
                        </div>
                        <div className="field">
                            Total
                        </div>
                        {
                            context?.cartGlobal.products.map((product: ProductInterface) => {
                                return (
                                        <>
                                        <div className={`${styles.field} ${styles.firstField}`}>
                                            <div className={styles.imageField}>
                                                <img src={product.image} alt={product.title} />
                                            </div>
                                            <h4>{product.title}</h4>
                                        </div>
                                        <div className={styles.field}>
                                            {product.price}
                                        </div>
                                        <div className={styles.field}>
                                            {product.cantidad}
                                        </div>
                                        <div className={styles.field}>
                                            {Number(product.price) * Number(product.cantidad)}
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="col">2</div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default CartPage
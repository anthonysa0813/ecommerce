import { CartContext } from 'hooks/CartContext';
import React, { useContext, useState } from 'react';
import styles from "../styles/Cart.module.css";
import { OptConfetti, PersonalInfoCard, ProductInterface } from '../interfaces/index';
import Input from 'components/Input';
import { ToastContainer, toast } from 'react-toastify';

import  confetti from 'canvas-confetti';




const CartPage = () => {
    const context = useContext(CartContext);
    const [error, setError] = useState(false)
    const [formValues, setFormValues] = useState<PersonalInfoCard>({
        name: "",
        lastName: "",
        email: "",
        numberCard: "",
        date: "",
        cvc: ""
    })
    const {name, lastName, email, numberCard, date, cvc} = formValues;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({...formValues, [event.target.name]: event.target.value })
    }
    const notifyError = () => toast.error("Todos los campos son obligatorios....");
    const notifySuccess = () => toast.success(`Gracias por la compra ${name}.`);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if([name, lastName, email, numberCard, date, cvc].includes("")){
            setError(true)
            notifyError();
            return;
        }
        var count = 200;
        var defaults = {
          origin: { y: 0.7 }
        };
        
        function fire(particleRatio:number, opts: OptConfetti) {
          confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
          }));
        }
        
        fire(0.25, {
          spread: 26,
          startVelocity: 55,
        });
        fire(0.2, {
          spread: 60,
        });
        fire(0.35, {
          spread: 100,
          decay: 0.91,
          scalar: 0.8
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 45,
        });
        notifySuccess();
    }


  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
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
                    <div className={`${styles.formContainer} `}>
                        <div className={styles.subTotal}>
                            <span className="title">
                                Subtotal:
                            </span>
                            <span>${context?.cartGlobal.total}</span>
                        </div>
                        <div className={styles.subTotal}>
                            <span className="title">
                                Total:
                            </span>
                            <span>${context?.cartGlobal.total}</span>
                        </div>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className="field">
                                <h5>Datos Personales</h5>
                                <div className={styles.personalInfoGrid}>
                                    <Input placeholder='Nombre'  value={name} type="text" name="name" onChange={handleChange}/>
                                    <Input placeholder='Apellido'  value={lastName} type="text" name="lastName" onChange={handleChange}/>
                                    <Input placeholder='Correo Electrónico'  value={email} type="email" name="email" onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="field">
                                <h5>Método de Pago</h5>
                                <div className={styles.personalInfoGrid}>
                                    <Input placeholder='Número de tarjeta'  value={numberCard} type="number" name="numberCard" onChange={handleChange}/>
                                    <Input placeholder='MM/AA'  value={date} type="date" name="date" onChange={handleChange}/>
                                    <Input placeholder='CVC'  value={cvc} type="number" name="cvc" onChange={handleChange}/>
                                </div>
                                <button type="submit" className='mt-1 pink-fill btn btn-full'>Pagar ahora</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default CartPage
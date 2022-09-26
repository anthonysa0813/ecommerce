import Image from 'next/image';
import React from 'react'
import styles from "../styles/Hero.module.css";
import watchImage from "../public/images/hero-watch.png"
import HeadPhones from "../public/images/hero-headphone.png"



const Hero = () => {
  return (
    <div className={`${styles.heroGrid} `}>
        <div className="wrapper">
            <div className={`${styles.heroContainer} `}>
                <div className={`${styles.offerContainer} ${styles["gradient-left"]}`}>
                    <div className={styles.text}>
                        <h1>50% de descuento 
                        en Apple Watch</h1>
                        <span>Comprar ahora</span>
                    </div>
                    <Image src={watchImage} />
                </div>
                <div className={`${styles.offerContainer} ${styles["gradient-right"]}`}>
                    <div className={styles.text}>
                        <h1>50% de descuento 
                        en Apple Watch</h1>
                        <span>Comprar ahora</span>
                    </div>
                    <Image src={HeadPhones} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
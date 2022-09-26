import { getFetch } from "helpers/useFetch";
import { CartContext } from "hooks/CartContext";
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import logo from "../public/images/logo.png"
import styles from "../styles/Navbar.module.css";


const Navbar = () => {
    const [InputValue, setInputValue] = useState("")
    const context = useContext(CartContext)
    console.log(context)
    const router = useRouter()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(!InputValue) {
            return;
        }
        router.push(`/products?q=${InputValue}`)
        
    }


  return (
    <header className={styles.header}>
        <div className="wrapper">
            <div className={`${styles.menu} `}>
                <div className={styles.navigation}>
                    <Image  src={logo} alt="logo de ecommerce"/>
                    <nav>
                        <Link href="/">
                            <a >Productos</a>
                        </Link>
                        <Link href="/">
                            <a href="">Blog</a>
                        </Link >
                        <Link href="/">
                            <a href="">Tienda</a>
                        </Link >
                        <Link href="/">
                            <a href="">Contacto</a>
                        </Link >
                        <i className="icon-carrito">
                        <span>{context?.cartGlobal.products.length}</span>
                        </i>
                    </nav>
                </div>
                <form className={`${styles.searchGrid} `} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Buscar producto" value={InputValue} onChange={(e:  ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} />
                    <button>
                        <i className="icon-search"></i>
                    </button>
                </form>
            </div>
        </div>
    </header>
  )
}

export default Navbar
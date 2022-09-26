import { CartInterface, ProductInterface } from "interfaces";
import { createContext, useState } from "react";

type PropChildren = {
    children: JSX.Element[] | JSX.Element
}

type CartGlobalProp = {
    products: ProductInterface[] | [],
    total: number
}

type PropContext = {
    cartGlobal:  CartInterface,
    saveProduct: (product: ProductInterface) => void,
    products?: ProductInterface[]
} 


export const CartContext = createContext<PropContext | null>(null)


const CartContextProvider = ({children}: PropChildren) => {
    const [cartGlobal, setCartGlobal] = useState<CartInterface>({
        products: [],
        total: 0
    })

    const saveProduct = (product: ProductInterface) => {
        const existProduct = cartGlobal.products.find(p => p._id === product._id)
        if (existProduct) {
            existProduct.cantidad = existProduct.cantidad as number  + 1 
            setCartGlobal({
                products: [ ...cartGlobal.products ],
                total: cartGlobal.total + Number(product.price)
            })
        }else {
            setCartGlobal({
                products: [ ...cartGlobal.products,  {...product, cantidad: product.cantidad ? product.cantidad + 1 : 1}],
                total: cartGlobal.total + Number(product.price)
            })
        }
    }

    return (
        <CartContext.Provider value={{cartGlobal, saveProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;

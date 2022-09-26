import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { ProductInterface } from '../interfaces/index';


interface ContextProp {
    hola?: string,
    data: ProductInterface[],
    setData: Dispatch<SetStateAction<ProductInterface[]>> ,
}

export const ProductsContext = createContext<ContextProp | null>(null)


type Prop = {
    children: JSX.Element[]
}

const ProductsContextProvider = ({children}: Prop) => {
    const [data, setData] = useState([{
        title: '',
        price: "",
        description: "",
        discount: "",
        starts: "",
        image: ""
    }])


  return (
    <ProductsContext.Provider value={{data, setData}}>
       {children} 
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider

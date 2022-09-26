import { CartContext } from 'hooks/CartContext'
import { ProductInterface } from 'interfaces'
import React, { useContext } from 'react'

type Prop = {
    type: "button"| "submit"| "reset",
    content: string,
    bg: string,
    product?: ProductInterface | null | undefined
}

const Button = ({type, content, bg, product}: Prop) => {
  const context = useContext(CartContext)

  return (
    <button className={`btn ${bg}`} type={type}>{content}</button>
  )
}

export default Button
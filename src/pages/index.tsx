import { FC, useContext, useEffect } from 'react'
import Hero from 'components/Hero'
import ProductList from 'components/ProductList'
import { ProductsContext } from 'hooks/ProductsContext'
import { ProductInterface } from 'interfaces'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

interface PropType {
  products: ProductInterface[]
}

const Home = ({products}: PropType) => {
  const context = useContext(ProductsContext)
 
  useEffect(() => {
    context?.setData(products)   
  }, [])
  

  return (
    <>
      <Hero />
      <ProductList products={products}/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch("http://localhost:3000/api/products")
  const data = await response.json()
  return {
      props: {
          products: data
      }
  }
}

export default Home

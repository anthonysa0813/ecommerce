import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from 'components/Navbar';
import ProductsContextProvider from 'hooks/ProductsContext';
import CartContextProvider from 'hooks/CartContext';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <>
        <CartContextProvider>
          <ProductsContextProvider>
              <Navbar />
              <Component {...pageProps} />  
          </ProductsContextProvider>
        </CartContextProvider>
        </>
       )
}

export default MyApp

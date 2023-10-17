import Layout from '../components/layout/layout'
import { ToastContainer } from 'react-toastify';
import './styles.scss';
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  )
}
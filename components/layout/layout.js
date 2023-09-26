import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
 
export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}
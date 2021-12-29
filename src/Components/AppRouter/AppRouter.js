import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ContainerItemDetail from '../ContainerItemDetail/ContainerItemDetail'
import HomePage from '../../pages/HomePage/HomePage';
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import ItemDetailPage from '../../pages/ItemDetailPage/ItemDetailPage';
import CartPage from '../../pages/CartPage/CartPage';
import { CartProvider } from '../../context/cartContext'





export default function AppRouter(){

    return(
    <BrowserRouter>
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path='/products/:id' element={<ItemDetailPage/>} />
            <Route path='/' element={<HomePage/>} />
            <Route path='/:category' element={<ContainerItemDetail/>} />
            <Route path='/contact' element={ <ContactUsPage/>} /> 
            <Route path='/about' element={ <AboutUsPage/>} /> 
            <Route path='*' element={ <NotFoundPage/>} />
            <Route path='/cart' element={<CartPage/>} />
          </Routes>
      </CartProvider>
        <Footer />
    </BrowserRouter>
    )
}
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ContainerItemDetail from '../ContainerItemDetail/ContainerItemDetail'
import HomePage from '../../pages/HomePage/HomePage';
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import ItemDetailPage from '../../pages/ItemDetailPage/ItemDetailPage';




export default function AppRouter(){

    return(
    <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/category/:id' element={<ItemDetailPage/>} />
            <Route path='/' element={<HomePage/>} />
            <Route path='/product' element={<ContainerItemDetail/>} />
            <Route path='/contact' element={ <ContactUsPage/>} /> 
            <Route path='/about' element={ <AboutUsPage/>} /> 
            <Route path='*' element={ <NotFoundPage/>} /> 
          </Routes>
        <Footer />
    </BrowserRouter>
    )
}
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ContainerItemDetail from '../ContainerItemDetail/ContainerItemDetail'
import HomePage from '../../pages/HomePage/HomePage';
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'


export default function AppRouter(){

    return(
    <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/product' element={<ContainerItemDetail/>} />
            <Route path='/contact' element={ <ContactUsPage/>} /> 
            <Route path='#' element={ <NotFoundPage/>} /> 
          </Routes>
        <Footer />
    </BrowserRouter>
    )
}
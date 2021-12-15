import React from 'react'
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ListItems from './Components/ListItems/ListItems';
import Product from './Components/Product/Product'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ListItems/>
      <Footer />
    </div>
    
  );
}

export default App;

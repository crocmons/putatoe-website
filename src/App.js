import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Feed from './components/Feed';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';
import ProductFeed from './components/ProductFeed';
import Service from './components/Service';

function App() {
  return (

    <div className="App">
      <Header />
      <main className="max-w-screen-2xl mx-auto">
      <Banner />
      <Feed />
      <Product />
      <ProductFeed />
      <Service />
      <Footer />
      </main>
    </div>
  );
}

export default App;

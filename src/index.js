import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Wishlist from './pages/Wishlist';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="catalog" element={<Catalog />}/>
          <Route path="wishlist" element={<Wishlist />}/>
          <Route path="reviews" element={<Reviews />}/>
          <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
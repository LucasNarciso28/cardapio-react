import React from 'react';
import logo from "../asssets/icone-de-bebida.webp"

const Header = ({ cartCount }) => {
  return (
    <header>
      <h1>Oásis Restaurante</h1>
      <div className="cart-info">
        🛒 <span id="cart-count">{cartCount}</span> Itens
      </div>
      <img 
        src= {logo}
        alt="logo da empresa, uma taça de vinho com uma bebida alcoólica" 
      />
    </header>
  );
};

export default Header;
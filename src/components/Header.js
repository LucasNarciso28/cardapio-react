import React from 'react';

const Header = ({ cartCount }) => {
  return (
    <header>
      <h1>Oásis Restaurante</h1>
      <div className="cart-info">
        🛒 <span id="cart-count">{cartCount}</span> Itens
      </div>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/2209/2209792.png" 
        alt="logo da empresa, uma gota de água" 
      />
    </header>
  );
};

export default Header;
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
        width="60" // Defina uma largura explícita (ajuste o valor)
        height="60" // Defina uma altura explícita (ajuste o valor para manter o aspect ratio)
        loading="eager" // Logos no header geralmente são LCP, então carregue avidamente
        fetchpriority="high" // Dê prioridade alta
      />
    </header>
  );
};

export default Header;
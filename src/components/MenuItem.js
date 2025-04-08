import React, { useState } from 'react';

const MenuItem = ({ item, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    onAddToCart(item.id);
    
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <article className="prato" tabIndex="0">
      <img 
        src={item.imagem} 
        alt={item.nome} 
        width="150" 
        height="150" 
      />
      <div className="item-details">
        <h2>{item.nome}</h2>
        {item.info && <h3 className="info"><em>{item.info}</em></h3>}
        <p className="descricao">{item.descricao}</p>
        <p className="preco">{item.preco}</p>
        <button 
          className="add-to-cart-btn" 
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? 'Adicionado!' : 'Adicionar'}
        </button>
      </div>
    </article>
  );
};

export default MenuItem;
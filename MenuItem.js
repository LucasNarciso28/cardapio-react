import React, { useState } from 'react';

const MenuItem = ({ item, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  // Determina a intensidade alcoólica com base nas tags
  const getAlcoholIntensity = () => {
    if (item.tags.includes('alcoolica')) {
      if (item.tags.includes('forte')) return 100;
      if (item.tags.includes('media')) return 66;
      return 33;
    }
    return 0;
  };

  const alcoholIntensity = getAlcoholIntensity();

  const handleAddToCart = () => {
    setIsAdded(true);
    onAddToCart(item.id);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <article className="prato" tabIndex="0">
      <img src={item.imagem} alt={item.nome} />
      <div className="item-details">
        <h2>{item.nome}</h2>
        {item.info && <p className="info">{item.info}</p>}
        
        {alcoholIntensity > 0 && (
          <div className="alcohol-intensity" style={{
            width: `${alcoholIntensity}%`,
            background: `linear-gradient(90deg, #ff6e40, #1e3d59)`
          }} />
        )}
        
        <p className="descricao">{item.descricao}</p>
        <p className="preco">{item.preco}</p>
        <button 
          className="add-to-cart-btn" 
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? '✓ Adicionado' : '+ Adicionar'}
        </button>
      </div>
    </article>
  );
};

export default MenuItem;
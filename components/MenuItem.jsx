import React, { useState } from 'react';

const MenuItem = ({ item, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    onAddToCart(item.id);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <article className="prato" tabIndex="0">
      <img
        src={item.imagem}
        alt={item.altImagem || item.nome}
        loading="lazy"
      />
      <div className="item-details">
        <h2>{item.nome}</h2>
        {item.info && <p className="info">{item.info}</p>}
        <p className="descricao">{item.descricao}</p>

        <div className="price-container">
          {item.preco && <p className="preco">{item.preco}</p>}
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={isAdded}
          >
            {isAdded ? '✓ Adicionado' : '+ Adicionar'}
          </button>
        </div>
      </div>
    </article>
  );
};

export default MenuItem;
// src/App.jsx
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { menuData } from './data';
import Header from './components/Header';
import Nav from './components/Nav';
import MenuItem from './components/MenuItem';
import './App.css';

const FilterControls = lazy(() => import('./components/FilterControls'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);
  const [uniqueItems, setUniqueItems] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const nomesUnicos = new Set();
    const unique = menuData.filter(item => {
      if (!nomesUnicos.has(item.nome)) {
        nomesUnicos.add(item.nome);
        return true;
      }
      return false;
    });
    setUniqueItems(unique);
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredItems(uniqueItems);
    } else {
      const filtered = uniqueItems.filter(item => 
        item.tags && item.tags.includes(activeFilter)
      );
      setFilteredItems(filtered);
    }
  }, [activeFilter, uniqueItems]);

  const handleAddToCart = (itemId) => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <Nav />
      
      <main>
        <button 
          className="filter-toggle-btn"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
        </button>
    
        {showFilters && (
          <Suspense fallback={<div>Carregando filtros...</div>}>
            <FilterControls 
              activeFilter={activeFilter} 
              onFilterChange={setActiveFilter} //Foi colocado o lazy loading dentro do menu, isto pois o menu agora é oculto.
            />
          </Suspense>
        )}
        {<section id="cardapio-container" aria-live="polite">
          {filteredItems.length === 0 ? (
            <p>Nenhum item encontrado para esta categoria.</p>
          ) : (
            filteredItems.map(item => (
              <MenuItem 
                key={item.id} 
                item={item} 
                onAddToCart={handleAddToCart} 
              />
            ))
          )}
        </section>}
      </main>
      
      <Suspense fallback={<div>Carregando...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
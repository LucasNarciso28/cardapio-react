// src/components/FilterControls.jsx
import React from 'react';

const FilterControls = ({ activeFilter, onFilterChange }) => {
  const filterOptions = [
    { value: 'all', label: 'Todos' },
    { value: 'nao-alcoolica', label: 'Não Alcoólicas' },
    { value: 'alcoolica', label: 'Alcoólicas' },
    { value: 'sem-lactose', label: 'Sem Lactose' },
    { value: 'sem-gluten', label: 'Sem Glúten' }
  ];

  return (
    <section id="filter-controls" aria-labelledby="filter-label">
      <h2 id="filter-label" className="visually-hidden">Filtrar por categoria</h2>
      {filterOptions.map(filter => (
        <button
          key={filter.value}
          className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.value)}
          data-filter={filter.value}
        >
          {filter.label}
        </button>
      ))}
    </section>
  );
};

export default FilterControls; // Exportação correta do componente
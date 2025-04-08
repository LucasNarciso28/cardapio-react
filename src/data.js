// src/data.js
export const menuData = [
    { 
      id: "agua-01", 
      nome: "Água gelada", 
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCcrQiAJUipgE7yo5z9mmJre0EcLv-cYaWw&s", 
      descricao: "Água fresquinha...", 
      preco: "R$9.99", 
      info: "LIVRE DE LACTOSE.", 
      tags: ["bebida", "sem-lactose"] 
    },
    { 
      id: "batata-01", 
      nome: "Batata Frita", 
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJYRilamYNqM8OKYjvvtUK4uNC1g2fGfXyw&s", 
      descricao: "Porção generosa...", 
      preco: "R$15.00", 
      tags: ["acompanhamento", "vegetariano"] 
    },
    { 
      id: "burger-01", 
      nome: "Hambúrguer Clássico", 
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyG4HkWXNbsy5FPJyDd8yuoQgpE-Msusu3wQ&s", 
      descricao: "Pão brioche, carne...", 
      preco: "R$25.50", 
      tags: ["principal", "carne"] 
    },
    { 
      id: "agua-02", 
      nome: "Água gelada", 
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCcrQiAJUipgE7yo5z9mmJre0EcLv-cYaWw&s", 
      descricao: "Versão premium.", 
      preco: "R$10.99", 
      info: "LIVRE DE LACTOSE.", 
      tags: ["bebida", "sem-lactose"] 
    }
  ];
  
  export const filterOptions = [
    { value: 'all', label: 'Todos' },
    { value: 'bebida', label: 'Bebidas' },
    { value: 'acompanhamento', label: 'Acompanhamentos' },
    { value: 'principal', label: 'Principais' },
    { value: 'vegetariano', label: 'Vegetarianos' },
    { value: 'sem-lactose', label: 'Sem Lactose' }
  ];
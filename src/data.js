// src/data.js
export const menuData = [
  {
    id: "agua-01",
    nome: "Água gelada",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCcrQiAJUipgE7yo5z9mmJre0EcLv-cYaWw&s",
    descricao: "Água fresquinha com óleos refrescantes",
    preco: "Se comprar bebida, por conta da casa",
    info: "LIVRE DE LACTOSE.",
    tags: ["bebida"]
  },
  {
    id: "camarao-01",
    nome: "Camarão com molho",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJYRilamYNqM8OKYjvvtUK4uNC1g2fGfXyw&s",
    descricao: "Porção generosa de camarões frescos com acompanhamentos",
    preco: "R25.00",
    tags: ["acompanhamento", "carne"]
  },
  {
    id: "bahama_mama",
    nome: "Bahama Mama",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLlcGVhgOohBmgXLzh1wUTXx6yKi49oIicg&s",
    descricao: "rum escuro, rum 151 proof, licor de café, licor de coco, suco de limão fresco",
    preco: "R$25.50",
    tags: ["principal", "carne"]
  },
  {
    id: "scorpion",
    nome: "Scorpion",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfllMzG-vhrCOyWgLyjdSqWh4Kvekn8iTXxQ&s",
    descricao: "Rum, conhaque, suco de limão, xarope de amêndoa e brandy de pêssego.",
    preco: "R$8.99",
    info: "LIVRE DE LACTOSE.",
    tags: ["bebida", "sem-lactose"]
  },
  {
    id: "blue_hawaiian",
    nome: "Tropical Blue Hawaiian Cocktail",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPgvDpJFTwAN4xW8Ip5OOWiOz7cZ9C24WjQ&s",
    descricao: "Rum de Coco, Licor Blue Curaçao, Suco de Abacaxi, Gelo",
    preco: "R$10.50",
    info: "CONTÊM COCO.",
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
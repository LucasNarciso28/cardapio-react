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
  },
  {
    id: "mojito",
    nome: "Mojito",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjsNsiZ6OM3omeDgPPKDJqzUUiW-7PBMt2A&s",
    descricao: "Rum branco, hortelã, limão, açúcar e água com gás.",
    preco: "R$12.50",
    info: "LIVRE DE GLÚTEN.",
    tags: ["bebida", "sem-gluten", "alcoólica"]
  },
  {
    id: "caipirinha",
    nome: "Caipirinha",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrCcayWAKBzWc3Fb8PpORGkkWXzzV0vEwxw&s",
    descricao: "Cachaça, limão, açúcar e gelo.",
    preco: "R$10.00",
    info: "LIVRE DE LACTOSE.",
    tags: ["bebida", "sem-lactose", "alcoólica"]
  },
  {
    id: "pina-colada",
    nome: "Piña Colada",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4HYOJ0eUxcLLfghT7RVZB8DWQ5rYji9S_g&s",
    descricao: "Rum, leite de coco, suco de abacaxi e gelo.",
    preco: "R$14.99",
    info: "CONTÉM LACTOSE.",
    tags: ["bebida", "alcoólica", "tropical"]
  },
  {
    id: "margarita",
    nome: "Margarita",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBZAVwyFCYHAMABkp5KsTGXyAyXNxBIVubg&s",
    descricao: "Tequila, triple sec, suco de limão e sal na borda.",
    preco: "R$13.50",
    info: "LIVRE DE LACTOSE.",
    tags: ["bebida", "sem-lactose", "alcoólica"]
  },
  {
    id: "cosmopolitan",
    nome: "Cosmopolitan",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmGFjCSgAB9cIDb5zjgOMsz4_yGBXsxxoLA&s",
    descricao: "Vodka, triple sec, suco de cranberry e suco de limão.",
    preco: "R$15.00",
    info: "LIVRE DE LACTOSE.",
    tags: ["bebida", "sem-lactose", "alcoólica"]
  },
  {
    id: "suco-verde",
    nome: "Suco Verde Detox",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-08wB0yaD-mougMAI7Ec_8-6UICuvGdcANA&s",
    descricao: "Couve, abacaxi, gengibre, hortelã e água de coco.",
    preco: "R$7.50",
    info: "VEGANO E SEM LACTOSE.",
    tags: ["bebida", "saudável", "não-alcoólica"]
  },
  {
    id: "refrigerante-cola",
    nome: "Refrigerante de Cola",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacuUIKVVAMfCgNxJ7Nr2jaWCu8IBDglo0uQ&s",
    descricao: "Refrigerante sabor cola, gelado e com gás.",
    preco: "R$5.00",
    info: "LIVRE DE LACTOSE.",
    tags: ["bebida", "refrigerante", "não-alcoólica"]
  },
  {
    id: "agua-coco",
    nome: "Água de Coco Natural",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTPKchhDTSao8JXNIaKikZfbL6Ocl1q9mKA&s",
    descricao: "Água de coco fresca, servida gelada.",
    preco: "R$6.00",
    info: "NATURAL E SEM ADIÇÃO DE AÇÚCAR.",
    tags: ["bebida", "natural", "não-alcoólica"]
  },
  {
    id: "cerveja",
    nome: "Cerveja",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCaT-mFt0v0gnd18DXZG8s1aDjbptbJwbkg&s",
    descricao: "Cerveja leve e refrescante, estilo pilsen.",
    preco: "R$9.00",
    info: "CONTÉM GLÚTEN.",
    tags: ["bebida", "cerveja", "alcoólica"]
  },
  {
    id: "vinho-tinto",
    nome: "Vinho Tinto Seco",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XSApkDo4tRKlYOUdggrK9zqNd9hIGkmlzA&s",
    descricao: "Vinho tinto seco, harmoniza com carnes e queijos.",
    preco: "R$35.00",
    info: "LIVRE DE LACTOSE.",
    tags: ["bebida", "vinho", "alcoólica"]
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
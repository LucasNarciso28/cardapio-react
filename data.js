// src/data.js
import agua from '../src/asssets/agua.jpg'
import bahama_mama from '../src/asssets/bahama_mama.jpg'
import scorpion from '../src/asssets/scorpion.jpg'
import blue_hawaian from '../src/asssets/blue_hawaian.jpg'
import caipirinha from '../src/asssets/caipirinha.jpg'
import cosmopolitan from '../src/asssets/cosmopolitan.jpg'
import vinho from '../src/asssets/vinho_tinto.jpg'
import pina_colada from '../src/asssets/pina_colada.jpg'
import margarita from '../src/asssets/margarita.jpg'
import refri from '../src/asssets/refri.jpg'
import cerveja from '../src/asssets/cerveja.jpg'
import agua_coco from '../src/asssets/aguadecoco.jpg'
import suco_detox from '../src/asssets/detox.jpg'
import mojito from '../src/asssets/mojito.jpg'
//import  from '../src/asssets'


export const menuData = [
  {
    id: "agua-01",
    nome: "Água gelada",
    imagem: agua,
    altImagem: "Copo com água gelada e gelo",
    descricao: "Água fresquinha com óleos refrescantes",
    preco: "Se comprar bebida, por conta da casa",
    info: "LIVRE DE LACTOSE.",
    tags: ["nao-alcoolica"]
  },
  {
    id: "bahama_mama",
    nome: "Bahama Mama",
    imagem: bahama_mama,
    altImagem: "Coquetel Bahama Mama em um copo alto decorado",
    descricao: "rum escuro, rum 151 proof, licor de café, licor de coco, suco de limão fresco",
    preco: "R$25.50",
    tags: ["alcoolica", "carne"]
  },
  {
    id: "scorpion",
    nome: "Scorpion",
    imagem: scorpion,
    altImagem: "Coquetel Scorpion em uma taça com gelo",
    descricao: "Rum, Cognac Martell VSOP, suco de limão, xarope de amêndoa,brandy de pêssego",
    preco: "R$8.99",
    info: "LIVRE DE LACTOSE.",
    tags: ["alcoolica", "sem-lactose"]
  },
  {
    id: "blue_hawaiian",
    nome: "Tropical Blue Hawaiian Cocktail",
    imagem: blue_hawaian,
    altImagem: "Coquetel Blue Hawaiian azul vibrante com decoração tropical",
    descricao: "Rum de Coco, Licor Blue Curaçao, Suco de Abacaxi, Gelo",
    preco: "R$10.50",
    info: "CONTÊM COCO.",
    tags: ["alcoolica", "sem-lactose"]
  },
  {
    id: "mojito",
    nome: "Mojito",
    imagem: mojito,
    altImagem: "Coquetel Mojito refrescante com hortelã e limão",
    descricao: "Rum branco, hortelã, limão, açúcar e água com gás.",
    preco: "R$12.50",
    info: "LIVRE DE GLÚTEN.",
    tags: ["alcoolica", "sem-gluten", "alcoólica"]
  },
  {
    id: "caipirinha",
    nome: "Caipirinha",
    imagem: caipirinha,
    altImagem: "Caipirinha tradicional brasileira com limão e cachaça",
    descricao: "Cachaça, limão, açúcar e gelo.",
    preco: "R$10.00",
    info: "LIVRE DE LACTOSE.",
    tags: ["alcoolica", "sem-lactose", "alcoólica"]
  },
  {
    id: "pina-colada",
    nome: "Piña Colada",
    imagem: pina_colada,
    altImagem: "Coquetel Piña Colada cremoso com coco e abacaxi",
    descricao: "Rum, leite de coco, suco de abacaxi e gelo.",
    preco: "R$14.99",
    info: "CONTÉM LACTOSE.",
    tags: ["alcoolica", "alcoólica", "tropical"]
  },
  {
    id: "margarita",
    nome: "Margarita",
    imagem: margarita,
    altImagem: "Coquetel Margarita clássico com borda de sal",
    descricao: "Tequila, triple sec, suco de limão e sal na borda.",
    preco: "R$13.50",
    info: "LIVRE DE LACTOSE.",
    tags: ["alcoolica", "sem-lactose", "alcoólica"]
  },
  {
    id: "cosmopolitan",
    nome: "Cosmopolitan",
    imagem: cosmopolitan,
    altImagem: "Coquetel Cosmopolitan elegante de cor rosa",
    descricao: "Vodka, triple sec, suco de cranberry e suco de limão.",
    preco: "R$15.00",
    info: "LIVRE DE LACTOSE.",
    tags: ["alcoolica", "sem-lactose", "alcoólica"]
  },
  {
    id: "suco-verde",
    nome: "Suco Verde Detox",
    imagem: suco_detox,
    altImagem: "Copo de suco verde detox saudável com ingredientes frescos",
    descricao: "Couve, abacaxi, gengibre, hortelã e água de coco.",
    preco: "R$7.50",
    info: "VEGANO E SEM LACTOSE.",
    tags: ["nao-alcoolica", "saudável", "não-alcoólica"]
  },
  {
    id: "refrigerante-cola",
    nome: "Refrigerante de Cola",
    imagem: refri,
    altImagem: "Copo de refrigerante de cola com gelo",
    descricao: "Refrigerante sabor cola, gelado e com gás.",
    preco: "R$5.00",
    info: "LIVRE DE LACTOSE.",
    tags: ["nao-alcoolica", "refrigerante", "não-alcoólica"]
  },
  {
    id: "agua-coco",
    nome: "Água de Coco Natural",
    imagem: agua_coco,
    altImagem: "Coco verde aberto com água de coco natural",
    descricao: "Água de coco fresca, servida gelada.",
    preco: "R$6.00",
    info: "NATURAL E SEM ADIÇÃO DE AÇÚCAR.",
    tags: ["nao-alcoolica", "natural", "não-alcoólica"]
  },
  {
    id: "cerveja",
    nome: "Cerveja",
    imagem: cerveja,
    altImagem: "Copo de cerveja pilsen gelada",
    descricao: "Cerveja leve e refrescante, estilo pilsen.",
    preco: "R$9.00",
    info: "CONTÉM GLÚTEN.",
    tags: ["alcoolica", "cerveja", "alcoólica"]
  },
  {
    id: "vinho-tinto",
    nome: "Vinho Tinto Seco",
    imagem: vinho,
    altImagem: "Taça de vinho tinto seco",
    descricao: "Vinho tinto seco, harmoniza com carnes e queijos.",
    preco: "R$35.00",
    info: "LIVRE DE LACTOSE.",
    tags: ["alcoolica", "vinho", "alcoólica"]
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
import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Users, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

type Tempero = {
  id: string
  nome: string
  emoji: string
  descricao: string
  ingredientes: string[]
  preparo: string[]
  dicas: string[]
  conservacao: string
  tempo: string
  rendimento: string
  validade: string
  uso: string
  imagem: string
}

const temperos: Record<string, Tempero> = {
  "tempero-completo": {
    id: "tempero-completo",
    nome: "Tempero Completo",
    emoji: "🌿",
    descricao: "Um tempero versátil perfeito para qualquer tipo de carne e preparação",
    imagem: "/tempero-caseiro-potes-ervas-especiarias.jpg",
    tempo: "10 minutos",
    rendimento: "1 kg",
    validade: "6 meses",
    uso: "Carnes, arroz, feijão, molhos",
    ingredientes: [
      "500g de sal refinado",
      "2 colheres de sopa de páprica doce",
      "2 colheres de sopa de cebola em pó",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de pimenta do reino",
      "1 colher de sopa de cominho em pó",
      "1 colher de chá de colorau",
    ],
    preparo: [
      "Em um recipiente grande, misture todos os ingredientes secos",
      "Mexa bem até obter uma mistura uniforme",
      "Passe por uma peneira fina para evitar grumos",
      "Armazene em pote bem vedado",
    ],
    dicas: [
      "Use 1 colher de chá para cada 500g de carne",
      "Pode ser usado em carnes, arroz, feijão e molhos",
      "Deixe a carne temperar por pelo menos 30 minutos",
      "Perfeito para quem vende marmitas",
    ],
    conservacao: "Mantém-se fresco por até 6 meses em local seco e protegido da luz",
  },
  "tempero-carnes": {
    id: "tempero-carnes",
    nome: "Tempero para Carnes",
    emoji: "🥩",
    descricao: "Especialmente desenvolvido para realçar o sabor de carnes vermelhas",
    imagem: "/carne-vermelha-temperada-especiarias-churrasco.jpg",
    tempo: "10 minutos",
    rendimento: "800g",
    validade: "6 meses",
    uso: "Carnes vermelhas, churrasco, bife",
    ingredientes: [
      "300g de sal refinado",
      "3 colheres de sopa de alho em pó",
      "2 colheres de sopa de cebola em pó",
      "2 colheres de sopa de pimenta do reino moída",
      "1 colher de sopa de páprica defumada",
      "1 colher de sopa de mostarda em pó",
      "1 colher de chá de alecrim desidratado",
    ],
    preparo: [
      "Misture todos os ingredientes em um bowl",
      "Triture levemente o alecrim se estiver em folhas grandes",
      "Homogeneíze bem toda a mistura",
      "Guarde em recipiente hermético",
    ],
    dicas: [
      "Ideal para churrasco, bife e assados",
      "Use generosamente antes de grelhar",
      "Combina perfeitamente com azeite para marinada",
      "Deixa uma crosta saborosa na carne",
    ],
    conservacao: "Validade de 6 meses em local fresco e ao abrigo da luz",
  },
  "tempero-frango": {
    id: "tempero-frango",
    nome: "Tempero para Frango",
    emoji: "🍗",
    descricao: "A combinação perfeita para deixar o frango suculento e saboroso",
    imagem: "/frango-dourado-assado-tempero-ervas.jpg",
    tempo: "10 minutos",
    rendimento: "900g",
    validade: "6 meses",
    uso: "Frango assado, grelhado, frito",
    ingredientes: [
      "400g de sal refinado",
      "3 colheres de sopa de açafrão-da-terra",
      "2 colheres de sopa de alho em pó",
      "2 colheres de sopa de cebola em pó",
      "1 colher de sopa de páprica doce",
      "1 colher de sopa de tomilho seco",
      "1 colher de chá de pimenta branca",
    ],
    preparo: [
      "Combine todos os ingredientes em um recipiente",
      "Misture bem até ficar uniforme",
      "Se necessário, passe por peneira",
      "Armazene em pote escuro de vidro",
    ],
    dicas: [
      "Perfeito para frango assado, grelhado ou frito",
      "Use 2 colheres de chá por kg de frango",
      "Fica ainda melhor se deixar marinar overnight",
      "Ideal para vendas de frango assado",
    ],
    conservacao: "Conserva por até 6 meses longe da umidade",
  },
  "tempero-verde": {
    id: "tempero-verde",
    nome: "Tempero Verde",
    emoji: "🌱",
    descricao: "Frescor e aroma em um único tempero, perfeito para finalização",
    imagem: "/salsinha-cebolinha-coentro-tempero-verde-fresco.jpg",
    tempo: "5 minutos",
    rendimento: "300ml",
    validade: "3 meses",
    uso: "Finalização de pratos, sopas, carnes",
    ingredientes: [
      "1 maço grande de salsinha",
      "1 maço grande de cebolinha",
      "1 maço de coentro (opcional)",
      "1/2 xícara de azeite",
      "1 colher de sopa de sal",
      "Suco de 1 limão",
    ],
    preparo: [
      "Lave bem todas as ervas e seque completamente",
      "Pique finamente ou bata no processador",
      "Misture com o azeite, sal e limão",
      "Coloque em potinhos ou forminhas de gelo",
    ],
    dicas: [
      "Congele em porções individuais",
      "Use direto do congelador em preparos quentes",
      "Dá frescor a sopas, carnes e feijões",
      "Pode adicionar alho picado para mais sabor",
    ],
    conservacao: "Dura até 3 meses no congelador",
  },
  "tempero-arroz-feijao": {
    id: "tempero-arroz-feijao",
    nome: "Tempero para Arroz e Feijão",
    emoji: "🍚",
    descricao: "Perfeito para deixar o arroz e feijão mais saborosos e aromáticos",
    imagem: "/arroz-feijao-prato-brasileiro-comida-caseira.jpg",
    tempo: "10 minutos",
    rendimento: "700g",
    validade: "6 meses",
    uso: "Arroz, feijão, legumes",
    ingredientes: [
      "250g de sal refinado",
      "3 colheres de sopa de alho em pó",
      "2 colheres de sopa de cebola em pó",
      "1 colher de sopa de cominho em pó",
      "1 colher de sopa de páprica doce",
      "1 colher de chá de colorau",
      "1/2 colher de chá de pimenta do reino",
    ],
    preparo: [
      "Coloque o sal em um recipiente",
      "Adicione o alho em pó e cebola em pó",
      "Misture bem até ficar uniforme",
      "Adicione os demais temperos e homogeneíze",
      "Passe por peneira fina se necessário",
      "Armazene em pote bem vedado",
    ],
    dicas: [
      "Use 1 colher de sopa para cada 2 xícaras de arroz/feijão",
      "Tempere quando o arroz estiver no ponto de água",
      "Também funciona ótimo em legumes cozidos",
      "Vendedores de marmita adoram este tempero",
    ],
    conservacao: "Mantém-se fresco por até 6 meses em local seco",
  },
  "tempero-peixe": {
    id: "tempero-peixe",
    nome: "Tempero para Peixe",
    emoji: "🐟",
    descricao: "Realça o sabor natural do peixe sem sobrepor",
    imagem: "/peixe-grelhado-limao-ervas-tempero-fresco.jpg",
    tempo: "5 minutos",
    rendimento: "400g",
    validade: "6 meses",
    uso: "Peixes, frutos do mar",
    ingredientes: [
      "200g de sal refinado",
      "2 colheres de sopa de alho em pó",
      "2 colheres de sopa de cebola em pó",
      "1 colher de sopa de salsinha desidratada",
      "1 colher de sopa de orégano",
      "1 colher de chá de pimenta branca",
      "Curry suave a gosto",
    ],
    preparo: [
      "Misture todos os ingredientes secos em um bowl",
      "Homogeneíze bem",
      "Passe por peneira se necessário",
      "Armazene em recipiente bem fechado",
    ],
    dicas: [
      "Use 1 colher de chá para cada peixe pequeno",
      "Ótimo para receitas congeladas",
      "Marinar 20 minutos antes de cozinhar",
      "Combine com limão fresco para potencializar",
    ],
    conservacao: "6 meses em local fresco e seco",
  },
  "tempero-pizza": {
    id: "tempero-pizza",
    nome: "Tempero para Pizza",
    emoji: "🍕",
    descricao: "Aquela combinação clássica italiana perfeita",
    imagem: "/pizza-italiana-oregano-manjericao-tomate-queijo.jpg",
    tempo: "5 minutos",
    rendimento: "200g",
    validade: "6 meses",
    uso: "Pizza, massa, pão de alho",
    ingredientes: [
      "3 colheres de sopa de orégano seco",
      "3 colheres de sopa de manjericão seco",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de sal",
      "1 colher de sopa de pimenta do reino",
      "1 colher de sopa de açúcar",
    ],
    preparo: [
      "Misture todos os ingredientes",
      "Se as ervas estiverem muito inteiras, triture um pouco",
      "Homogeneíze bem",
      "Armazene em pote de vidro",
    ],
    dicas: [
      "Use 1 colher de chá para cada 2 pizzas grandes",
      "Adicione 2 colheres de sopa em 500ml de azeite para pão",
      "Ótimo também para molhos de tomate",
      "Os clientes adoram para pizza caseira",
    ],
    conservacao: "6 meses protegido da luz",
  },
  "tempero-mexican": {
    id: "tempero-mexican",
    nome: "Tempero à Mexicana",
    emoji: "🌶️",
    descricao: "Traz aquele toque autêntico mexicano para qualquer prato",
    imagem: "/comida-mexicana-tacos-pimenta-especiarias-colorido.jpg",
    tempo: "10 minutos",
    rendimento: "500g",
    validade: "6 meses",
    uso: "Tacos, quesadillas, carnes mexicanas",
    ingredientes: [
      "3 colheres de sopa de pimenta vermelha em pó",
      "2 colheres de sopa de cominho",
      "2 colheres de sopa de paprika",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de cebola em pó",
      "1 colher de sopa de sal",
      "1 colher de chá de orégano",
    ],
    preparo: [
      "Coloque todos os ingredientes em um recipiente",
      "Misture bem até ficar uniforme",
      "Passe por peneira para evitar grumos",
      "Armazene em pote bem vedado",
    ],
    dicas: [
      "Use 2 colheres de sopa por kg de carne",
      "Perfeito para tacos e quesadillas",
      "Também funciona bem em feijão",
      "Clientes modernos adoram esta opção",
    ],
    conservacao: "6 meses em recipiente bem fechado",
  },
  "tempero-oriental": {
    id: "tempero-oriental",
    nome: "Tempero Oriental",
    emoji: "🥢",
    descricao: "Sabores da culinária asiática em uma mistura prática",
    imagem: "/comida-asiatica-oriental-gengibre-gergelim.jpg",
    tempo: "10 minutos",
    rendimento: "400g",
    validade: "6 meses",
    uso: "Arroz na panela, frango, vegetais",
    ingredientes: [
      "2 colheres de sopa de gengibre em pó",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de sementes de gergelim moído",
      "1 colher de sopa de sal",
      "1 colher de chá de pimenta branca",
      "1 colher de chá de açúcar mascavo",
    ],
    preparo: [
      "Misture todos os ingredientes",
      "Se houver gengibre em pó muito úmido, deixe secar um pouco",
      "Homogeneíze bem",
      "Coloque em pote de vidro",
    ],
    dicas: [
      "Use 1 colher de sopa para cada 2 xícaras de arroz",
      "Combina com soja e vinagre",
      "Ótimo para frango refogado",
      "Marque como especial premium",
    ],
    conservacao: "6 meses em local seco",
  },
  "tempero-assados": {
    id: "tempero-assados",
    nome: "Tempero para Assados",
    emoji: "🍖",
    descricao: "A mistura perfeita para realçar o sabor de qualquer assado",
    imagem: "/carne-assada-forno-dourada-especiarias-rustico.jpg",
    tempo: "10 minutos",
    rendimento: "900g",
    validade: "8 meses",
    uso: "Assados, carnes no forno, costelas",
    ingredientes: [
      "400g de sal refinado",
      "3 colheres de sopa de alho em pó",
      "2 colheres de sopa de cebola em pó",
      "2 colheres de sopa de páprica defumada",
      "1 colher de sopa de mostarda em pó",
      "1 colher de sopa de alecrim desidratado",
      "1 colher de chá de gengibre em pó",
    ],
    preparo: [
      "Combine todos os ingredientes em um bowl grande",
      "Misture muito bem",
      "Se o alecrim estiver em folhas grandes, triture um pouco",
      "Armazene em pote bem fechado",
    ],
    dicas: [
      "Esfregue bem na carne antes de assar",
      "Deixe repousar 1 hora antes de cozinhar",
      "Combina com azeite para melhor penetração",
      "Vende muito para quem assa grandes quantidades",
    ],
    conservacao: "8 meses em local fresco e seco",
  },
  "tempero-caldo": {
    id: "tempero-caldo",
    nome: "Tempero para Caldo",
    emoji: "🍲",
    descricao: "Dá sabor profundo e complexo aos caldos caseiros",
    imagem: "/caldo-sopa-quente-vapor-legumes-caseiro.jpg",
    tempo: "5 minutos",
    rendimento: "500g",
    validade: "1 ano",
    uso: "Caldos, sopas, consomês",
    ingredientes: [
      "250g de sal refinado",
      "3 colheres de sopa de alho em pó",
      "2 colheres de sopa de cebola em pó",
      "1 colher de sopa de cenoura desidratada moída",
      "1 colher de sopa de salsa desidratada",
      "1 colher de chá de pimenta do reino",
    ],
    preparo: [
      "Misture o sal com todos os pós",
      "Se as ervas estiverem muito grosseiras, triture",
      "Homogeneíze muito bem",
      "Coloque em pote de vidro bem vedado",
    ],
    dicas: [
      "Use 1 colher de sopa para cada 2 litros de água",
      "Adicione logo no início do caldo",
      "Perfeito para caldos de carne ou frango",
      "Vendedores de sopa adoram este tempero",
    ],
    conservacao: "1 ano em recipiente bem fechado",
  },
  "tempero-molho": {
    id: "tempero-molho",
    nome: "Tempero para Molho de Tomate",
    emoji: "🍅",
    descricao: "Aperfeiçoa qualquer molho de tomate caseiro",
    imagem: "/molho-tomate-manjericao-italiano-panela-caseiro.jpg",
    tempo: "5 minutos",
    rendimento: "300g",
    validade: "1 ano",
    uso: "Molho de tomate, pasta, pizzas",
    ingredientes: [
      "2 colheres de sopa de orégano seco",
      "2 colheres de sopa de manjericão seco",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de sal",
      "1 colher de sopa de açúcar",
      "1 colher de chá de pimenta do reino",
    ],
    preparo: [
      "Misture todos os ingredientes",
      "Se as ervas forem muito inteiras, use peneira ou processador",
      "Homogeneíze bem",
      "Armazene em pote pequeno de vidro",
    ],
    dicas: [
      "Use 1 colher de sopa para cada 1kg de tomate",
      "Adicione no início do cozimento",
      "Combina com um fio de azeite",
      "Vende bem para quem faz molho em casa",
    ],
    conservacao: "1 ano em local seco",
  },
  "tempero-legumes": {
    id: "tempero-legumes",
    nome: "Tempero para Legumes",
    emoji: "🥦",
    descricao: "Realça o sabor natural dos legumes sem sobrepor",
    imagem: "/legumes-coloridos-salteados-tempero-ervas-frescos.jpg",
    tempo: "5 minutos",
    rendimento: "400g",
    validade: "8 meses",
    uso: "Legumes refogados, cenoura, abóbora",
    ingredientes: [
      "200g de sal refinado",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de cebola em pó",
      "1 colher de sopa de salsa desidratada",
      "1 colher de sopa de tomilho seco",
      "1 colher de chá de pimenta branca",
    ],
    preparo: [
      "Misture o sal com os pós",
      "Adicione as ervas desidratadas",
      "Homogeneíze bem",
      "Se necessário, triture até textura uniforme",
      "Armazene em recipiente bem fechado",
    ],
    dicas: [
      "Use 1 colher de chá para cada 500g de legumes",
      "Perfeito para refogados e assados de legumes",
      "Também funciona em sopas cremosas",
      "Ótimo para vendedoras de comida vegetariana",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-costela": {
    id: "tempero-costela",
    nome: "Tempero para Costela",
    emoji: "🥓",
    descricao: "Especialidade para costelas suculentas e saborosas",
    imagem: "/costela-suina-bovina-assada-dourada-churrasco.jpg",
    tempo: "10 minutos",
    rendimento: "800g",
    validade: "6 meses",
    uso: "Costelas, carnes com osso, assados",
    ingredientes: [
      "300g de sal grosso",
      "4 colheres de sopa de alho em pó",
      "2 colheres de sopa de cebola em pó",
      "2 colheres de sopa de páprica defumada",
      "1 colher de sopa de pimenta calabresa",
      "1 colher de sopa de alecrim desidratado",
      "1 colher de chá de açúcar mascavo",
    ],
    preparo: [
      "Triture o sal grosso até ficar mais fino",
      "Misture com alho e cebola em pó",
      "Adicione as demais especiarias",
      "Homogeneíze muito bem",
      "Armazene em pote grande",
    ],
    dicas: [
      "Esfregue bem em toda a costela",
      "Deixe marinar no mínimo 2 horas",
      "O sal grosso ajuda a selar a carne",
      "Churrasqueiros pedem para fazer quantidade extra",
    ],
    conservacao: "6 meses em recipiente bem fechado",
  },
  "tempero-panela": {
    id: "tempero-panela",
    nome: "Tempero para Panela",
    emoji: "🍲",
    descricao: "Completo e versátil para cozidos e refogados",
    imagem: "/panela-pressao-cozido-carne-legumes-caseiro.jpg",
    tempo: "10 minutos",
    rendimento: "700g",
    validade: "8 meses",
    uso: "Feijão, cozidos, refogados, sopas",
    ingredientes: [
      "300g de sal refinado",
      "3 colheres de sopa de alho em pó",
      "2 colheres de sopa de cebola em pó",
      "1 colher de sopa de colorau",
      "1 colher de sopa de cominho em pó",
      "1 colher de chá de pimenta do reino",
      "1 colher de chá de orégano",
    ],
    preparo: [
      "Coloque o sal em um recipiente",
      "Adicione todos os pós de forma gradual",
      "Misture muito bem com colher",
      "Passe por peneira se necessário",
      "Armazene em pote bem vedado",
    ],
    dicas: [
      "Use 1 colher de sopa para cada 2kg de alimento",
      "Adicione quando começar a cozinhar",
      "Perfeito para feijão, lentilha e grão",
      "Clientes voltam pedindo mais",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-churrasco": {
    id: "tempero-churrasco",
    nome: "Tempero para Churrasco",
    emoji: "🔥",
    descricao: "O segredo dos churrasqueiros profissionais",
    imagem: "/churrasco-brasileiro-carne-brasa-sal-grosso.jpg",
    tempo: "10 minutos",
    rendimento: "1.2 kg",
    validade: "1 ano",
    uso: "Carnes para churrasco, picanha, costela",
    ingredientes: [
      "1 kg de sal grosso",
      "4 colheres de sopa de alho em pó",
      "2 colheres de sopa de pimenta calabresa",
      "2 colheres de sopa de páprica defumada",
      "1 colher de sopa de cominho",
      "1 colher de sopa de açúcar mascavo",
    ],
    preparo: [
      "Triture o sal grosso até ficar mais fino",
      "Misture todos os temperos",
      "Homogeneíze bem",
      "Armazene em pote grande",
    ],
    dicas: [
      "Use generosamente nas carnes antes de assar",
      "Perfeito para picanha, costela e fraldinha",
      "O açúcar ajuda a caramelizar a carne",
      "Deixa uma casquinha deliciosa",
    ],
    conservacao: "Validade de 1 ano em recipiente bem fechado",
  },
  "tempero-barbecue": {
    id: "tempero-barbecue",
    nome: "Tempero BBQ Rápido",
    emoji: "🍖",
    descricao: "Sabor americano de barbecue em tempero seco",
    imagem: "/barbecue-americano-costela-defumada-molho.jpg",
    tempo: "10 minutos",
    rendimento: "600g",
    validade: "8 meses",
    uso: "Costelas, peito de frango, carnes grelhadas",
    ingredientes: [
      "3 colheres de sopa de páprica defumada",
      "2 colheres de sopa de açúcar mascavo",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de cebola em pó",
      "1 colher de sopa de pimenta vermelha em pó",
      "1 colher de sopa de mostarda em pó",
      "1 colher de chá de sal",
    ],
    preparo: [
      "Misture todos os ingredientes",
      "Se o açúcar estiver muito úmido, deixe secar um pouco",
      "Homogeneíze muito bem",
      "Armazene em pote de vidro",
    ],
    dicas: [
      "Use 1 colher de sopa para cada kg de carne",
      "Marinar 1 hora antes de cozinhar",
      "Combina com azeite ou maionese para marinada",
      "Sucesso entre jovens e em festas",
    ],
    conservacao: "8 meses em local fresco",
  },
  "tempero-nordestino": {
    id: "tempero-nordestino",
    nome: "Tempero Nordestino",
    emoji: "☀️",
    descricao: "Sabor autêntico da cozinha nordestina",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "500g",
    validade: "8 meses",
    uso: "Carnes, carne seca, refogados",
    ingredientes: [
      "250g de sal refinado",
      "3 colheres de sopa de alho em pó",
      "2 colheres de sopa de cebola em pó",
      "1 colher de sopa de cominho",
      "1 colher de sopa de pimenta dedo-de-moça seca moída",
      "1 colher de chá de colorau",
      "1 colher de chá de orégano",
    ],
    preparo: [
      "Misture todos os ingredientes em um bowl",
      "Se a pimenta estiver em pedaços grandes, triture",
      "Homogeneíze muito bem",
      "Armazene em pote bem fechado",
    ],
    dicas: [
      "Use generosamente em carnes",
      "Perfeito para carne seca",
      "Também funciona bem em feijão",
      "Cliente nordestino reconhece a qualidade",
    ],
    conservacao: "8 meses em recipiente bem fechado",
  },
  "tempero-grelha": {
    id: "tempero-grelha",
    nome: "Tempero para Grelha",
    emoji: "🔥",
    descricao: "Deixa carnes na grelha com sabor de restaurante",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "750g",
    validade: "8 meses",
    uso: "Carnes grelhadas, frango grelhado, vegetais",
    ingredientes: [
      "350g de sal refinado",
      "3 colheres de sopa de alho em pó",
      "2 colheres de sopa de cebola em pó",
      "2 colheres de sopa de páprica doce",
      "1 colher de sopa de mostarda em pó",
      "1 colher de chá de alecrim desidratado",
      "1 colher de chá de gengibre em pó",
    ],
    preparo: [
      "Misture o sal com os pós",
      "Se o alecrim estiver em folhas, triture levemente",
      "Homogeneíze muito bem",
      "Armazene em pote bem vedado",
    ],
    dicas: [
      "Esfregue bem na carne antes de grelhar",
      "Combina com azeite de alho",
      "Deixa marca visível e saborosa",
      "Restaurantes pequenos adoram",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-portugues": {
    id: "tempero-portugues",
    nome: "Tempero à Portuguesa",
    emoji: "🇵🇹",
    descricao: "Bacalhoada, arroz de pato, cozidos portugueses",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "500g",
    validade: "8 meses",
    uso: "Bacalhoada, arroz, cozidos, peixe",
    ingredientes: [
      "250g de sal refinado",
      "3 colheres de sopa de alho em pó",
      "2 colheres de sopa de cebola em pó",
      "1 colher de sopa de páprica doce",
      "1 colher de sopa de manjericão desidratado",
      "1 colher de chá de pimenta do reino",
      "1/2 colher de chá de colorau",
    ],
    preparo: [
      "Coloque o sal em um recipiente grande",
      "Adicione gradualmente os ingredientes",
      "Misture muito bem até ficar uniforme",
      "Se necessário, passe por peneira fina",
    ],
    dicas: [
      "Use em receitas portuguesas clássicas",
      "Perfeito para bacalhoada",
      "Também funciona em sopas",
      "Comunidade portuguesa aprecia muito",
    ],
    conservacao: "8 meses em recipiente bem fechado",
  },
  "tempero-italiano": {
    id: "tempero-italiano",
    nome: "Tempero Italiano",
    emoji: "🇮🇹",
    descricao: "Massas, risotos e pratos italianos autênticos",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "5 minutos",
    rendimento: "250g",
    validade: "8 meses",
    uso: "Massa, risoto, molhos, carnes italianas",
    ingredientes: [
      "2 colheres de sopa de orégano seco",
      "2 colheres de sopa de manjericão seco",
      "1 colher de sopa de alho em pó",
      "1 colher de sopa de sal",
      "1 colher de chá de pimenta do reino",
      "1 colher de chá de tomilho seco",
    ],
    preparo: [
      "Misture todos os ingredientes",
      "Se as ervas estiverem muito inteiras, triture um pouco",
      "Homogeneíze bem",
      "Armazene em pote de vidro",
    ],
    dicas: [
      "Use em molhos de tomate",
      "Perfeito para massas e risotos",
      "Combine com azeite generosamente",
      "Vende bem para apreciadores de culinária italiana",
    ],
    conservacao: "8 meses protegido da luz",
  },
  "tempero-gourmet": {
    id: "tempero-gourmet",
    nome: "Tempero Gourmet Premium",
    emoji: "⭐",
    descricao: "Mistura sofisticada para clientes mais exigentes",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "15 minutos",
    rendimento: "400g",
    validade: "6 meses",
    uso: "Carnes nobres, pratos especiais",
    ingredientes: [
      "150g de sal refinado",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de cebola em pó",
      "1 colher de sopa de páprica doce",
      "1 colher de chá de açafrão em pó",
      "1 colher de chá de gengibre em pó",
      "1 colher de chá de sementes de mostarda moída",
    ],
    preparo: [
      "Combine todos os ingredientes cuidadosamente",
      "Misture muito bem até ficar uniforme",
      "Se houver peças maiores, triture suavemente",
      "Armazene em pote de vidro especial",
    ],
    dicas: [
      "Use com moderação para deixar a qualidade aparecer",
      "Perfeito para carnes nobres e receitas especiais",
      "Deixa um aroma refinado no ambiente",
      "Clientes premium reconhecem a qualidade",
    ],
    conservacao: "6 meses em local fresco e protegido",
  },
  "tempero-vegano": {
    id: "tempero-vegano",
    nome: "Tempero Vegano",
    emoji: "🌱",
    descricao: "Ideal para comida vegana e vegetariana",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "500g",
    validade: "8 meses",
    uso: "Tofu, legumes, arroz integral, grãos",
    ingredientes: [
      "250g de sal refinado",
      "3 colheres de sopa de alho em pó",
      "2 colheres de sopa de cebola em pó",
      "1 colher de sopa de salsa desidratada",
      "1 colher de sopa de coentro seco",
      "1 colher de chá de pimenta branca",
    ],
    preparo: [
      "Misture o sal com os pós",
      "Adicione as ervas desidratadas",
      "Homogeneíze muito bem",
      "Armazene em recipiente bem fechado",
    ],
    dicas: [
      "Use 1 colher de sopa para cada 500g de tofu",
      "Perfeito para legumes assados",
      "Também funciona bem em grãos",
      "Mercado vegano em crescimento",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-mineiro": {
    id: "tempero-mineiro",
    nome: "Tempero Mineiro",
    emoji: "🥔",
    descricao: "Sabor da culinária mineira autêntica",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "600g",
    validade: "8 meses",
    uso: "Feijão à tropeira, caldo, carne de porco",
    ingredientes: [
      "300g de sal refinado",
      "3 colheres de sopa de alho em pó",
      "2 colheres de sopa de cebola em pó",
      "1 colher de sopa de colorau",
      "1 colher de sopa de cominho",
      "1 colher de chá de pimenta do reino",
    ],
    preparo: [
      "Coloque o sal em um recipiente",
      "Adicione o alho em pó e cebola em pó",
      "Misture bem até ficar uniforme",
      "Adicione os demais temperos e homogeneíze",
    ],
    dicas: [
      "Use em feijão à tropeira",
      "Perfeito para caldos mineiros",
      "Também funciona bem em carne de porco",
      "Cliente mineiro reconhece a autenticidade",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-carne-seca": {
    id: "tempero-carne-seca",
    nome: "Tempero para Carne Seca",
    emoji: "🥩",
    descricao: "Específico para realçar sabor de carnes secas",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "600g",
    validade: "1 ano",
    uso: "Carne seca com abóbora, refogados",
    ingredientes: [
      "250g de sal refinado",
      "3 colheres de sopa de alho em pó",
      "2 colheres de sopa de cebola em pó",
      "1 colher de sopa de cominho",
      "1 colher de sopa de pimenta dedo-de-moça",
      "1 colher de chá de colorau",
    ],
    preparo: [
      "Misture todos os ingredientes secos",
      "Se o pimenta estiver em pedaços, triture",
      "Homogeneíze muito bem",
      "Armazene em pote bem vedado",
    ],
    dicas: [
      "Use 1 colher de sopa para cada kg de carne seca",
      "Perfeito para carne seca com abóbora",
      "Também funciona em outros refogados",
      "Grande demanda no Nordeste",
    ],
    conservacao: "1 ano em recipiente bem fechado",
  },
  "tempero-refogado": {
    id: "tempero-refogado",
    nome: "Tempero para Refogado",
    emoji: "🍳",
    descricao: "Perfeito para realçar vegetais refogados",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "5 minutos",
    rendimento: "400g",
    validade: "8 meses",
    uso: "Brócolis, couve, abóbora refogada",
    ingredientes: [
      "200g de sal refinado",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de cebola em pó",
      "1 colher de sopa de salsa desidratada",
      "1 colher de chá de pimenta do reino",
      "1/2 colher de chá de colorau",
    ],
    preparo: ["Misture o sal com os pós", "Adicione as ervas", "Homogeneíze bem", "Armazene em recipiente bem fechado"],
    dicas: [
      "Use 1 colher de chá para cada porção",
      "Ótimo para brócolis e couve refogada",
      "Combina com alho e cebola fresca",
      "Vende bem para comerciantes de comida saudável",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-frances": {
    id: "tempero-frances",
    nome: "Tempero à Francesa",
    emoji: "🥐",
    descricao: "Elegância francesa em um tempero sofisticado",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "300g",
    validade: "8 meses",
    uso: "Carnes nobres, molhos refinados",
    ingredientes: [
      "150g de sal refinado",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de cebola em pó",
      "1 colher de sopa de salsa desidratada",
      "1 colher de chá de tomilho seco",
      "1 colher de chá de orégano",
    ],
    preparo: [
      "Combine todos os ingredientes",
      "Misture muito bem",
      "Se as ervas forem muito grosseiras, triture",
      "Armazene em pote de vidro escuro",
    ],
    dicas: [
      "Use em receitas sofisticadas",
      "Perfeito para molhos para carnes nobres",
      "Combine com vinho tinto",
      "Clientes sofisticados adoram",
    ],
    conservacao: "8 meses protegido da luz",
  },
  "tempero-indiano": {
    id: "tempero-indiano",
    nome: "Tempero Indiano",
    emoji: "🍛",
    descricao: "Complexidade e exotismo da culinária indiana",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "15 minutos",
    rendimento: "400g",
    validade: "6 meses",
    uso: "Curry, arroz indiano, frango ao curry",
    ingredientes: [
      "1 colher de sopa de cúrcuma em pó",
      "2 colheres de sopa de cominho moído",
      "1 colher de sopa de coentro moído",
      "1 colher de sopa de gengibre em pó",
      "1 colher de sopa de alho em pó",
      "1 colher de chá de pimenta vermelha",
      "1 colher de sopa de sal",
    ],
    preparo: [
      "Misture todos os ingredientes",
      "Se houver peças de especiarias, triture bem",
      "Homogeneíze muito bem",
      "Armazene em pote bem vedado",
    ],
    dicas: [
      "Use 1 colher de sopa para cada kg de carne",
      "Combina com leite de coco",
      "Perfeito para curry autêntico",
      "Crescente demanda por comida asiática",
    ],
    conservacao: "6 meses em local fresco",
  },
  "tempero-marroquino": {
    id: "tempero-marroquino",
    nome: "Tempero Marroquino",
    emoji: "🏺",
    descricao: "Mistério e autenticidade do Marrocos",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "15 minutos",
    rendimento: "350g",
    validade: "6 meses",
    uso: "Tagine, frango marroquino, almôndegas",
    ingredientes: [
      "1 colher de sopa de cúrcuma",
      "1 colher de sopa de cominho",
      "1 colher de sopa de canela em pó",
      "1 colher de sopa de gengibre em pó",
      "1 colher de chá de pimenta vermelha",
      "1 colher de sopa de sal",
      "1 colher de chá de açúcar",
    ],
    preparo: [
      "Combine todos os ingredientes",
      "Misture muito bem",
      "Se necessário, triture para melhor homogeneidade",
      "Armazene em pote bem fechado",
    ],
    dicas: [
      "Use em tagines e pratos marroquinos",
      "Combina com frutas secas",
      "Perfeito para frango e cordeiro",
      "Mercado em expansão de culinária internacional",
    ],
    conservacao: "6 meses em local fresco",
  },
  "tempero-libanes": {
    id: "tempero-libanes",
    nome: "Tempero Libanês",
    emoji: "🧆",
    descricao: "Sabores do Oriente Médio em um tempero",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "400g",
    validade: "8 meses",
    uso: "Grãos, legumes, carnes libanesas",
    ingredientes: [
      "200g de sal refinado",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de cominho",
      "1 colher de sopa de orégano seco",
      "1 colher de sopa de salsa desidratada",
      "1 colher de chá de pimenta do reino",
    ],
    preparo: [
      "Misture o sal com alho em pó",
      "Adicione cominho, orégano e salsa",
      "Homogeneíze bem",
      "Armazene em pote bem vedado",
    ],
    dicas: [
      "Use em grãos como bulgur e trigo",
      "Perfeito para carnes libanesas",
      "Combine com limão",
      "Comunidade libanesa aprecia muito",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-acafrao": {
    id: "tempero-acafrao",
    nome: "Tempero Açafrão Premium",
    emoji: "🌻",
    descricao: "Luxuoso tempero com açafrão de verdade",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "200g",
    validade: "1 ano",
    uso: "Risotos, paellas, pratos sofisticados",
    ingredientes: [
      "100g de sal refinado",
      "2 colheres de sopa de açafrão em pó",
      "1 colher de sopa de alho em pó",
      "1 colher de chá de cebola em pó",
      "1 colher de chá de gengibre em pó",
    ],
    preparo: [
      "Coloque o sal em um pote",
      "Adicione o açafrão em pó muito cuidadosamente",
      "Misture com delicadeza",
      "Armazene em pote escuro bem vedado",
    ],
    dicas: [
      "Use em pequenas quantidades",
      "Perfeito para risotos e paellas",
      "Um toque torna qualquer prato luxuoso",
      "Clientes premium apreciam muito",
    ],
    conservacao: "1 ano protegido da luz",
  },
  "tempero-defumado": {
    id: "tempero-defumado",
    nome: "Tempero Defumado",
    emoji: "💨",
    descricao: "Sabor defumado autêntico em tempero",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "600g",
    validade: "8 meses",
    uso: "Carnes defumadas, peixes, vegetais",
    ingredientes: [
      "3 colheres de sopa de páprica defumada",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de cebola em pó",
      "1 colher de sopa de sal refinado",
      "1 colher de chá de pimenta do reino",
      "1 colher de chá de açúcar mascavo",
    ],
    preparo: [
      "Misture todos os ingredientes",
      "Homogeneíze muito bem",
      "Se o açúcar estiver úmido, deixe secar",
      "Armazene em pote bem fechado",
    ],
    dicas: [
      "Use 1 colher de sopa para cada kg",
      "Perfeito para simular sabor defumado",
      "Também funciona em vegetais",
      "Tendência crescente em pizzarias",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-picante": {
    id: "tempero-picante",
    nome: "Tempero Picante Extra",
    emoji: "🌶️",
    descricao: "Para quem gosta de verdadeiro calor",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "400g",
    validade: "8 meses",
    uso: "Carnes, molhos, tacos, alimentos ousados",
    ingredientes: [
      "200g de sal refinado",
      "4 colheres de sopa de pimenta vermelha em pó",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de cebola em pó",
      "1 colher de sopa de paprika defumada",
      "1 colher de chá de pimenta calabresa",
    ],
    preparo: [
      "Coloque o sal em um recipiente bem ventilado",
      "Adicione as pimentas cuidadosamente",
      "Misture com máscara (pimenta irrita!)",
      "Armazene bem vedado",
    ],
    dicas: [
      "Avise sobre o nível de picância",
      "Use em pequenas quantidades",
      "Perfeito para tacos e molhos",
      "Clientes que gostam de desafio adoram",
    ],
    conservacao: "8 meses em local seco bem vedado",
  },
  "tempero-suave": {
    id: "tempero-suave",
    nome: "Tempero Suave",
    emoji: "🤍",
    descricao: "Leveza e elegância para paladares delicados",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "500g",
    validade: "8 meses",
    uso: "Comida para crianças, idosos, paladares sensíveis",
    ingredientes: [
      "300g de sal refinado",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de cebola em pó",
      "1 colher de sopa de salsa desidratada",
      "1 colher de chá de tomilho seco",
      "1/2 colher de chá de pimenta branca moída",
    ],
    preparo: [
      "Misture o sal com os pós",
      "Adicione as ervas desidratadas",
      "Homogeneíze muito bem",
      "Armazene em recipiente bem fechado",
    ],
    dicas: [
      "Use em comida para crianças",
      "Perfeito para idosos com paladar delicado",
      "Ainda assim saboroso e agradável",
      "Mercado de comida para crianças em crescimento",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-sal-ervas": {
    id: "tempero-sal-ervas",
    nome: "Premium Sal de Ervas",
    emoji: "🧂",
    descricao: "Sal premium infusionado com ervas sofisticadas",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "300g",
    validade: "1 ano",
    uso: "Finalização de pratos, peixes, carnes brancas",
    ingredientes: [
      "250g de sal marinho fino",
      "2 colheres de sopa de alecrim desidratado",
      "1 colher de sopa de tomilho seco",
      "1 colher de sopa de salsa desidratada",
      "1 colher de chá de raspas de limão desidratado",
    ],
    preparo: [
      "Misture o sal com cuidado",
      "Adicione as ervas delicadamente",
      "Homogeneíze com colher macia",
      "Armazene em pote de vidro escuro",
    ],
    dicas: [
      "Use para finalizar pratos",
      "Deixa uma apresentação profissional",
      "Perfeito para peixes e carnes brancas",
      "Clientes premium investem em qualidade",
    ],
    conservacao: "1 ano protegido da luz",
  },
  "tempero-japones": {
    id: "tempero-japones",
    nome: "Tempero Japonês",
    emoji: "🍱",
    descricao: "Sabores delicados da culinária japonesa",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "300g",
    validade: "6 meses",
    uso: "Arroz sushi, frango teriyaki, pratos asiáticos",
    ingredientes: [
      "1 colher de sopa de gengibre em pó",
      "1 colher de sopa de alho em pó",
      "1 colher de sopa de sementes de gergelim",
      "1 colher de chá de wasabi em pó (opcional)",
      "1 colher de sopa de sal fino",
      "1 colher de chá de açúcar",
    ],
    preparo: [
      "Misture todos os ingredientes",
      "Homogeneíze bem",
      "Se o gergelim estiver em sementes grandes, pique",
      "Armazene em pote bem vedado",
    ],
    dicas: [
      "Use em arroz para sushi",
      "Perfeito para frango teriyaki",
      "Também funciona em peixe",
      "Crescente mercado de comida japonesa",
    ],
    conservacao: "6 meses em local seco",
  },
  "tempero-tailandes": {
    id: "tempero-tailandes",
    nome: "Tempero Tailandês",
    emoji: "🥡",
    descricao: "Sabores vibrantes da Tailândia",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "350g",
    validade: "6 meses",
    uso: "Pad Thai, curry tailandês, frango",
    ingredientes: [
      "1 colher de sopa de gengibre em pó",
      "1 colher de sopa de alho em pó",
      "1 colher de sopa de coentro seco",
      "1 colher de chá de pimenta vermelha",
      "1 colher de sopa de sal",
      "1 colher de chá de açúcar de palma",
    ],
    preparo: ["Misture todos os ingredientes", "Homogeneíze bem", "Armazene em pote bem vedado"],
    dicas: [
      "Use em pad thai e curries",
      "Combina com leite de coco",
      "Perfeito para frango e camarão",
      "Tendência asiática em crescimento",
    ],
    conservacao: "6 meses em local seco",
  },
  "tempero-turco": {
    id: "tempero-turco",
    nome: "Tempero Turco",
    emoji: "🕌",
    descricao: "Aromas exóticos da culinária turca",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "400g",
    validade: "8 meses",
    uso: "Kebab, carnes grelhadas, arroz turco",
    ingredientes: [
      "200g de sal refinado",
      "2 colheres de sopa de cominho",
      "1 colher de sopa de páprica doce",
      "1 colher de sopa de alho em pó",
      "1 colher de chá de canela",
      "1 colher de chá de pimenta do reino",
    ],
    preparo: ["Misture todos os ingredientes", "Homogeneíze muito bem", "Armazene em pote bem fechado"],
    dicas: [
      "Use em kebabs e carnes grelhadas",
      "Perfeito para arroz turco",
      "Combina com iogurte",
      "Culinária do Oriente Médio em alta",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-grego": {
    id: "tempero-grego",
    nome: "Tempero Grego",
    emoji: "🏛️",
    descricao: "Mediterrâneo autêntico da Grécia",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "350g",
    validade: "8 meses",
    uso: "Gyros, souvlaki, salada grega",
    ingredientes: [
      "200g de sal refinado",
      "3 colheres de sopa de orégano seco",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de cebola em pó",
      "1 colher de chá de raspas de limão",
      "1 colher de chá de pimenta do reino",
    ],
    preparo: ["Misture todos os ingredientes", "Homogeneíze bem", "Armazene em pote bem vedado"],
    dicas: [
      "Use em gyros e souvlaki",
      "Perfeito com azeite e limão",
      "Combina com iogurte para tzatziki",
      "Dieta mediterrânea em alta",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-camarao": {
    id: "tempero-camarao",
    nome: "Tempero para Camarão",
    emoji: "🦐",
    descricao: "Realça o sabor delicado do camarão",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "5 minutos",
    rendimento: "300g",
    validade: "6 meses",
    uso: "Camarão grelhado, frito, ao alho",
    ingredientes: [
      "150g de sal refinado",
      "3 colheres de sopa de alho em pó",
      "1 colher de sopa de cebola em pó",
      "1 colher de sopa de salsa desidratada",
      "1 colher de chá de pimenta branca",
      "1 colher de chá de raspas de limão",
    ],
    preparo: ["Misture todos os ingredientes", "Homogeneíze bem", "Armazene em pote bem vedado"],
    dicas: [
      "Use 1 colher de chá para cada 500g de camarão",
      "Perfeito com manteiga derretida",
      "Combina com limão fresco",
      "Restaurantes de frutos do mar adoram",
    ],
    conservacao: "6 meses em local seco",
  },
  "tempero-mariscos": {
    id: "tempero-mariscos",
    nome: "Tempero para Mariscos",
    emoji: "🦪",
    descricao: "Perfeito para frutos do mar variados",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "5 minutos",
    rendimento: "350g",
    validade: "6 meses",
    uso: "Lula, polvo, ostras, mexilhões",
    ingredientes: [
      "180g de sal refinado",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de cebola em pó",
      "1 colher de sopa de salsa desidratada",
      "1 colher de sopa de orégano",
      "1 colher de chá de pimenta do reino",
      "1 colher de chá de gengibre em pó",
    ],
    preparo: ["Misture todos os ingredientes", "Homogeneíze bem", "Armazene em pote bem vedado"],
    dicas: [
      "Use em lula, polvo e mexilhões",
      "Combina com vinho branco",
      "Perfeito para moquecas de frutos do mar",
      "Mercado de frutos do mar em crescimento",
    ],
    conservacao: "6 meses em local seco",
  },
  "tempero-porco": {
    id: "tempero-porco",
    nome: "Tempero para Porco",
    emoji: "🐷",
    descricao: "Realça o sabor da carne suína",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "700g",
    validade: "8 meses",
    uso: "Lombo, pernil, costelinha de porco",
    ingredientes: [
      "350g de sal refinado",
      "3 colheres de sopa de alho em pó",
      "2 colheres de sopa de cebola em pó",
      "1 colher de sopa de sálvia desidratada",
      "1 colher de sopa de alecrim desidratado",
      "1 colher de chá de pimenta do reino",
      "1 colher de chá de açúcar mascavo",
    ],
    preparo: [
      "Misture todos os ingredientes",
      "Se as ervas estiverem inteiras, triture",
      "Homogeneíze bem",
      "Armazene em pote bem vedado",
    ],
    dicas: [
      "Esfregue bem na carne",
      "Deixe marinar por 2 horas",
      "Perfeito para pernil de Natal",
      "Grande demanda em fim de ano",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-cordeiro": {
    id: "tempero-cordeiro",
    nome: "Tempero para Cordeiro",
    emoji: "🐑",
    descricao: "Especial para carnes de cordeiro",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "400g",
    validade: "8 meses",
    uso: "Cordeiro assado, grelhado, ensopado",
    ingredientes: [
      "200g de sal refinado",
      "2 colheres de sopa de alecrim desidratado",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de cebola em pó",
      "1 colher de sopa de hortelã seca",
      "1 colher de chá de cominho",
      "1 colher de chá de pimenta do reino",
    ],
    preparo: [
      "Misture todos os ingredientes",
      "Triture as ervas se necessário",
      "Homogeneíze bem",
      "Armazene em pote bem vedado",
    ],
    dicas: [
      "Use generosamente no cordeiro",
      "Combina com azeite e alho",
      "Perfeito para ocasiões especiais",
      "Restaurantes finos adoram",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-feijoada": {
    id: "tempero-feijoada",
    nome: "Tempero para Feijoada",
    emoji: "🫘",
    descricao: "O segredo da feijoada perfeita",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "600g",
    validade: "8 meses",
    uso: "Feijoada, feijão preto",
    ingredientes: [
      "300g de sal refinado",
      "4 colheres de sopa de alho em pó",
      "2 colheres de sopa de cebola em pó",
      "1 colher de sopa de cominho",
      "1 colher de sopa de louro em pó",
      "1 colher de chá de pimenta do reino",
      "1 colher de chá de colorau",
    ],
    preparo: ["Misture todos os ingredientes", "Homogeneíze muito bem", "Armazene em pote bem vedado"],
    dicas: [
      "Use 2 colheres de sopa para cada kg de feijão",
      "Adicione no início do cozimento",
      "Perfeito para feijoada completa",
      "Sucesso garantido em restaurantes",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-moqueca": {
    id: "tempero-moqueca",
    nome: "Tempero para Moqueca",
    emoji: "🥥",
    descricao: "Sabor autêntico da moqueca baiana",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "10 minutos",
    rendimento: "400g",
    validade: "6 meses",
    uso: "Moqueca de peixe, camarão, frutos do mar",
    ingredientes: [
      "200g de sal refinado",
      "2 colheres de sopa de colorau",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de cebola em pó",
      "1 colher de sopa de coentro seco",
      "1 colher de chá de pimenta dedo-de-moça",
    ],
    preparo: ["Misture todos os ingredientes", "Homogeneíze bem", "Armazene em pote bem vedado"],
    dicas: [
      "Use com leite de coco e azeite de dendê",
      "Perfeito para moqueca baiana",
      "Combina com peixe e camarão",
      "Restaurantes de comida baiana adoram",
    ],
    conservacao: "6 meses em local seco",
  },
  "tempero-strogonoff": {
    id: "tempero-strogonoff",
    nome: "Tempero para Strogonoff",
    emoji: "🍄",
    descricao: "Deixa o strogonoff cremoso e saboroso",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "5 minutos",
    rendimento: "300g",
    validade: "8 meses",
    uso: "Strogonoff de carne, frango, cogumelos",
    ingredientes: [
      "150g de sal refinado",
      "2 colheres de sopa de páprica doce",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de cebola em pó",
      "1 colher de sopa de mostarda em pó",
      "1 colher de chá de pimenta do reino",
    ],
    preparo: ["Misture todos os ingredientes", "Homogeneíze bem", "Armazene em pote bem vedado"],
    dicas: [
      "Use 1 colher de sopa para cada 500g de carne",
      "Combina com creme de leite e catchup",
      "Perfeito para strogonoff cremoso",
      "Um dos pratos mais pedidos em restaurantes",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-lasanha": {
    id: "tempero-lasanha",
    nome: "Tempero para Lasanha",
    emoji: "🧀",
    descricao: "O segredo das lasanhas irresistíveis",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "5 minutos",
    rendimento: "250g",
    validade: "8 meses",
    uso: "Lasanha, canelone, nhoque",
    ingredientes: [
      "100g de sal refinado",
      "2 colheres de sopa de orégano seco",
      "2 colheres de sopa de manjericão seco",
      "2 colheres de sopa de alho em pó",
      "1 colher de chá de pimenta do reino",
      "1 colher de chá de noz-moscada",
    ],
    preparo: ["Misture todos os ingredientes", "Homogeneíze bem", "Armazene em pote bem vedado"],
    dicas: [
      "Use no molho e entre as camadas",
      "Combina com queijos variados",
      "Perfeito para massas recheadas",
      "Grande demanda em festas e eventos",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-risoto": {
    id: "tempero-risoto",
    nome: "Tempero para Risoto",
    emoji: "🍚",
    descricao: "Deixa o risoto cremoso e aromático",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "5 minutos",
    rendimento: "200g",
    validade: "8 meses",
    uso: "Risoto, arroz cremoso",
    ingredientes: [
      "100g de sal refinado",
      "2 colheres de sopa de alho em pó",
      "1 colher de sopa de cebola em pó",
      "1 colher de sopa de salsa desidratada",
      "1 colher de chá de noz-moscada",
      "1 colher de chá de pimenta branca",
    ],
    preparo: ["Misture todos os ingredientes", "Homogeneíze bem", "Armazene em pote bem vedado"],
    dicas: [
      "Use 1 colher de chá para cada xícara de arroz",
      "Combina com parmesão e manteiga",
      "Perfeito para risoto cremoso",
      "Restaurantes italianos adoram",
    ],
    conservacao: "8 meses em local seco",
  },
  "tempero-cafe": {
    id: "tempero-cafe",
    nome: "Tempero para Café Especial",
    emoji: "☕",
    descricao: "Transforma seu café em uma experiência gourmet",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "5 minutos",
    rendimento: "150g",
    validade: "6 meses",
    uso: "Café, cappuccino, bebidas quentes",
    ingredientes: [
      "2 colheres de sopa de canela em pó",
      "1 colher de sopa de cardamomo moído",
      "1 colher de chá de noz-moscada",
      "1 colher de chá de gengibre em pó",
      "1/2 colher de chá de cravo moído",
    ],
    preparo: ["Misture todos os ingredientes", "Homogeneíze bem", "Armazene em pote bem vedado"],
    dicas: [
      "Use 1/4 colher de chá por xícara",
      "Polvilhe sobre cappuccino",
      "Perfeito para cafés especiais",
      "Cafeterias adoram este diferencial",
    ],
    conservacao: "6 meses em local seco",
  },
  "tempero-cha": {
    id: "tempero-cha",
    nome: "Tempero para Chá Especial",
    emoji: "🍵",
    descricao: "Eleva seu chá a outro nível",
    imagem: "/placeholder.svg?height=300&width=400",
    tempo: "5 minutos",
    rendimento: "150g",
    validade: "6 meses",
    uso: "Chá, chai, bebidas quentes",
    ingredientes: [
      "2 colheres de sopa de gengibre em pó",
      "2 colheres de sopa de canela em pó",
      "1 colher de sopa de cardamomo moído",
      "1 colher de chá de cravo moído",
      "1 colher de chá de pimenta do reino moída",
    ],
    preparo: ["Misture todos os ingredientes", "Homogeneíze bem", "Armazene em pote bem vedado"],
    dicas: [
      "Use 1/2 colher de chá por xícara",
      "Perfeito para chai indiano",
      "Combina com leite e mel",
      "Tendência de chás especiais em alta",
    ],
    conservacao: "6 meses em local seco",
  },
}

export async function generateStaticParams() {
  return Object.keys(temperos).map((slug) => ({
    slug,
  }))
}

export default async function TemperoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tempero = temperos[slug]

  if (!tempero) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="px-4 py-6 pb-24 max-w-2xl mx-auto">
        <Link href="/home">
          <Button variant="ghost" className="mb-4 -ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
          <Image src={tempero.imagem || "/placeholder.svg"} alt={tempero.nome} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <span className="text-3xl">{tempero.emoji}</span>
            <h1 className="text-2xl font-bold">{tempero.nome}</h1>
          </div>
        </div>

        <p className="text-muted-foreground mb-6">{tempero.descricao}</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-xl">
            <Clock className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Tempo</p>
              <p className="text-sm font-medium">{tempero.tempo}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-xl">
            <Users className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Rendimento</p>
              <p className="text-sm font-medium">{tempero.rendimento}</p>
            </div>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="text-xl">📝</span>
              Ingredientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {tempero.ingredientes.map((ing, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="text-xl">👨‍🍳</span>
              Modo de Preparo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              {tempero.preparo.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-6 border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-yellow-800">
              <AlertCircle className="w-5 h-5" />
              Dicas de Uso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-yellow-900">
              {tempero.dicas.map((dica, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-yellow-600">💡</span>
                  <span>{dica}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-green-800">
              <span className="text-xl">🧊</span>
              Conservação
            </CardTitle>
            <CardDescription className="text-green-700">
              Validade: {tempero.validade} | Uso: {tempero.uso}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-green-900">{tempero.conservacao}</p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}

import Questionario from '../screens/Game'; 

const perguntas = [ 
  
  {enunciado: 'Qual é a maior estrela do sistema solar?',resposta:[ 
  {alternativa: 'Sirius', id:1},
  {alternativa: 'Aldebaran', id:2},
  {alternativa: 'Sol', id: 3,}, 
  {alternativa: 'Rigel', id:4,},], 
  id:0, moedas: 90, perguntas: '', rota: 'Rota1', resp: 3, prox: 'Rota2',  
  imagem: 'https://img.olhardigital.com.br/wp-content/uploads/2021/09/via-lactea-espiral-capa.jpg', 
  }, 
  {enunciado: 'O que é a mancha vermelha em Júpiter?',resposta:[ 
  {alternativa: 'É uma tempestade', id:1}, 
  {alternativa: 'É uma vulcão', id:2},
  {alternativa: 'É a maior montanha do planeta', id: 3,}, 
  {alternativa: 'Uma lagoa gigantesca', id:4,},
  {alternativa: 'Nennhuma das alternativas', id:5,}, 
  ], 
  id:1, moedas: 200, perguntas: '', rota: 'Rota2', resp: 1, prox: 'Rota3', 
  imagem: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/36965_F44C83AB5F977CB6-1.jpg?w=876&h=484&crop=1', 
  }, 
  {enunciado: 'Qual o maior planeta do sistema solar',resposta:[ 
  {alternativa: 'Saturno', id:1}, 
  {alternativa: 'Terra', id:2},
  {alternativa: 'Marte', id: 3,}, 
  {alternativa: 'Lua', id:4,},
  {alternativa: 'Júpiter', id:5,}, 
  {alternativa: 'Vênus', id: 6,}, 
  {alternativa: 'Urano', id:7,},
  {alternativa: 'Netuno', id: 8,}, 
  ], 
  id:2, moedas: 180, perguntas: '', rota: 'Rota3', resp: 5, prox: 'Pontos', 
  imagem: 'https://img.olhardigital.com.br/wp-content/uploads/2021/09/via-lactea-espiral-capa.jpg', 
  } 
  
]  
export default perguntas; 
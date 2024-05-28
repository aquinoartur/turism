
import axios from 'axios';

// Crie uma instância do Axios com configurações padrão
const api = axios.create({
 baseURL: 'https://jsonplaceholder.typicode.com', // Substitua pela URL da sua API
 timeout: 10000, // Tempo limite em milissegundos
 headers: {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
 },
});

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Função para fazer uma solicitação GET
export const fetchData = async () => {
 try {
  await delay(2000); // Simula um atraso de 2 segundos
  const response = await api.get('/posts'); // Substitua '/dados' pelo endpoint específico
  return response.data;
 } catch (error) {
  console.error('Erro ao buscar posts:', error);
  throw error; // Lança o erro para ser tratado pelo chamador
 }
};

// Função para fazer uma solicitação POST (exemplo adicional)
export const postData = async (data) => {
 try {
  const response = await api.post('/dados', data); // Substitua '/dados' pelo endpoint específico
  return response.data;
 } catch (error) {
  console.error('Erro ao enviar dados:', error);
  throw error; // Lança o erro para ser tratado pelo chamador
 }
};
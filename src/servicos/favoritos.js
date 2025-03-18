import axios from "axios";

const favoritosAPI = axios.create({ baseURL: "http://localhost:8000/favoritos" });

async function getFavoritos() { 
 const response = await favoritosAPI.get('/')

 return response.data
}

async function postFavorito(id) {
  try {
    await favoritosAPI.post(`/${id}`);
  } catch (error) {
    console.error('Erro ao adicionar favorito: ', error);
    throw error;
  }
}

async function deleteFavorito(id) {
  try {
    await favoritosAPI.delete(`/${id}`);
  } catch (error) {
    console.error('Erro ao deletar favorito: ', error);
    throw error;
  }
}

export {
  getFavoritos,
  postFavorito,
  deleteFavorito
}
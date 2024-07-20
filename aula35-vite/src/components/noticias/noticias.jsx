// Desafio 1: Atualizador Automático de Notícias
// Implemente um componente que busca automaticamente novas notícias a
// cada 30 segundos usando useEffect.
// Importação dos hooks useState e useEffect do React.

//https://jsonplaceholder.typicode.com/users/1

// src/NewsFetcher.js
import { useState, useEffect } from 'react';

export const Noticias = () => {
  const [noticia, setNoticia] = useState([]);
  const [contador, setContador] = useState(1);

  const buscaNoticia = async () => {
    // const randomId = Math.floor(Math.random() * 100) + 1;
    const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${contador}`);
    const dados = await resposta.json();
    setNoticia(dados);
  };

  useEffect(() => {
    buscaNoticia();

    const intervalId = setInterval(() => {
      buscaNoticia();
      setContador(contador + 5);
    }, 3000);

    return () => clearInterval(intervalId); // clear
  }, [contador]);

  return (
    <div>
      <p>{contador}</p>
      <h2 className='text-2xl'>{noticia.title}</h2>
      <p className='italic'>{noticia.body}</p>
    </div>
  );
};


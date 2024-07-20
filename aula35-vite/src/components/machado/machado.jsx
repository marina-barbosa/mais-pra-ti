import { useEffect, useState } from "react";

export function Machado() {
  const [news, setNews] = useState(null);
  const [count, setCount] = useState(1);

  const fetchNewsData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`);
    const newsData = await response.json();
    setNews(newsData);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      fetchNewsData();
      setCount(prevCount => prevCount + 1);
      // console.log("a " + count); 
    }, 3000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  // console.log("b " + count);

  return (
    <div>
      {news ? (
        <div>
          <h2 className='text-2xl'>{news.title}</h2>
          <p className='italic'>{news.body}</p>
        </div>
      ) : (
        <p>Carregando Notícia!</p>
      )}
    </div>
  );

}
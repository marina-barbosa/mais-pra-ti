import { useState, useEffect } from 'react';

const TitleUpdater = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    document.title = `Número Atual: ${number}`;
  }, [number]);

  return (
    <div>
      <p className='font-bold'>atualize o titulo da aba do navegador</p>
      <p>numero atual: {number}</p>
      <div className="flex">
        <button onClick={() => setNumber(number + 1)}
          className="custom-button hover:bg-neutral-900"
        >incrementar</button>
        <button onClick={() => setNumber(number - 1)}
          className="custom-button hover:bg-neutral-900"
        >decrementar</button>
      </div>
    </div>
  );
};

export default TitleUpdater;
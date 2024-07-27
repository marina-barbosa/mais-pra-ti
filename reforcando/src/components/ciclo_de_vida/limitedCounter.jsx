import { useState } from 'react';

function LimitedCounter() {

  const [count, setCount] = useState(0);

  const [limitMessage, setLimitMessage] = useState('');

  const LIMIT = 5;

  const increment = () => {
    if (count < LIMIT) {
      setCount(count + 1);
      setLimitMessage('');
    } else {
      setLimitMessage(`O limite de ${LIMIT} foi atingido.`);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setLimitMessage('');
    }
  };

  return (
    <div className="p-4 text-center">
      <p className="font-bold">Contador com Limite</p>
      <p className="">Valor do contador: {count}</p>
      <div className="flex">
        <button
          onClick={increment}
          className="custom-button hover:bg-neutral-900"
        >
          Incrementar
        </button>
        <button
          onClick={decrement}
          className="custom-button hover:bg-neutral-900"
        >
          Decrementar
        </button>
      </div>
      {limitMessage && (
        <p className="text-red-500 mt-4">{limitMessage}</p>
      )}
    </div>
  );
}
export default LimitedCounter;

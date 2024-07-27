import { useState, useEffect } from 'react';

function PersistentCounter() {
  const getInitialCount = () => {
    const savedCount = localStorage.getItem('counter');
    return savedCount ? JSON.parse(savedCount) : 0;
  };
  const [count, setCount] = useState(getInitialCount);

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(count));
  }, [count]);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p className="font-bold">contador que salva no localStorage</p>
      <p>valor do contador: {count}</p>
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
    </div>
  );
}
export default PersistentCounter;

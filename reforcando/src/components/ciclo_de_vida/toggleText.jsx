import { useState } from 'react';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="p-4 text-center">
      <button
        onClick={toggleVisibility}
        className="custom-button hover:bg-neutral-900"
      >
        {isVisible ? 'Esconder Texto' : 'Mostrar Texto'}
      </button>
      {isVisible && (
        <p className="font-semibold">Este é o texto que pode ser mostrado ou escondido.</p>
      )}
    </div>
  );
}
export default ToggleText;
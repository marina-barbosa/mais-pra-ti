import { useState, useEffect } from 'react';

function WindowSize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p className="font-semibold">A largura atual da janela é: {windowWidth}px</p>
    </div>
  );
}
export default WindowSize;

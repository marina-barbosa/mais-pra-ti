import { createContext, useState } from 'react';

export const NavigationHistoryContext = createContext();

export const NavigationHistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addToHistory = (page) => {
    setHistory([...history, page]);
  };

  return (
    <NavigationHistoryContext.Provider value={{ history, addToHistory }}>
      {children}
    </NavigationHistoryContext.Provider>
  );
};

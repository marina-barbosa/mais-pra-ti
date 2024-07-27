import { createContext, useState, useContext } from 'react';

const DynamicThemeContext = createContext();

export const DynamicThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const switchTheme = (newTheme) => setTheme(newTheme);

  return (
    <DynamicThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </DynamicThemeContext.Provider>
  );
};

export const useDynamicTheme = () => useContext(DynamicThemeContext);

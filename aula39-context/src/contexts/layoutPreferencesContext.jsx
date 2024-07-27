import { createContext, useState } from 'react';

export const LayoutPreferencesContext = createContext();

export const LayoutPreferencesProvider = ({ children }) => {
  const [layout, setLayout] = useState({ spacing: 'p-4', font: 'text-base' });

  const updateLayout = (newPreferences) => {
    setLayout((prev) => ({ ...prev, ...newPreferences }));
  };

  return (
    <LayoutPreferencesContext.Provider value={{ layout, updateLayout }}>
      {children}
    </LayoutPreferencesContext.Provider>
  );
};

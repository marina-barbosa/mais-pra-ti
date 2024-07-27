import { createContext, useState, useContext } from 'react';

const NotificationSettingsContext = createContext();

export const useNotificationSettings = () => useContext(NotificationSettingsContext);

export const NotificationSettingsProvider = ({ children }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(prev => !prev);
  };

  return (
    <NotificationSettingsContext.Provider value={{ notificationsEnabled, toggleNotifications }}>
      {children}
    </NotificationSettingsContext.Provider>
  );
};
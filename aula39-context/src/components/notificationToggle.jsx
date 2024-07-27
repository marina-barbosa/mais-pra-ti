import { useNotificationSettings } from '../contexts/notificationSettingsContext';

const NotificationToggle = () => {
  const { notificationsEnabled, toggleNotifications } = useNotificationSettings();

  return (
    <button
      onClick={toggleNotifications}
      className={`px-4 py-2 rounded ${notificationsEnabled ? 'bg-green-500' : 'bg-red-500'} text-white`}
    >
      {notificationsEnabled ? 'Desativar Notificações' : 'Ativar Notificações'}
    </button>
  );
};

export default NotificationToggle;

import { useNotificationSettings } from '../contexts/notificationSettingsContext';

const NotificationStatus = () => {
  const { notificationsEnabled } = useNotificationSettings();

  return (
    <div className="mt-4">
      <span className={`text-xl ${notificationsEnabled ? 'text-green-600' : 'text-red-600'}`}>
        {notificationsEnabled ? 'Notificações Ativadas' : 'Notificações Desativadas'}
      </span>
    </div>
  );
};

export default NotificationStatus;

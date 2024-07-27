
import './App.css'
import NotificationStatus from './components/notificationStatus'
import NotificationToggle from './components/notificationToggle'
import { NotificationSettingsProvider } from './contexts/notificationSettingsContext'


export function App() {

  return (
    <NotificationSettingsProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Gerenciador de Notificações</h1>
        <NotificationToggle />
        <NotificationStatus />
      </div>
    </NotificationSettingsProvider>
  )
}


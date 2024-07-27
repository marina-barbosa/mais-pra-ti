import { useUserPreferences } from '../contexts/userPreferencesContext';

const ViewModeSwitcher = () => {
  const { viewMode, toggleViewMode } = useUserPreferences();

  return (
    <div>
      <button onClick={toggleViewMode}>
        Trocar para {viewMode === 'list' ? 'Grid' : 'List'} View
      </button>
    </div>
  );
};

export default ViewModeSwitcher;

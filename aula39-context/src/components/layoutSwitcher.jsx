import { useContext } from 'react';
import { LayoutPreferencesContext } from '../contexts/layoutPreferencesContext';

const LayoutSwitcher = () => {
  const { updateLayout } = useContext(LayoutPreferencesContext);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Layout Preferences</h2>
      <button
        onClick={() => updateLayout({ spacing: 'p-8', font: 'text-lg' })}
        className="bg-green-500 text-white py-1 px-4 rounded"
      >
        Switch to Large
      </button>
      <button
        onClick={() => updateLayout({ spacing: 'p-4', font: 'text-base' })}
        className="ml-2 bg-red-500 text-white py-1 px-4 rounded"
      >
        Switch to Small
      </button>
    </div>
  );
};

export default LayoutSwitcher;

import { useContext } from 'react';
import { NavigationHistoryContext } from '../contexts/navigationHistoryContext';

const NavigationTracker = () => {
  const { addToHistory } = useContext(NavigationHistoryContext);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Navigation Tracker</h2>
      <button
        onClick={() => addToHistory('Page 1')}
        className="bg-purple-500 text-white py-1 px-4 rounded"
      >
        Add Page 1
      </button>
      <button
        onClick={() => addToHistory('Page 2')}
        className="ml-2 bg-teal-500 text-white py-1 px-4 rounded"
      >
        Add Page 2
      </button>
    </div>
  );
};

export default NavigationTracker;

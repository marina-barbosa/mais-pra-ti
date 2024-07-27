import { useContext } from 'react';
import { NavigationHistoryContext } from '../contexts/navigationHistoryContext';

const HistoryList = () => {
  const { history } = useContext(NavigationHistoryContext);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Navigation History</h2>
      <ul>
        {history.length === 0 ? (
          <li>No history recorded</li>
        ) : (
          history.map((page, index) => (
            <li key={index} className="mb-2">
              {page}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default HistoryList;

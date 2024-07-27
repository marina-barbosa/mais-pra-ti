import { useContext } from 'react';
import { LayoutPreferencesContext } from '../contexts/layoutPreferencesContext';

const StyledComponent = () => {
  const { layout } = useContext(LayoutPreferencesContext);

  return (
    <div className={`${layout.spacing} ${layout.font} p-4`}>
      <h2 className="text-xl font-bold">Styled Component</h2>
      <p>Aqui é onde muda o layout.</p>
    </div>
  );
};

export default StyledComponent;

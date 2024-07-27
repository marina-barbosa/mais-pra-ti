import { useDynamicTheme } from '../contexts/dynamicThemeContext';

const ThemedComponent = () => {
  const { theme } = useDynamicTheme();

  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}>
      o tema é {theme}.
    </div>
  );
};

export default ThemedComponent;

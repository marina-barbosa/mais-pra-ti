import { useDynamicTheme } from '../contexts/dynamicThemeContext';

const ThemeSelector = () => {
  const { switchTheme } = useDynamicTheme();

  return (
    <div className='flex justify-between'>
      <button className='bg-pink-400' onClick={() => switchTheme('light')}>Light Theme</button>
      <button className='bg-sky-400' onClick={() => switchTheme('dark')}>Dark Theme</button>
    </div>
  );
};

export default ThemeSelector;

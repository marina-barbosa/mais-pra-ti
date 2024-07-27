import { useLanguage } from '../contexts/languageContext';

const LanguageSwitcher = () => {
  const { switchLanguage } = useLanguage();

  return (
    <div className='flex gap-6'>
      <button className='bg-sky-500' onClick={() => switchLanguage('en')}>English</button>
      <button className='bg-sky-500' onClick={() => switchLanguage('pt')}>Português</button>
    </div>
  );
};

export default LanguageSwitcher;

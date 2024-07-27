import { useAdvancedLanguage } from '../contexts/advancedLanguageContext';

const LanguageRegionSwitcher = () => {
  const { switchLanguage, switchRegion } = useAdvancedLanguage();

  return (
    <div className='flex justify-around'>
      <button className='bg-slate-200' onClick={() => switchLanguage('en')}>EN</button>
      <button className='bg-slate-200' onClick={() => switchLanguage('pt')}>PT</button>
      <button className='bg-slate-200' onClick={() => switchRegion('t1')}>T1</button>
      <button className='bg-slate-200' onClick={() => switchRegion('t2')}>T2</button>
    </div>
  );
};

export default LanguageRegionSwitcher;

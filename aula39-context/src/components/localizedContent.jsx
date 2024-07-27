import { useAdvancedLanguage } from '../contexts/advancedLanguageContext';

const LocalizedContent = () => {
  const { language, region } = useAdvancedLanguage();

  const content = {
    en: {
      t1: 'text one',
      t2: 'I didnt understand this exercise!',
    },
    pt: {
      t1: 'texto um',
      t2: 'não entendi esse exercicio!',
    },
  };

  return <p>{content[language][region]}</p>;
};

export default LocalizedContent;

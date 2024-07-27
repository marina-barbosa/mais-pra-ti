import { useLanguage } from '../contexts/languageContext';

const Greeting = () => {
  const { language } = useLanguage();
  const greetings = {
    en: 'Hello',
    pt: 'Olá',
  };

  return <p>{greetings[language]}</p>;
};

export default Greeting;

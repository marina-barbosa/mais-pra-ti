
const PicPayButton = () => {
  const picPayUsername = 'marinabarbosarodrigues';

  const handlePicPayButtonClick = () => {
    window.open(`https://picpay.me/${picPayUsername}`, '_blank');
  };

  return (
    <button
      onClick={handlePicPayButtonClick}
      className="bg-neutral-900 text-neutral-300 border border-transparent hover:text-sky-300 hover:border-sky-600 focus:border-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md px-4 py-2 text-base font-medium transition-colors duration-300 shadow-custom-btn"
    >
      <i className="fa-solid fa-mug-hot mr-2"></i> Buy me a coffee
    </button>
  );
};

export default PicPayButton


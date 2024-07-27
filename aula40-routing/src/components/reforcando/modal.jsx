import { useNavigate } from 'react-router-dom';

const Modal = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // volta pra page anterior
  };

  return (
    <div className="fixed inset-0 bg-slate-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg border max-w-sm mx-auto">
        <h2 className="text-xl font-semibold">Modal</h2>
        <p className="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi sequi nobis ut fugiat quibusdam exercitationem praesentium temporibus quisquam quam optio, commodi debitis fugit quos vitae veritatis provident dolorum dolor?.</p>
        <button
          className="mt-4 px-4 py-2 bg-sky-500 text-white rounded"
          onClick={handleClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;
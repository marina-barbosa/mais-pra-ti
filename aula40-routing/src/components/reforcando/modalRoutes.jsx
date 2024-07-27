import { useLocation } from 'react-router-dom';
import Modal from './modal';

const ModalRoutes = () => {
  const location = useLocation();

  return (
    <div>
      <h1>background do modal</h1>
      {location.pathname === '/modal' && <Modal />}
    </div>
  );
};
export default ModalRoutes;
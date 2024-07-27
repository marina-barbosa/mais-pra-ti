
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Gallery } from '../../gallery'
import { Profile } from '../../profile'
import { Settings } from '../../settings'


const Rotas = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={900}
        classNames="fade"
      >

        <Routes location={location}>
          <Route path="/" Component={Gallery} />
          <Route path="/profile" Component={Profile} />
          <Route path="/settings" Component={Settings} />
        </Routes>

      </CSSTransition>
    </TransitionGroup>
  );
};

export default Rotas;
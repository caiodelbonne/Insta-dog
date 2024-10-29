import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

// const ProtectedRouter = ({ children }) => {
//   const { login } = React.useContext(UserContext);
//   return login ? children : <Navigate to="/login" />;
// };
// nao manda p login 1 >
const ProtectedRouter = ({ children }) => {
  const { login } = React.useContext(UserContext);
  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }
};
export default ProtectedRouter;

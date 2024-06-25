import { LOGIN_ROUTE } from '../../constants/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../../redux/user/userSelectors';

const PrivateRoute = ({ children, navigateTo }) => {
  const authenticated = useSelector(selectIsAuthenticated);
  console.log(authenticated);

  return authenticated ? children : <Navigate to={navigateTo} replace />;
};

export default PrivateRoute;

import { LOGIN_ROUTE } from '../../constants/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../../redux/user/userSelectors';

const RestrictedRoute = ({ children, navigateTo = LOGIN_ROUTE }) => {
  const authenticated = useSelector(selectIsAuthenticated);
  return authenticated ? <Navigate to={navigateTo} replace /> : children;
};

export default RestrictedRoute;

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsAuthenticated,
  selectIsRefreshing,
} from './redux/user/userSelectors';
import RestrictedRoutes from './routes/RestrictedRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import { refreshUser } from './redux/user/userOperations';

export const App = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    setIsFirstRender(false);
  }, [dispatch]);

  if (isRefreshing || isFirstRender) return null;

  return isAuthenticated ? <PrivateRoutes /> : <RestrictedRoutes />;
};

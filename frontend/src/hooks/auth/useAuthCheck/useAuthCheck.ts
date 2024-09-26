import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../../../enum/userRole';

interface AuthCheckProps {
  allowedRoles: UserRole[];
}

export const useAuthCheck = ({ allowedRoles }: AuthCheckProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem('role') as UserRole;
    if (storedRole) {
      setIsAuthenticated(true);

      if (allowedRoles.includes(storedRole)) {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
        navigate('/not-authorized');
      }
    } else {
      setIsAuthenticated(false);
      navigate('/sign-in');
    }
  }, [allowedRoles, navigate]);

  return { isAuthenticated, isAuthorized };
};

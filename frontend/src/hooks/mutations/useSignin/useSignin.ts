import { useMutation } from '@tanstack/react-query';
import { signin, SigninFormData } from '../../../services/api/signinApi';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../../../enum/userRole';

export const useSignin = () => {
  const navigate = useNavigate();

  const { mutate, isPending, error, reset, isError } = useMutation({
    mutationKey: ['signin'],
    mutationFn: async (data: SigninFormData) => {
      return await signin(data);
    },
    onSuccess: (responseData) => {
      const userRole = responseData.role;
      localStorage.setItem('role', userRole);
      if (userRole === UserRole.Teacher) {
        navigate('/teacher', {state: {userRole: UserRole.Teacher}, replace: true});
      } else if (userRole === UserRole.Student) {
        navigate('/student', {state: {userRole: UserRole.Student}, replace: true});
      }
    },
  });

  const errorMessage = error ? error.message : null;

  return {
    isPending,
    isError,
    errorMessage,
    mutate,
    reset,
  };
};

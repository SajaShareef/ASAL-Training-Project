import { useMutation } from '@tanstack/react-query';
import { signup, SignupFormData } from '../../../services/api/signupApi';
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
  const navigate = useNavigate();
  const { mutate, isPending, error, reset, isError } = useMutation({
    mutationKey: ['signUp'],
    mutationFn: async (data: SignupFormData) => {
      return await signup(data);
    },
    onSuccess:()=> {
      navigate ('/sign-in');
    }
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
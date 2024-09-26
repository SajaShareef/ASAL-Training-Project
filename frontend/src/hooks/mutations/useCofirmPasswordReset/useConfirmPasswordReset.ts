import { useMutation } from '@tanstack/react-query';
import { confirmPasswordReset, ConfirmPasswordResetFormData } from '../../../services/api/confirmPasswordResetApi';
import { useNavigate } from 'react-router-dom';


export const useConfirmPasswordReset = () => {
  const navigate = useNavigate();
  const { mutate, isPending, error, reset, isError } = useMutation({
    mutationKey: ['resetPassword'],
    mutationFn: async (data: ConfirmPasswordResetFormData) => {
      return await confirmPasswordReset(data);
    },
    onSuccess:()=>{
      navigate('/sign-in');
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
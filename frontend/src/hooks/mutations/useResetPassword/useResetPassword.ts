import { useMutation } from '@tanstack/react-query';
import { resetPassword, resetPasswordFormData } from '../../../services/api/resetPasswordApi';


export const useResetPassword = () => {
  const { mutate, isPending, error, reset, isError } = useMutation({
    mutationKey: ['resetPassword'],
    mutationFn: async (data: resetPasswordFormData) => {
      return await resetPassword(data);
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
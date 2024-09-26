import { useMutation } from '@tanstack/react-query';
import { sendEmail, SendEmailFormData } from '../../../services/api/sendEmailApi';


export const useSendEmail = () => {
  const { mutate, isPending, error, reset, isError } = useMutation({
    mutationKey: ['send-email'],
    mutationFn: async (data: SendEmailFormData) => {
      return await sendEmail(data);
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
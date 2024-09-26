import { useMutation } from '@tanstack/react-query';
import { createCourse } from '../../../services/api/courseApi';
import { CourseFormData } from '../../../components/createcourse/CreateCourse.const';

export const useCreateCourse = () => {
  const { mutate, isPending, error, reset, isError } = useMutation({
    mutationKey: ['createCourse'],
    mutationFn: async (data: CourseFormData) => {
      return await createCourse(data);
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
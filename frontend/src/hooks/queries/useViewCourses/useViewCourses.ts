import { useQuery } from '@tanstack/react-query';
import { viewCourses } from '../../../services/api/courseApi';
import { Course } from '../../../interfaces/course/ICourse';

export const useViewCourses = () => {
  const { data, isPending, error, isError, isLoading, isFetching } = useQuery<Course[]>({
    queryKey: ['view courses'],
    queryFn: async () => {
      return await viewCourses();
    },
  });

  const errorMessage = error ? error.message : null;

  return {
    isPending,
    isError,
    isLoading,
    isFetching,
    errorMessage,
    data
  };
};
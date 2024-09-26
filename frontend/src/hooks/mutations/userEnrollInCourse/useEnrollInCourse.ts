import { useMutation } from '@tanstack/react-query';
import { enrollInCourse, EnrollInCourseData } from '../../../services/api/courseApi';
import { message } from 'antd';

export const useEnrollInCourse = () => {
  const { mutate, isPending, error, reset, isError } = useMutation({
    mutationKey: ['enroll in Course'],
    mutationFn: async (data: EnrollInCourseData) => {
      return await enrollInCourse(data);
    },
    onSuccess:()=>{
      message.success('sucessfully enroll');
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
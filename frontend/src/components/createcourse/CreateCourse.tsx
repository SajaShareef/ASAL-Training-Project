import { Input } from 'antd';
import {
  ButtonContainer,
  CreateCourseContainer,
  CreateCourseHeader,
  Label,
  StyledButton,
  StyledForm,
} from './CreateCourse.style';
import { CourseFormData, CREATE_COURSE_ID } from './CreateCourse.const';
import { useCreateCourse } from '../../hooks/mutations/useCreateCourse/useCreateCourse';
import { useForm } from 'react-hook-form';
import LoadingScreen from '../loadingScreen';
import LoadingError from '../loadingerror';

const CreateCourse = () => {
  const { register } = useForm<CourseFormData>();
  const { mutate, isPending, isError, errorMessage, reset } = useCreateCourse();

  const onSubmit = (data: CourseFormData) => {
    mutate(data);
  };

  if (isPending) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <LoadingError errorMessage={errorMessage || 'An unexpected error occurred.'} onRetry={reset} />;
  }

  return (
    <CreateCourseContainer data-testid={CREATE_COURSE_ID}>
      <CreateCourseHeader>Create a New Course!</CreateCourseHeader>
      <StyledForm layout="vertical" onFinish={ onSubmit }>
        <Label name="title" label="Title:">
          <Input placeholder="Title" {...register('title')} />
        </Label>
        <Label name="description" label="Description:">
          <Input.TextArea
            rows={8}
            placeholder="Description"
            {...register('description')}
          />
        </Label>
        <ButtonContainer>
          <StyledButton type="primary" htmlType="submit" loading={isPending}>
            Create!
          </StyledButton>
        </ButtonContainer>
      </StyledForm>
    </CreateCourseContainer>
  );
};

export default CreateCourse;
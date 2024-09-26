import { Input } from 'antd';
import {
  Label,
  SignInButton,
  SigninFormContainer,
  SigninStyledForm,
  SigninTitle,
} from './SigninForm.style';
import { FC } from 'react';
import { SIGN_IN_FORM_TEST_ID, SigninFormProps } from './SigninForm.const';
import StatusRendering from '../statusRendering';
import { SigninFormData } from '../../services/api/signinApi';
import { useForm } from 'react-hook-form';
import { useSignin } from '../../hooks/mutations/useSignin/useSignin';
import { Link } from 'react-router-dom';

const SigninForm: FC<SigninFormProps> = ({ className }) => {
  const { register } = useForm<SigninFormData>();
  const {
    mutate: signin,
    isPending,
    isError,
    errorMessage,
    reset,
  } = useSignin();

  const onSubmit = (data: SigninFormData) => {
    signin(data);
  };

  return (
    <StatusRendering
      isPending={isPending}
      errorMessage={errorMessage}
      onRetry={reset}
      isError={isError}
    >
      <SigninFormContainer
        className={className}
        data-testid={SIGN_IN_FORM_TEST_ID}
      >
        <SigninTitle>Sign In</SigninTitle>
        <SigninStyledForm layout="vertical" onFinish={onSubmit}>
          <Label name="email" label="Email">
            <Input placeholder="Email" {...register('email')} />
          </Label>
          <Label name="password" label="Password">
            <Input.Password placeholder="Password" {...register('password')} />
          </Label>

          <SignInButton htmlType="submit" loading={isPending}>
            Sign In
          </SignInButton>
        </SigninStyledForm>
        <Link to="/send-email">Forgot password?</Link>
      </SigninFormContainer>
    </StatusRendering>
  );
};

export default SigninForm;

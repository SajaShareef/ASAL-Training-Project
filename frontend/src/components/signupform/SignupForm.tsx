import { FC } from 'react';
import {
  passwordRegex,
  SIGN_UP_FORM_TEST_ID,
  SignupFormProps,
} from './Signup.const';
import {
  Label,
  SignupButton,
  SignupFormContainer,
  SignupTitle,
} from './SignupForm.style';
import { Col, Form, Input, Row, Select, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { SignupFormData } from '../../services/api/signupApi';
import { useSignup } from '../../hooks/mutations/useSignup/useSignup';
import StatusRendering from '../statusRendering';
import { Link } from 'react-router-dom';

const SignupForm: FC<SignupFormProps> = ({ className }) => {
  const { register } = useForm<SignupFormData>();
  const {
    mutate: registerUser,
    isPending,
    isError,
    errorMessage,
    reset,
  } = useSignup();

  const onSubmit = (data: SignupFormData) => {
    registerUser(data);
  };
  return (
    <StatusRendering
      isPending={isPending}
      isError={isError}
      errorMessage={errorMessage}
      onRetry={reset}
    >
      <SignupFormContainer
        className={className}
        data-testid={SIGN_UP_FORM_TEST_ID}
      >
        <SignupTitle>Sign Up</SignupTitle>
        <Form layout="vertical" onFinish={onSubmit}>
          <Row gutter={16}>
            <Col span={12}>
              <Label name="firstName" label="First name">
                <Input placeholder="First Name" {...register('firstName')} />
              </Label>
            </Col>
            <Col span={12}>
              <Label name="lastName" label="Last name">
                <Input placeholder="Last Name" {...register('lastName')} />
              </Label>
            </Col>
          </Row>
          <Label name="email" label="Email">
            <Input placeholder="Email" {...register('email')} />
          </Label>
          <Label
            name="password"
            label="Password"
            validateTrigger="onChange"
            rules={[
              () => ({
                validator(_, value) {
                  if (passwordRegex.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'At least 8 chars, one uppercase letter, one lowercase letter, one number, one special character'
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Password" {...register('password')} />
          </Label>
          <Label
            name="confirmPassword"
            label="Confirm password"
            dependencies={['password']}
            validateTrigger="onChange"
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Label>
          <Label name="role" label="Role">
            <Select
              placeholder="Select your role"
              options={[
                { value: 'teacher', label: 'Teacher' },
                { value: 'student', label: 'Student' },
              ]}
              {...register('role')}
            />
          </Label>
          <SignupButton htmlType="submit" loading={isPending}>
            Sign Up
          </SignupButton>
        </Form>
        <Typography>
          Already have an account?
          <Link to="/sign-in">Sign-in</Link>
        </Typography>
      </SignupFormContainer>
    </StatusRendering>
  );
};

export default SignupForm;

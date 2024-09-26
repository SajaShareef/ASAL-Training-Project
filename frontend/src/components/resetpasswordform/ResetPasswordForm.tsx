import { Input } from 'antd';
import {
  Label,
  ResetPasswordButton,
  ResetPasswordFormContainer,
  ResetPasswordStyledForm,
  ResetPasswordTitle,
} from './ResetPasswordForm.style';
import { FC } from 'react';
import {
  RESET_PASSWORD_FORM_TEST_ID,
  ResetPasswordFormProps,
} from './ResetPasswordForm.const';
import StatusRendering from '../statusRendering';
import { useForm } from 'react-hook-form';
import { resetPasswordFormData } from '../../services/api/resetPasswordApi';
import { useResetPassword } from '../../hooks/mutations/useResetPassword/useResetPassword';
import { passwordRegex } from '../signupform/Signup.const';
import { RuleObject } from 'antd/es/form';

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({ className }) => {
  const { register } = useForm<resetPasswordFormData>();
  const {
    mutate: resetPassword,
    isPending,
    isError,
    errorMessage,
    reset
  } = useResetPassword();

  const passwordRule = (passwordRegex: RegExp) => ({
    validator(_: RuleObject, value: string) {
      if (passwordRegex.test(value)) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error(
          'At least 8 chars, one uppercase letter, one lowercase letter, one number, one special character'
        )
      );
    },
  });

  const onSubmit = (data: resetPasswordFormData) => {
    resetPassword(data);
  };
  return (
    <StatusRendering isError={isError} isPending={isPending} errorMessage={errorMessage} onRetry={reset}>
      <ResetPasswordFormContainer
        className={className}
        data-testid={RESET_PASSWORD_FORM_TEST_ID}
      >
        <ResetPasswordTitle>Reset Password</ResetPasswordTitle>
        <ResetPasswordStyledForm layout="vertical" onFinish={onSubmit}>
          <Label name="oldPassword" label="Old Password">
            <Input.Password placeholder="Old Password" {...register('oldPassword')} />
          </Label>
          <Label name="newPassword" label="New Password" validateTrigger="onChange"
            rules={[()=>passwordRule(passwordRegex)]}>
            <Input.Password
              placeholder="New Password"
              {...register('newPassword')}
            />
          </Label>

          <ResetPasswordButton htmlType="submit">
            Reset Password
          </ResetPasswordButton>
        </ResetPasswordStyledForm>
      </ResetPasswordFormContainer>
    </StatusRendering>
  );
};

export default ResetPasswordForm;
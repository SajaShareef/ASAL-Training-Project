import { Input } from 'antd';
import { FC } from 'react';
import {
  CONFIRM_PASSWORD_RESET_FORM_TEST_ID,
  ConfirmPasswordResetFormProps,
} from './ConfirmPasswordResetForm.const';
import {
  ConfirmPasswordResetFormButton,
  ConfirmPasswordResetFormContainer,
  ConfirmPasswordResetFormTitle,
  ConfirmPasswordResetStyledForm,
  Label,
} from './ConfirmPasswordResetForm.style';
import { useForm } from 'react-hook-form';
import { ConfirmPasswordResetFormData } from '../../services/api/confirmPasswordResetApi';
import { useConfirmPasswordReset } from '../../hooks/mutations/useCofirmPasswordReset/useConfirmPasswordReset';
import { RuleObject } from 'antd/es/form';
import { passwordRegex } from '../signupform/Signup.const';
import StatusRendering from '../statusRendering';

const ConfirmPasswordResetForm: FC<ConfirmPasswordResetFormProps> = ({
  className,token
}) => {

  const { register } = useForm<ConfirmPasswordResetFormData>();
  const {
    mutate: confirmPasswordReset,
    isPending,
    isError,
    errorMessage,
    reset
  } = useConfirmPasswordReset();

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

  const onSubmit = (data: ConfirmPasswordResetFormData) => {
    const dataWithToken = {...data,token};
    confirmPasswordReset(dataWithToken);
  };

  return (
    <StatusRendering isError={isError} isPending={isPending} onRetry={reset} errorMessage={errorMessage}>
      <ConfirmPasswordResetFormContainer
      className={className}
      data-testid={CONFIRM_PASSWORD_RESET_FORM_TEST_ID}
    >
      <ConfirmPasswordResetFormTitle>
        Reset Password
      </ConfirmPasswordResetFormTitle>
      <ConfirmPasswordResetStyledForm layout="vertical" onFinish={onSubmit}>
        <Label name="newPassword" label="New Password" validateTrigger="onChange"
            rules={[()=>passwordRule(passwordRegex)]}>
          <Input.Password placeholder="New Password"  {...register('newPassword')}/>
        </Label>

        <ConfirmPasswordResetFormButton htmlType="submit">
          Reset Password
        </ConfirmPasswordResetFormButton>
      </ConfirmPasswordResetStyledForm>
    </ConfirmPasswordResetFormContainer>
    </StatusRendering>
  );
};

export default ConfirmPasswordResetForm;

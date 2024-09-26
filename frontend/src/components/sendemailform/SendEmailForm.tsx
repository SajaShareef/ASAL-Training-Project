import { Input } from 'antd';
import {
  Label,
  SendEmailFormButton,
  SendEmailFormContainer,
  SendEmailStyledForm,
  SendEmailTitle,
} from './SendEmailForm.style';
import { FC } from 'react';
import StatusRendering from '../statusRendering';
import { useForm } from 'react-hook-form';
import { SEND_EMAIL_FORM_TEST_ID, SendEmailFormProps } from './SendEmailForm.const';
import { SendEmailFormData } from '../../services/api/sendEmailApi';
import { useSendEmail } from '../../hooks/mutations/useSendEmail/useSendEmail';

const SendEmailForm: FC<SendEmailFormProps> = ({ className }) => {
  const { register } = useForm<SendEmailFormData>();
  const {
    mutate: sendEmail,
    isPending,
    isError,
    errorMessage,
    reset
  } = useSendEmail();


  const onSubmit = (data: SendEmailFormData) => {
    sendEmail(data);
  };
  return (
    <StatusRendering isError={isError} isPending={isPending} errorMessage={errorMessage} onRetry={reset}>
      <SendEmailFormContainer
        className={className}
        data-testid={SEND_EMAIL_FORM_TEST_ID}
      >
        <SendEmailTitle>Send Email</SendEmailTitle>
        <SendEmailStyledForm layout="vertical" onFinish={onSubmit}>
          <Label name="email" label="email">
            <Input placeholder="Email" {...register('email')} />
          </Label>
          <SendEmailFormButton htmlType="submit">
            Send
          </SendEmailFormButton>
        </SendEmailStyledForm>
      </SendEmailFormContainer>
    </StatusRendering>
  );
};

export default SendEmailForm;
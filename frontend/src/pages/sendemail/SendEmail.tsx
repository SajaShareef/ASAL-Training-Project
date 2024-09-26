import SendEmailImg from '../../images/send-email.svg?react';
import { FC } from 'react';
import { SEND_EMAIL_TEST_ID, SendEmailProps} from './SendEmail.const';
import {
  ImgContainer,
  LeftColumn,
  RightColumn,
  SendEmailContainer,
} from './SendEmail.style';
import SendEmailForm from '../../components/sendemailform/SendEmailForm';
const SendEmail: FC<SendEmailProps> = ({ className }) => {
  return (
    <SendEmailContainer className={className} data-testid={SEND_EMAIL_TEST_ID}>
      <LeftColumn span="12">
        <SendEmailForm/>
      </LeftColumn>
      <RightColumn span="12">
        <ImgContainer>
          <SendEmailImg />
        </ImgContainer>
      </RightColumn>
    </SendEmailContainer>
  );
};

export default SendEmail;

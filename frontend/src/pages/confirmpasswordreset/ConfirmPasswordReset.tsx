import ForgetPassword from '../../images/Forgot password-pana.svg?react';
import { FC } from 'react';
import {
  ImgContainer,
  LeftColumn,
  RightColumn,
  ConfirmPasswordResetContainer,
} from './ConfirmPasswordReset.style';
import { CONFIRM_PASSWORD_RESET_TEST_ID, ConfirmPasswordResetProps } from './ConfirmPasswordReset.const';
import ConfirmPasswordResetForm from '../../components/confirmpasswordresetform';
import { useSearchParams } from 'react-router-dom';
const ConfirmPasswordReset: FC<ConfirmPasswordResetProps> = ({ className }) => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  return (
    <ConfirmPasswordResetContainer className={className} data-testid={CONFIRM_PASSWORD_RESET_TEST_ID}>
      <LeftColumn span="12">
        <ConfirmPasswordResetForm token={token}/>
      </LeftColumn>
      <RightColumn span="12">
        <ImgContainer>
          <ForgetPassword />
        </ImgContainer>
      </RightColumn>
    </ConfirmPasswordResetContainer>
  );
};

export default ConfirmPasswordReset;

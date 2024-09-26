import PasswordReset from '../../images/reset-password.svg?react';
import { FC } from 'react';
import { ImgContainer, LeftColumn, ResetContainer, RightColumn } from './ResetPassword.style';
import { RESET_PASSWORD_TEST_ID, ResetPasswordProps } from './ResetPassword.const';
import ResetPasswordForm from '../../components/resetpasswordform/ResetPasswordForm';
import LoadingScreen from '../../components/loadingScreen';
import { useAuthCheck } from '../../hooks/auth/useAuthCheck/useAuthCheck';
import { UserRole } from '../../enum/userRole';

const ResetPassword: FC<ResetPasswordProps> = ({ className }) => {
    const { isAuthenticated, isAuthorized} = useAuthCheck({ allowedRoles: [UserRole.Teacher] });

  if (!isAuthenticated || !isAuthorized) {
    return <LoadingScreen/>;
  }

  return (
    <ResetContainer className={className} data-testid={RESET_PASSWORD_TEST_ID}>
      <LeftColumn span="12">
        <ResetPasswordForm/>
      </LeftColumn>
      <RightColumn span="12">
        <ImgContainer>
          <PasswordReset />
        </ImgContainer>
      </RightColumn>
    </ResetContainer>
  );
};

export default ResetPassword;

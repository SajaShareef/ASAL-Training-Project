import { ImgContainer, LeftColumn, RightColumn, SignupContainer } from './Signup.style';
import SignUpImg from '../../images/sign-up.svg?react';
import { FC } from 'react';
import SignupForm from '../../components/signupform/SignupForm';
import { SIGN_UP_TEST_ID, SignupProps } from './Signup.const';

const Signup: FC<SignupProps>= ({className})=> {
  return (
    <SignupContainer className={className} data-testid={SIGN_UP_TEST_ID}>
      <LeftColumn span="12">
        <SignupForm/>
      </LeftColumn>
      <RightColumn span="12">
        <ImgContainer>
          <SignUpImg />
        </ImgContainer>
      </RightColumn>
    </SignupContainer>
  );
};

export default Signup;
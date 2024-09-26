import SigninImg from '../../images/sign-in.svg?react';
import { FC } from 'react';
import { SIGN_IN_TEST_ID, SignInProps } from './Signin.const';
import {
  ImgContainer,
  LeftColumn,
  RightColumn,
  SigninContainer,
} from './Signin.style';
import SignInForm from '../../components/signinform/SigninForm';
const Signin: FC<SignInProps> = ({ className }) => {
  return (
    <SigninContainer className={className} data-testid={SIGN_IN_TEST_ID}>
      <LeftColumn span="12">
        <SignInForm/>
      </LeftColumn>
      <RightColumn span="12">
        <ImgContainer>
          <SigninImg />
        </ImgContainer>
      </RightColumn>
    </SigninContainer>
  );
};

export default Signin;

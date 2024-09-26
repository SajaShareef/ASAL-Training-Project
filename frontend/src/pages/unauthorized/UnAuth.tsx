import { BackButton, UnAuthorizedContainer, UnAuthorizedImgContainer } from './UnAuth.style';
import UnAuthImg from '../../images/403-error-forbidden-animate.svg?react';

const UnAuth = () => {
  return (
    <UnAuthorizedContainer>
      <UnAuthorizedImgContainer>
        <UnAuthImg/>
      </UnAuthorizedImgContainer>
      <BackButton to="/">Back</BackButton>
    </UnAuthorizedContainer>
  );
};

export default UnAuth;
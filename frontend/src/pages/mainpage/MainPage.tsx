import { Col, Row } from 'antd';
import Navbar from '../../components/navbar';
import MainImg from '../../images/main-page-img.svg?react';
import {
  MainPageContainer,
  MainPageImgContainer,
  MainPageContent,
  MainPageTitle,
  MainPageDescription,
  SignupButton,
} from './MainPage.style';
import { FC } from 'react';
import { MAIN_PAGE_TEST_ID, MainPageProps } from './MainPage.const';
const MainPage:FC<MainPageProps> = ({className}) => {
  return (
    <MainPageContainer className={className} data-testid={MAIN_PAGE_TEST_ID}>
      <Navbar />
      <Row>
        <Col md={12}>
          <MainPageContent>
            <MainPageTitle>HopeLearnBridge</MainPageTitle>
            <MainPageDescription>
              Welcome to our platform, where students can explore and enroll in
              a variety of courses tailored to their learning needs. Our system
              empowers teachers to create courses and lessons, bridging the gap
              caused by online learning. Start exploring and enroll today to
              take charge of your education!
            </MainPageDescription>
            <SignupButton to="sign-up">Register Now!</SignupButton>
          </MainPageContent>
        </Col>
        <Col md={12}>
          <MainPageImgContainer>
            <MainImg />
          </MainPageImgContainer>
        </Col>
      </Row>
    </MainPageContainer>
  );
};

export default MainPage;

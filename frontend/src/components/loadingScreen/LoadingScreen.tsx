import { FC } from 'react';
import { Loading, LoadingContainer} from './LoadingScreen.style';
import { LOADING_SCREEN_TEST_ID, LoadingScreenProps } from './LoadingScreen.const';

const LoadingScreen:FC<LoadingScreenProps> = ({className})=>{
  return (
    <LoadingContainer className={className} data-testid={LOADING_SCREEN_TEST_ID}>
      <Loading size="large"/>
    </LoadingContainer>
  );
};

export default LoadingScreen;
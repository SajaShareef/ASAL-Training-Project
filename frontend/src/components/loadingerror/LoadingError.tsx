import { FC } from 'react';
import { Alert, Button } from 'antd';
import { LoadingErrorProps } from './LoadingError.const';
import { LoadingErrorContainer } from './LoadingError.style';

const LoadingError: FC<LoadingErrorProps> = ({ errorMessage, onRetry }) => {
  return (
    <LoadingErrorContainer>
      <Alert message={errorMessage} type="error" showIcon />
      <Button type="primary" onClick={onRetry}>
        Try Again
      </Button>
    </LoadingErrorContainer>
  );
};

export default LoadingError;
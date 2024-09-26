import { FC } from 'react';
import LoadingScreen from '../loadingScreen';
import LoadingError from '../loadingerror/LoadingError';
import { StatusRenderingProps } from './StatusRendering.const';
import { StatusRenderingContainer } from './StatusRendering.style';

const StatusRendering: FC<StatusRenderingProps> = ({
  isPending,
  isError,
  errorMessage,
  onRetry = () => {},
  children,
}) => {
  if (isPending) {
    return <LoadingScreen />;
  }

  if (isError) {
    return (
      <LoadingError
        errorMessage={errorMessage || 'An unexpected error occurred.'}
        onRetry={onRetry}
      />
    );
  }

  return <StatusRenderingContainer>{children}</StatusRenderingContainer>;
};

export default StatusRendering;
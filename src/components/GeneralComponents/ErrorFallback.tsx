import React, {FC} from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {globalLocalization} from 'services/GlobalUtils';

interface ErrorBoundaryProps {
  error: {
    message: string;
  };
  resetErrorBoundary: () => void;
}

const ErrorFallback: FC<ErrorBoundaryProps> = ({error, resetErrorBoundary}) => {
  const {language} = useAppSelector(selectUserConfiguration);
  const {ERROR, TRY} = globalLocalization(language);

  return (
    <>
      <Text>{ERROR}</Text>
      <div>{error.message}</div>
      <Button onClick={resetErrorBoundary}>{TRY}</Button>
    </>
  );
};

const Text = styled.div`
  margin: 0.75rem 0;
`;

export default ErrorFallback;

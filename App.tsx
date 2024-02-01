import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import {HomeScreen} from './src/screens/HomeScreen';
import {Fallback} from './src/components';

export const App = (): React.JSX.Element => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <HomeScreen />
    </ErrorBoundary>
  );
};

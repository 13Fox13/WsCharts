import {HomeScreen} from './screens/HomeScreen';
import ErrorBoundary from 'react-native-error-boundary';
import {Fallback} from './components/fallback/Fallback';

export const App = (): React.JSX.Element => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <HomeScreen />
    </ErrorBoundary>
  );
};

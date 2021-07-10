import { Routing } from '../routing';
import { AppProvider } from '../context';
import { PrimaryBackground } from '../layout';

export const App = (): JSX.Element => (
  <AppProvider>
    <PrimaryBackground>
      <Routing />
    </PrimaryBackground>
  </AppProvider>
);

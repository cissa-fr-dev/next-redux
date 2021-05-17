import GlobalStyles from '../styles/global';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <GlobalStyles />
      </Provider>
    </>
  );
};

export default MyApp;

import Head from 'next/head'
import store, { wrapper } from "../redux/store";
import { Provider as ReduxProvider } from "react-redux";
import AppHeader from '../components/AppHeader';
import '../styles/globals.css'

const MyApp = ({ Component, ...rest }) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;

    return (
        <ReduxProvider store={store}>
          <Head>
              <link rel="shortcut icon" href="/images/icons/favicon.svg" />
          </Head>
          <AppHeader />
          <Component {...pageProps} />
        </ReduxProvider>
    );
}

export default MyApp;

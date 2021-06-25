import { ThemeProvider } from 'next-themes';
import PropTypes from 'prop-types';
import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEOConfig from '@/config/next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEOConfig} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
export default MyApp;

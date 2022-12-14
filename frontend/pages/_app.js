import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme';

// React.useLayoutEffect = React.useEffect

import AOS from 'aos';

import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import 'assets/scss/index.scss';

import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';

// if (typeof window === 'undefined') {
//   global.window = {};
// }
//
// if (typeof document === 'undefined') {
//   global.document = {};
// }

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  });

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        {/*<link rel="shortcut icon" href="/favicon.ico" />*/}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="LRE is a recognized leader in water resources throughout the western United States. Divisions in Colorado, Arizona, Texas, Nebraska & Arizona."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://lrewater.com/social.png"
        />
        <meta
          property="og:title"
          content="Leonard Rice Engineers, Inc - Water Consultation Services"
        />
        <meta
          property="og:description"
          content="LRE is a recognized leader in water resources throughout the western United States. Divisions in Colorado, Arizona, Texas, Nebraska & Arizona."
        />
        <meta property="og:url" content="https://lrewater.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,300,300i,400,400i,700,700i,900,900i&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap"
          rel="stylesheet"
        />
        <title>
          Leonard Rice Engineers, Inc - Water Consultation Services
        </title>
        <script
          src="https://kit.fontawesome.com/4c273e6d43.js"
          crossOrigin="anonymous"
        />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

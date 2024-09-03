import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import sal from 'sal.js';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion'

import Loader from '../components/Loader';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap');
}
import '../styles/index.scss';
import '../styles/indexGlobal.css';
import { store } from '../redux/store';
import Theme from '../components/common/theme';
import { MouseMoveProvider } from '../contexts/mouse-move-context';
import SEO from '../components/seo';


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      sal({ threshold: 0.1, once: true });
    }
  }, [loading, router.asPath]);
  return (
    <React.Fragment>
      <SEO font="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Spartan:wght@400;500;600;700;800&display=swap" />
        <Provider store={store}>
          <ThemeProvider defaultTheme="light">
            <MouseMoveProvider>
            <AnimatePresence mode="wait" onExitComplete={() => sal()}>
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
            </MouseMoveProvider>
            <Theme />
          </ThemeProvider>
        </Provider>
    </React.Fragment>
  )
}

export default MyApp;

import { useEffect } from 'react';
import ReactGA from 'react-ga';

function useGAPageView() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
}

export default useGAPageView;

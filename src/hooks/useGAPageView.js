import { useEffect } from 'react';
import ReactGA from "react-ga";

function useGAPageView(props) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
}

export default useGAPageView;

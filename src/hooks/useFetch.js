import { useState, useEffect, useRef } from 'react';

const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(
    () => () => {
      isMounted.current = false;
    },
    [],
  );

  useEffect(() => {
    setState({
      loading: true,
      error: null,
      data: null,
    });

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      });
  }, [url]);

  return state;
};

export default useFetch;

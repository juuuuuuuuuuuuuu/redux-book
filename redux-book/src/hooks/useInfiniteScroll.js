import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function useInfiniteScroll(callback) {
  const { items, startIndex, status} = useSelector(state => state);

  function scroll() {
      const wHeight = window.innerHeight;
      const dHeight = document.body.scrollHeight;
      const scrollTop = window.scrollY;

      if (scrollTop === dHeight - wHeight && status !== 'loading') {
        callback();
      }
  }

  useEffect(() => {
    window.addEventListener('scroll', scroll);

    return () =>  window.removeEventListener('scroll', scroll);
  }, [items, startIndex, status]);
}

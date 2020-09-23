import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import * as Action from '../actions';

function Result() {
  const { items} = useSelector(state => state);
  const { search } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Action.getData(search));
  }, [dispatch]);

  return (
    <ul>
       {items.map((item, i) => (
        <li key={i}>
          <span>{item.volumeInfo.title}</span>
          <img src={item.volumeInfo.imageLinks.smallThumbnail} />
        </li>
       ))}
    </ul>
  )
}
export default Result;
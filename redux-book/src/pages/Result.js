import React, { useEffect } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import useForm from '../hooks/useForm';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as Action from '../actions';

function Result() {
  const { items, startIndex } = useSelector((state) => state);
  const { search } = useLocation();
  const dispatch = useDispatch();

  const { handleChange, handleSubmit } = useForm();

  const func = () => {
    dispatch(Action.getData({ search, startIndex }));
  };

  useInfiniteScroll(() => func());

  useEffect(() => {
    dispatch(Action.getData({ search, startIndex }));
  }, []);

  return (
    <div>
      <div>
        <Input onChange={handleChange} />
        <Button label="검색" onClick={handleSubmit} />
      </div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <span>{item.volumeInfo.title}</span>
            <img
              src={
                (item.volumeInfo.imageLinks &&
                  item.volumeInfo.imageLinks.smallThumbnail) ||
                null
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Result;

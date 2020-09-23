import { stringify, stringifyUrl } from 'query-string';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput } from '../actions';

export default function useForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  function handleChange(q) {
    dispatch(changeInput({ q }));
  }

  function handleSubmit() {
    // 페이지 이동
    const path = stringifyUrl({
        url: '/result',
        query: state
    });

    history.push(path);
  }

  return {
    handleChange,
    handleSubmit
  }
}
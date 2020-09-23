import { handleActions } from 'redux-actions';
import { FETCH_SUCCESS, FETCH_FAILTURE, CHANGE_INPUT} from '../actions';

export const Status = {
  Idel: 'idle',
  Loading: 'loading',
  Sucess: 'success',
  Failture: 'failture',
}

const initialState = {
  items: [],
  q: '',
  totalItems: 0,
  startIndex: 0,
  status: Status.Idel
}

// 리듀서
export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    return {
      ...state,
      q: action.payload.q,
    }
  },
  [FETCH_SUCCESS]: (state, action) => {
   console.log('((', action.payload.items)
   return {
     ...state,
     items: action.payload.items,
   }
   // 페이지 이동..!
  },
  [FETCH_FAILTURE]: (state, payload) => {
    console.log(payload)
  },
}, initialState);

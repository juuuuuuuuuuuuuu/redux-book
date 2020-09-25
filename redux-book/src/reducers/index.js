import { handleActions } from 'redux-actions';
import { FETCH_LOADING, FETCH_SUCCESS, FETCH_FAILTURE, CHANGE_INPUT} from '../actions';

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
  [FETCH_LOADING]: (state, action) => {
    return {
      ...state,
      status: Status.Loading,
    }
  },
  [FETCH_SUCCESS]: (state, action) => {
   const { items, totalItems } = action.payload;
   return {
     ...state,
     status: Status.Sucess,
     items: state.items.concat(items),
     startIndex: state.startIndex + items.length,
     totalItems: totalItems,
   }
  },
  [FETCH_FAILTURE]: (state, payload) => {
    return {
      ...state,
      status: Status.Failture,
    }
  },
}, initialState);

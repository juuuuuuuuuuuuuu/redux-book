import { createAction } from 'redux-actions';

// 액션 생성
export const CHANGE_INPUT = '@book/changeInput';
export const GET_DATA = '@book/getData';
export const FETCH_LOADING = '@fetch/loading';
export const FETCH_SUCCESS = '@fetch/success';
export const FETCH_FAILTURE = '@fetch/failture';

// 액션함수 생성
export const changeInput = createAction(CHANGE_INPUT, q => q);
export const getData = createAction(GET_DATA, data => data);
export const fetchLoading = createAction(FETCH_LOADING, data => data);
export const fetchSuccess = createAction(FETCH_SUCCESS, resolve => resolve());
export const fetchFailture = createAction(FETCH_FAILTURE, resolve => resolve());

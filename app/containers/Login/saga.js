import { take, call, put, select,takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {  LOGIN_SUBMIT } from './constants';
import { makeSelectLoginInput } from './selectors';
import { setAuthUser } from './actions';

export function* logniSubmitApi() {
  const loginInputObj = yield select(makeSelectLoginInput());

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      loginInputObj
    ),
  };
 // const requestURL = `https://jsonplaceholder.typicode.com/posts`;
  // const requestURL = `http://localhost:4000/login`;
  // const responseUsers = yield call(request, requestURL,options);
  // console.log("after submit",responseUsers);
  yield put(setAuthUser(loginInputObj));

}
export default function* loginSaga()  {
  // yield callApi();
  yield takeLatest(LOGIN_SUBMIT, logniSubmitApi);

};
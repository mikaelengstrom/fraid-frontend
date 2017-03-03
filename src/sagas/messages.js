import { put } from 'redux-saga/effects';

import {
  addMessage,
} from '../actions/messages';


export function* errorBackendDown() {
  yield put(addMessage({
    message: 'Could not connect to backend server. Please try again later',
    status: 'error',
  }));
}

export function* errorInvalidGameId() {
  yield put(addMessage({
    message: 'Bad game id',
    status: 'error',
  }));
}

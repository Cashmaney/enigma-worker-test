/**
 * Gets the repositories of the user from Github
 */

import { all, call, put, takeEvery, take } from 'redux-saga/effects';
import {
  LOAD_ADDRESS,
  STOP_WORKER,
  START_WORKER,
  REGISTER_WORKER,
  LOAD_STATUS,
  LOAD_BALANCE,
} from '../App/constants';
import {
  statusLoaded,
  statusLoadingError,
  balanceLoaded,
  addressLoaded,
  addressLoadingError,
} from '../App/actions';

import request from '../../utils/request';

/**
 * Github repos request/response handler
 */
export function* getEtherAddress() {
  const requestURL = `http://localhost:9876/ethereum/address`;
  try {
    // Call our request helper (see 'utils/request')
    const addr = yield call(request, requestURL);
    yield put(addressLoaded(addr));
  } catch (err) {
    yield put(addressLoadingError(err));
  }
}

/**
 * Github repos request/response handler
 */
export function* getStatus() {
  const requestURL = `http://localhost:9876/worker/status`;
  try {
    // Call our request helper (see 'utils/request')
    const addr = yield call(request, requestURL);
    yield put(statusLoaded(addr));
  } catch (err) {
    yield put(statusLoadingError(err));
  }
}

/**
 * Github repos request/response handler
 */
export function* getBalance() {
  const requestURL = `http://localhost:9876/ethereum/balance`;
  try {
    // Call our request helper (see 'utils/request')
    const balance = yield call(request, requestURL);
    yield put(balanceLoaded(parseFloat(balance).toFixed(3)));
  } catch (err) {
    yield put(statusLoadingError(err));
  }
}

/**
 * Github repos request/response handler
 */
export function* stopWorker() {
  const requestURL = `http://localhost:9876/worker/stop`;

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL, { method: 'POST' });
  } catch (err) {
    yield put(addressLoadingError(err));
  }
}

/**
 * Github repos request/response handler
 */
export function* startWorker() {
  const requestURL = `http://localhost:9876/worker/start`;

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL, { method: 'POST' });
  } catch (err) {
    yield put(addressLoadingError(err));
  }
}

export function* register() {
  const requestURL = `http://localhost:9876/worker/register`;
  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL, { method: 'POST' });
  } catch (err) {
    yield put(addressLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield all([
    yield takeEvery(LOAD_ADDRESS, getEtherAddress),
    yield takeEvery(REGISTER_WORKER, register),
    yield takeEvery(START_WORKER, startWorker),
    yield takeEvery(STOP_WORKER, stopWorker),
    yield takeEvery(LOAD_STATUS, getStatus),
    yield takeEvery(LOAD_BALANCE, getBalance),
  ]);
}

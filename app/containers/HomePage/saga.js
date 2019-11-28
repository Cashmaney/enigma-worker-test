/**
 * Gets the repositories of the user from Github
 */

import { all, call, put, select, takeEvery, take } from 'redux-saga/effects';
import { LOAD_REPOS, LOAD_ADDRESS, STOP_WORKER, START_WORKER, REGISTER_WORKER, LOAD_STATUS } from 'containers/App/constants';
import {
  reposLoaded,
  repoLoadingError,
  addressLoaded,
  addressLoadingError,
} from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import { statusLoaded, statusLoadingError } from '../App/actions';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Github repos request/response handler
 */
export function* getEtherAddress() {
  const requestURL = `http://localhost:9876/ethereum/address`;
  console.log(`here2`)
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
  console.log(`here`)
  try {
    // Call our request helper (see 'utils/request')
    const addr = yield call(request, requestURL);
    console.log(`addressloaded: ${addr}`)
    yield put(statusLoaded(addr));
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
    yield takeEvery(LOAD_REPOS, getRepos),
    yield takeEvery(REGISTER_WORKER, register),
    yield takeEvery(START_WORKER, startWorker),
    yield takeEvery(STOP_WORKER, stopWorker),
    yield takeEvery(LOAD_STATUS, getStatus),
  ]);
}

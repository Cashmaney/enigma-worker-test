/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_ADDRESS_SUCCESS,
  LOAD_ADDRESS_ERROR,
  LOAD_ADDRESS,
  STOP_WORKER,
  START_WORKER,
  REGISTER_WORKER, LOAD_STATUS_SUCCESS, LOAD_STATUS, LOAD_STATUS_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}

/**
 * Load ethereum address. this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_ADDRESS
 */
export function loadAddress() {
  return {
    type: LOAD_ADDRESS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} address The ethereum address
 *
 * @return {object}      An action object with a type of LOAD_ADDRESS_SUCCESS passing the address
 */
export function addressLoaded(address) {
  return {
    type: LOAD_ADDRESS_SUCCESS,
    address,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_ADDRESS_ERROR passing the error
 */
export function addressLoadingError(error) {
  return {
    type: LOAD_ADDRESS_ERROR,
    error,
  };
}

/**
 * Load ethereum address. this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_ADDRESS
 */
export function loadStatus() {
  return {
    type: LOAD_STATUS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} status The worker status
 *
 * @return {object}      An action object with a type of LOAD_ADDRESS_SUCCESS passing the address
 */
export function statusLoaded(status) {
  return {
    type: LOAD_STATUS_SUCCESS,
    status,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_ADDRESS_ERROR passing the error
 */
export function statusLoadingError(error) {
  return {
    type: LOAD_STATUS_ERROR,
    error,
  };
}

/**
 * Load ethereum address. this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_ADDRESS
 */
export function stopWorker() {
  return {
    type: STOP_WORKER,
  };
}

/**
 * Load ethereum address. this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_ADDRESS
 */
export function startWorker() {
  return {
    type: START_WORKER,
  };
}

/**
 * Load ethereum address. this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_ADDRESS
 */
export function registerWorker() {
  return {
    type: REGISTER_WORKER,
  };
}

/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_ADDRESS,
  LOAD_ADDRESS_ERROR,
  LOAD_ADDRESS_SUCCESS, LOAD_STATUS, LOAD_STATUS_SUCCESS, LOAD_STATUS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
    status: 'OFFLINE',
    ethereumAddress: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;
      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      case LOAD_ADDRESS:
        draft.loading = true;
        draft.error = false;
        draft.userData.ethereumAddress = false;
        break;

      case LOAD_ADDRESS_SUCCESS:
        draft.userData.ethereumAddress = action.address;
        draft.loading = false;
        break;

      case LOAD_ADDRESS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_STATUS:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_STATUS_SUCCESS:
        draft.userData.status = action.status;
        draft.loading = false;
        break;

      case LOAD_STATUS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;

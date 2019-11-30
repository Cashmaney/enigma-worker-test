/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_BALANCE = 'boilerplate/App/LOAD_BALANCE';
export const LOAD_BALANCE_SUCCESS = 'boilerplate/App/LOAD_BALANCE_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';

export const LOAD_ADDRESS = 'boilerplate/App/LOAD_ADDRESS';
export const LOAD_ADDRESS_SUCCESS = 'boilerplate/App/LOAD_ADDRESS_SUCCESS';
export const LOAD_ADDRESS_ERROR = 'boilerplate/App/LOAD_ADDRESS_ERROR';

export const LOAD_STATUS = 'boilerplate/App/LOAD_STATUS';
export const LOAD_STATUS_SUCCESS = 'boilerplate/App/LOAD_STATUS_SUCCESS';
export const LOAD_STATUS_ERROR = 'boilerplate/App/LOAD_STATUS_ERROR';

export const STOP_WORKER = 'boilerplate/App/STOP_WORKER';
export const START_WORKER = 'boilerplate/App/START_WORKER';
export const REGISTER_WORKER = 'boilerplate/App/REGISTER_WORKER';

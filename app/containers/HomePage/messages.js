/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  mainPageHeader: {
    id: `${scope}.main_page.header`,
    defaultMessage: 'Enigma Secret Node Management Page',
  },
  yourEthAddress: {
    id: `${scope}.main_page.address`,
    defaultMessage: 'This is YOUR ethereum address:',
  },
  status: {
    id: `${scope}.main_page.status`,
    defaultMessage: 'Current worker status:',
  },
  balance: {
    id: `${scope}.main_page.balance`,
    defaultMessage: 'Balance is:',
  },
  startWorker: {
    id: `${scope}.main_page.start`,
    defaultMessage: 'Start worker',
  },
  stopWorker: {
    id: `${scope}.main_page.stop`,
    defaultMessage: 'Stop worker',
  },
  register: {
    id: `${scope}.main_page.register`,
    defaultMessage: 'Register',
  },
});

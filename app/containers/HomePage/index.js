/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
  makeSelectStatus,
  makeSelectAddress,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import H3 from 'components/H3';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import Button from 'components/Button';
import { loadRepos, loadAddress, startWorker, stopWorker, registerWorker, loadStatus } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
  address,
  status,
  onLoad,
  startWorker,
  stopWorker,
  registerWorker,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    onLoad();
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Enigma Secret Node Management App"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.mainPageHeader} />
          </H2>
          <H2>
            <FormattedMessage {...messages.yourEthAddress} /> {address || 'N/A'}
          </H2>
          <H3>
            <FormattedMessage {...messages.balance} /> 0 ETH
          </H3>
          <p>
            <FormattedMessage {...messages.status} /> {status}
          </p>
        </CenteredSection>
        <Button onClick={startWorker}>
          <FormattedMessage {...messages.startWorker} />
        </Button>
        <Button onClick={stopWorker}>
          <FormattedMessage {...messages.stopWorker} />
        </Button>
        <Button onClick={registerWorker}>
          <FormattedMessage {...messages.register} />
        </Button>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onLoad: PropTypes.func,
  status: PropTypes.string,
  address: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  stopWorker: PropTypes.func,
  startWorker: PropTypes.func,
  registerWorker: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  address: makeSelectAddress(),
  status: makeSelectStatus(),
  // status: makeSelectStatus(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(loadAddress());
      dispatch(loadStatus());
    },
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    startWorker: () => {
      dispatch(startWorker());
    },
    stopWorker: () => {
      dispatch(stopWorker());
    },
    registerWorker: () => {
      dispatch(registerWorker());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);

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
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Row,
} from '@bootstrap-styled/v4';
import {
  makeSelectRepos,
  makeSelectStatus,
  makeSelectAddress,
  makeSelectBalance,
} from '../App/selectors';
import H2 from '../../components/H2';
import CenteredSection from './CenteredSection';
import messages from './messages';
import {
  loadAddress,
  startWorker,
  stopWorker,
  registerWorker,
  loadStatus,
  loadBalance,
} from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  address,
  status,
  onLoad,
  balance,
  // eslint-disable-next-line no-shadow
  startWorker,
  // eslint-disable-next-line no-shadow
  stopWorker,
  // eslint-disable-next-line no-shadow
  registerWorker,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    onLoad();
  }, []);

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Enigma Secret Node Management App" />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.mainPageHeader} />
          </H2>
        </CenteredSection>
        <Row>
          <Col sm={{ size: 6 }}>
            <Card className="text-center">
              <CardTitle>
                {' '}
                <FormattedMessage {...messages.yourEthAddress} />{' '}
              </CardTitle>
              <CardText className="text-center"> {address || 'N/A'} </CardText>
            </Card>
          </Col>
          <Col sm={{ size: 6 }}>
            <Card>
              <CardTitle className="text-center">
                <FormattedMessage {...messages.balance} />
              </CardTitle>
              <CardText className="text-center">{balance} ETH</CardText>
            </Card>
          </Col>
        </Row>
        <Card width="48%" className="text-center" block>
          <CardTitle>
            <FormattedMessage {...messages.status} />
          </CardTitle>
          <CardText className="text-center">{status}</CardText>
        </Card>
        <H2>Shit you can do</H2>
        <Button outline color="success" onClick={startWorker}>
          <FormattedMessage {...messages.startWorker} />
        </Button>
        <Button outline color="danger" onClick={stopWorker}>
          <FormattedMessage {...messages.stopWorker} />
        </Button>
        <Button outline color="info" onClick={registerWorker}>
          <FormattedMessage {...messages.register} />
        </Button>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  onLoad: PropTypes.func,
  status: PropTypes.string,
  address: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  stopWorker: PropTypes.func,
  startWorker: PropTypes.func,
  registerWorker: PropTypes.func,
  balance: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  address: makeSelectAddress(),
  status: makeSelectStatus(),
  balance: makeSelectBalance(),
  // status: makeSelectStatus(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(loadAddress());
      dispatch(loadStatus());
      dispatch(loadBalance());
    },
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
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

import React, { Component, Fragment } from 'react';
import { Routes , PublicRoutes } from './routes';
import { getCurrentUser } from './redux/actions/userActions';
import { connect } from 'react-redux';
import Loader from './pages/loaderPage';
import Error from './pages/errorPage';
import { getTopics } from './redux/actions/topicActions';

class App extends Component {

  componentDidMount() {
    const { getCurrentUser, getTopics } = this.props;
    getCurrentUser();
    getTopics();
  }

  render() {
    const { isError, isLoading, Auth } = this.props;
    console.log(isError, isLoading, Auth);
    return (
      <Fragment>
        {!isLoading && !isError && Auth ? Routes() : !isLoading ? PublicRoutes() : 
        Auth && !isLoading && isError ? <Error/> : <Loader /> } 
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    Auth: state.Auth.auth,
    isLoading: state.Profile.isLoading,
    isError: state.Profile.isError
  }
}

export default connect(mapStateToProps, { getCurrentUser, getTopics })(App);

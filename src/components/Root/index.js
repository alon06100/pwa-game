import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayView from '../PlayView';
import GameView from '../GameView';
import MomentView from '../MomentView';
import UserCollectionView from '../UserCollection';
import Profile from '../Profile';
import Login from '../Login';
import UserLoginForm from '../Login/Form';
import ForgotPassword from '../Login/ForgotPassword';
import Leaderboard from '../Leaderboard';
import Settings from '../Settings';
import configureStore from '../configureStore';

const store = configureStore();

const Root = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then((reg) => {
        reg.addEventListener('updatefound', () => {
          console.log('reloading...........');
        });
      }).catch((e) => {
        console.log(e);
      });
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={PlayView} />
          <Route path="/game/:league" exact component={GameView} />
          <Route path="/user-collection/:user/:collection" exact component={UserCollectionView} />
          <Route path="/moments/:momentId" exact component={MomentView} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/leaderboard" exact component={Leaderboard} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/login" exact component={Login} />
          <Route path="/sign-in" exact component={UserLoginForm} />
          <Route path="/register" exact component={UserLoginForm} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;

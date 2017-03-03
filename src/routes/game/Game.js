/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Game.css';

import MessageBar from '../../components/MessageBar';
import MessageList from '../../components/MessageList';

import * as gameActions from '../../actions/game';


class Game extends React.PureComponent {
  render() {
    return (
      <div>
        <div className={s.container}>
          <MessageList />
        </div>
        <MessageBar />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(gameActions, dispatch) };
}

export default connect(null, mapDispatchToProps)(withStyles(s)(Game));

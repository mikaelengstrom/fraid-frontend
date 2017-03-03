/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Home.css';

import Link from '../../components/Link';
import { newGameRequest } from '../../actions/game';


class Home extends React.Component {
  static propTypes = {
    newGameRequest: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Welcome to Fraid</h1>

          <Link to="/" onClick={this.props.newGameRequest}>
            Start a new game
          </Link>

        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { newGameRequest: () => dispatch(newGameRequest()) };
}

export default connect(null, mapDispatchToProps)(withStyles(s)(Home));

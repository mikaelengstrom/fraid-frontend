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
import s from './MessageBar.css';
import { throwRequest } from '../../actions/game';

import Link from '../Link';
import { stringToEmoji } from '../../core/utils';

class MessageBar extends React.PureComponent {
  static propTypes = {
    throwRequest: PropTypes.func.isRequired,
  };

  throwRock = () => this.props.throwRequest({ userThrow: 'rock' });
  throwPaper = () => this.props.throwRequest({ userThrow: 'paper' });
  throwScissors = () => this.props.throwRequest({ userThrow: 'scissors' });

  render() {
    return (
      <div id="footer" className={s.root}>
        <Link className={s.link} onClick={this.throwRock} to="#footer">{stringToEmoji('rock')}</Link>
        <Link className={s.link} onClick={this.throwPaper} to="#footer">{stringToEmoji('paper')}</Link>
        <Link className={s.link} onClick={this.throwScissors} to="#footer">{stringToEmoji('scissors')}</Link>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { throwRequest: arg => dispatch(throwRequest(arg)) };
}

export default connect(null, mapDispatchToProps)(withStyles(s)(MessageBar));

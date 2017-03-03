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

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

/* eslint-disable css-modules/no-unused-class */
import s from './MessageList.css';

const Message = ({ message, messageType, sender }) => (
  <div className={cx(s.message, s[messageType], s[sender])}>
    {message}
  </div>
  );

Message.propTypes = {
  message: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
};

class MessageList extends React.PureComponent {
  static propTypes = {
    messages: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        {this.props.messages.map(msg => <Message {...msg} />)}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { messages: state.game.gameMessages };
}


export default connect(mapStateToProps)(withStyles(s)(MessageList));

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Game from './Game';
import Layout from '../../components/Layout';

import { verifyGameRequest } from '../../actions/game';

export default {

  path: '/game/:gameId',

  async action(context) {
    const gameId = context.params.gameId;
    if (context.store.getState().game.gameId !== gameId) {
      context.store.dispatch(verifyGameRequest({ gameId }));
    }

    return {
      title: 'Game',
      component: <Layout><Game /></Layout>,
    };
  },

};

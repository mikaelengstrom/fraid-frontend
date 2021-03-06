/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.banner}>
            <span className={s.connection}>
              4G
              <span className={s.connectionBar1} />
              <span className={s.connectionBar2} />
              <span className={s.connectionBar3} />
            </span>

            <h1 className={s.bannerTitle}>Fraid</h1>
            <span className={s.clock}>10.30 AM</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);

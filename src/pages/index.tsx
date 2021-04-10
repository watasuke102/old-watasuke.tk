/*!
 * index.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/main.module.scss';
import * as styles from '../styles/top.module.scss';

export default () => {
  return (
    <>
      <div className={styles.icon_and_name}>
        <StaticImage width={150} src='../images/icon.jpg' alt='icon' />
        <h2>Welcome</h2>
      </div>

      <div className={styles.menu}>
        <p>1st</p>
        <p>2nd</p>
        <p>3rd</p>
      </div>
    </>
  );
}

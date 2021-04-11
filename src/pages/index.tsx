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
import '../styles/main.scss';
import * as styles from '../styles/index.module.scss';
import MenuCard from '../components/MenuCard';

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon_and_name}>
        <StaticImage width={150} src='../images/icon.jpg' alt='icon' />
        <h2>Welcome</h2>
      </div>

      <div className={styles.menu}>
        <MenuCard text='Blog' url='/blog' icon='edit' />
        <MenuCard text='Profile' url='/profile' icon='format_list_bulleted' />
        <MenuCard text='Portfolio' url='/portfolio' icon='flight_takeoff' />
      </div>
    </div>
  );
}

import '../styles/main.module.scss';
import * as styles from '../styles/top.module.scss';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

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
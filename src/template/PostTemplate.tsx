/*!
 * profile/index.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import '../styles/main.scss';

export default ({ pageContext }) => {
  console.info('This is DATA');
  console.info(pageContext);
  return (
    <>
      <h1>{pageContext.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.body }} />
    </>
  )
}
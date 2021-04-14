/*!
 * profile/index.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import { Remark } from 'react-remark';
import Article from '../types/Article';
import '../styles/main.scss';

interface Props {
  pageContext: Article
}

export default (prop: Props) => {
  const data = prop.pageContext;
  console.info('This is DATA');
  return (
    <>
      <h1>{data.title}</h1>
      {/* 画像のURLを置き換える*/}
      <Remark>
        {data.body.replace('/uploads/', 'http://localhost:1337/uploads/')}
      </Remark>
    </>
  )
}
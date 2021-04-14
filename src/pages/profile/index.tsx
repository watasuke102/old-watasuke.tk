/*!
 * profile/index.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import { graphql } from 'gatsby';
import Article from '../../types/Article';
import '../../styles/main.scss';

export default ({ data }: Article) => {
  const [title, SetTitle] = React.useState('');
  const [body, SetBody] = React.useState('');
  const post = data.markdownRemark;

  fetch('http://localhost:1337/articles').then(r => r.json()).then(res => {
    const data = res[0];
    console.log(data);
    SetTitle(data['title']);
    SetBody(data['body'].replace('/uploads/', 'http://localhost:1337/uploads/'));
  })
  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  )

}

export const query = graphql`
query {
  markdownRemark(frontmatter:{slug:{eq: "profile"}}) {
    frontmatter {
      title
      slug
    }
    html
  }
}`;
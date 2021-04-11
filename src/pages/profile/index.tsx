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
import '../../styles/main.scss';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
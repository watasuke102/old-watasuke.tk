/*!
 * gatsby-node.js
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

const path = require('path');
const fetch = require('node-fetch');

exports.createPages = async ({ actions }) => {
  const Template = path.resolve('./src/template/PostTemplate.tsx');

  // 投稿を取得
  const response = await fetch('http://host.docker.internal:1337/articles');
  const posts = await response.json();
  console.log(posts);
  posts.forEach(post => {
    const slug = post['slug'];
    actions.createPage({
      path: `/blog/${slug}`,
      component: Template,
      context: post
      //{ title: post['title'], slug: slug, body: post['body'] }
    });
  });
}

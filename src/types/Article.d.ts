/*!
 * Article.d.ts
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

export default interface Article {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string,
        slug: string
      }
      html: string
    }
  }
}

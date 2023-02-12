/**
 * 該元件作為使用者在 viewport(lg) 以上，當瀏覽 header 中的類別 (category) 時，
 * 顯示關聯的文章清單
 */

import styled from 'styled-components'

import ArticleListCard from './article-list-card'

const Container = styled.div<{ $show: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 78px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.1), 0 8px 24px -2px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.breakpoint.lg} {
    background-color: #fff;

    // This is a trick to 'hide' elements.
    // By using this trick, user can navigate to items in list by keyboard.
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;

    ${({ $show }) =>
      $show &&
      `
        width: auto;
        height: auto;
        overflow: visible;
        clip: auto;
        white-space: normal;
      `}
  }

  ul {
    width: 100%;
    max-width: 1320px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 32px 60px;
    li {
      width: calc((100% - 80px) / 5);
    }
  }
`

const Divider = styled.div`
  height: 6px;
  background-color: #ebf02c;
`

export type RelatedArticle = {
  uid: string
  href?: string
  title: string
  isReport?: boolean
  img: {
    src?: string
  }
}

type RelatedListInHeaderProps = {
  show?: boolean
  relatedList: RelatedArticle[]
}

export default function RelatedListInHeader({
  show = true,
  relatedList,
}: RelatedListInHeaderProps) {
  const articleItems = relatedList.map((article) => (
    <li key={article.uid}>
      <ArticleListCard
        title={article.title}
        href={article.href}
        image={article.img.src}
        isReport={article.isReport}
        shouldHideBottomInfos={true}
        shouldNotLazyload={true}
      />
    </li>
  ))

  return (
    <Container $show={show} className="related-list-in-header">
      <Divider />
      <ul>{articleItems}</ul>
    </Container>
  )
}

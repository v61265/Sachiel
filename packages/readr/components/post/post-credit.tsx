import styled from 'styled-components'

import type { PostDetail } from '~/graphql/query/post'

import MediaLinkList from '../shared/media-link'

const DotStyle = `
    content: '';
    position: absolute;
    top: 9px;
    left: 7px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(0, 9, 40, 0.2);
`

const LineStyle = `
    content: '';
    position: absolute;
    top: 10px;
    left: 3px;
    width: 20px;
    height: 1px;
    background-color: rgba(0, 9, 40, 0.66);  
`

const Container = styled.div`
  display: block;
  margin-top: 16px;
  .media-link-list {
    margin: auto auto auto 0px;
  }
  ${({ theme }) => theme.breakpoint.md} {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .media-link-list {
      margin: auto 0 0 auto;
    }
  }
`

const CreditList = styled.ul`
  margin: 0 0 16px;
  > li {
    font-size: 14px;
    line-height: 1.5;
    display: flex;
    align-items: center;
  }
  > li + li {
    margin: 4px 0 0;
  }
  ${({ theme }) => theme.breakpoint.md} {
    margin: 0;
    > li {
      font-size: 16px;
    }
  }
`

const CreditTitle = styled.div`
  display: block;
  color: rgba(0, 9, 40, 0.66);
  margin-right: 3px;
`

const CreditName = styled.div`
  position: relative;
  display: block;
  color: #000928;
  padding: 0 0 0 28px;
  &:before {
    ${LineStyle}
    ${({ theme }) => theme.breakpoint.md} {
      top: 13px;
    }
  }
  span {
    position: relative;
  }
  > span + span {
    padding: 0 0 0 20px;
  }
  span + span:after {
    ${DotStyle}
    ${({ theme }) => theme.breakpoint.md} {
      top: 11px;
      left: 8px;
    }
  }
  ${({ theme }) => theme.breakpoint.md} {
    padding: 0 0 0 30px;
  }
`

interface PostProps {
  postData: PostDetail
}

export default function PostCredit({ postData }: PostProps): JSX.Element {
  function renderNames(names: { id: number; name: string }[] | undefined) {
    return names?.map((item) => <span key={item.id}>{item.name}</span>)
  }

  const writers = renderNames(postData?.writers)
  const designers = renderNames(postData?.designers)
  const dataAnalysts = renderNames(postData?.dataAnalysts)

  return (
    <Container>
      <CreditList>
        {writers && (
          <li>
            <CreditTitle>記者</CreditTitle>
            <CreditName>{writers}</CreditName>
          </li>
        )}
        {designers && (
          <li>
            <CreditTitle>設計</CreditTitle>
            <CreditName>{designers}</CreditName>
          </li>
        )}
        {dataAnalysts && (
          <li>
            <CreditTitle>資料分析</CreditTitle>
            <CreditName>{dataAnalysts}</CreditName>
          </li>
        )}
      </CreditList>
      <MediaLinkList />
    </Container>
  )
}
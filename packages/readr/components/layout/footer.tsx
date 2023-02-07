import NextLink from 'next/link'
import styled from 'styled-components'

import iconFacebook from '~/public/icons/facebook.svg'
import iconGitHub from '~/public/icons/github.svg'
import iconInstagram from '~/public/icons/instagram.svg'
import iconTwitter from '~/public/icons/twitter.svg'

const Main = styled.footer`
  display: block;
  line-height: 1.5;

  a {
    display: block;
    text-decoration: none;
    color: #000;

    + a {
      margin-left: 24px;
    }
  }
`

const Container = styled.div`
  padding: 32px 0 24px 0;
  text-align: center;
  max-width: 1096px;
  margin: 0 auto;
  box-sizing: content-box;
`

const MediaLinkSection = styled.section`
  display: flex;
  justify-content: center;
  color: rgba(#000, 0.88);
  margin: 0 0 30px 0;
  line-height: 1.4;

  ${({ theme }) => theme.breakpoint.lg} {
    order: 3;
    margin: 0 0 32px 0;
  }
`

const MiscLinkSection = styled.section`
  display: flex;
  justify-content: center;
  font-size: 16px;
  line-height: 23px;
  padding: 0 20px;
  line-height: 1.7;
  margin-bottom: 32px;
  ${({ theme }) => theme.breakpoint.lg} {
    order: 1;
    padding: 0;
  }

  a {
    width: 32px;
    ${({ theme }) => theme.breakpoint.sm} {
      width: auto;
    }
  }

  a + a {
    margin-left: 40px;
    ${({ theme }) => theme.breakpoint.md} {
      margin-left: 66px;
    }
  }
`

const CompanyInfoSection = styled.ul`
  list-style: none;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.5);
  margin: 0 0 12px;
  ${({ theme }) => theme.breakpoint.md} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li + li {
    position: relative;
    margin: 8px 0 0;
    ${({ theme }) => theme.breakpoint.md} {
      margin: 0;
      padding: 0 0 0 17px;
      &::before {
        content: '';
        position: absolute;
        top: 1px;
        left: 9px;
        bottom: 2px;
        width: 1px;
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
`

const CopyrightInfo = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.3);
  ${({ theme }) => theme.breakpoint.lg} {
    order: 2;
    margin-left: auto;
  }
`

type ExternalLinkItem = {
  name: string
  href: string
  svgIcon: any
}

export default function Footer(): JSX.Element {
  const externalLinks: ExternalLinkItem[] = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/readr.tw',
      svgIcon: iconFacebook,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/READr_news',
      svgIcon: iconTwitter,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/readrteam_daily/',
      svgIcon: iconInstagram,
    },
    {
      name: 'Github',
      href: 'https://github.com/readr-media/readr-data',
      svgIcon: iconGitHub,
    },
  ]

  return (
    <Main>
      <Container>
        <MediaLinkSection>
          {externalLinks.map((item) => {
            return (
              <NextLink
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.svgIcon />
              </NextLink>
            )
          })}
        </MediaLinkSection>
        <MiscLinkSection>
          <NextLink href="/about" target="_blank" rel="noreferrer">
            關於我們
          </NextLink>
          <NextLink href="mailto:readr@readr.tw">聯絡我們</NextLink>
          <NextLink href="/privacy-rule" target="_blank" rel="noreferrer">
            隱私政策
          </NextLink>
          <NextLink
            href="https://forms.gle/C6B5MGYXLzXrmfSe6"
            target="_blank"
            rel="noopener noreferrer"
          >
            意見回饋
          </NextLink>
          <NextLink
            href={{
              pathname: '/post/[postId]',
              query: {
                postId: '2901',
              },
            }}
            target="_blank"
            rel="noreferrer"
          >
            服務條款
          </NextLink>
        </MiscLinkSection>
        <CompanyInfoSection>
          <li>精鏡傳媒股份有限公司</li>
          <li>114 台北市內湖區堤頂大道一段 365 號 7 樓</li>
          <li>readr@readr.tw</li>
        </CompanyInfoSection>
        <CopyrightInfo>
          &copy; {new Date().getFullYear()} READr All Rights Reserved
        </CopyrightInfo>
      </Container>
    </Main>
  )
}

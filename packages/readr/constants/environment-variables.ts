// 這裡管理的是在 Build 階段就會寫死數值的環境變數 (通常為 `NEXT_PUBLCI_` 開頭)
const ENV = process.env.NEXT_PUBLIC_ENV || 'local'
let SITE_URL: string
let GA_TRACKING_ID: string
let GTM_ID: string
let DONATION_PAGE_URL: string
let QA_RECORD_CONFIG: { variables: Record<string, string> }
let GLOBAL_CACHE_SETTING: string

switch (ENV) {
  case 'prod':
    SITE_URL = 'www.readr.tw'
    GA_TRACKING_ID = 'G-4Z12TPZTMB'
    GTM_ID = 'GTM-TH2M74H'
    DONATION_PAGE_URL = 'https://readr.oen.tw/good'
    QA_RECORD_CONFIG = { variables: { id1: '6', id2: '7' } }
    GLOBAL_CACHE_SETTING = 'public, max-age=300'
    break

  case 'staging':
    SITE_URL = 'staging.readr.tw'
    GA_TRACKING_ID = 'G-YDKYSDG3RL'
    GTM_ID = 'GTM-WZ6TDW4'
    DONATION_PAGE_URL = 'https://readr.oen.tw/good'
    QA_RECORD_CONFIG = { variables: { id1: '6', id2: '7' } }
    GLOBAL_CACHE_SETTING = 'public, max-age=300'
    break

  case 'dev':
    SITE_URL = 'dev.readr.tw'
    GA_TRACKING_ID = 'G-YDKYSDG3RL'
    GTM_ID = 'GTM-PQSSJ5V'
    DONATION_PAGE_URL = 'https://readr.testing.oen.tw/good'
    QA_RECORD_CONFIG = { variables: { id1: '8', id2: '9' } }
    GLOBAL_CACHE_SETTING = 'no-store'
    break

  default:
    SITE_URL = 'localhost'
    GA_TRACKING_ID = 'G-YDKYSDG3RL'
    GTM_ID = 'GTM-PQSSJ5V'
    DONATION_PAGE_URL = 'https://readr.testing.oen.tw/good'
    QA_RECORD_CONFIG = { variables: { id1: '8', id2: '9' } }
    GLOBAL_CACHE_SETTING = 'no-store'
    break
}

export {
  DONATION_PAGE_URL,
  ENV,
  GA_TRACKING_ID,
  GLOBAL_CACHE_SETTING,
  GTM_ID,
  QA_RECORD_CONFIG,
  SITE_URL,
}

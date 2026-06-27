'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider, theme } from 'antd'
import type { ReactNode } from 'react'
import { I18nProvider } from '@/lib/i18n/I18nProvider'

const syncroTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#2563eb',
    colorBgBase: '#080d1a',
    colorTextBase: '#e2e8f0',
    borderRadius: 8,
    fontFamily: 'var(--font-sans)',
  },
  components: {
    Button: {
      colorPrimary: '#2563eb',
      colorPrimaryHover: '#1d4ed8',
      borderRadius: 8,
      fontWeight: 600,
    },
  },
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={syncroTheme}>
        <I18nProvider>
          <div style={{ background: '#080d1a', minHeight: '100vh' }}>{children}</div>
        </I18nProvider>
      </ConfigProvider>
    </AntdRegistry>
  )
}

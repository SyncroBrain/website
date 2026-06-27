import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Providers from '@/components/providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://syncrobrain.com'),
  title: 'SyncroBrain 万物智脑 — AI-native IoT PaaS',
  description:
    '开源可私有化的 AI 原生物联网操作系统。连接设备，赋予智能。Open-source, privately deployable AI-native IoT operating system. Connect every device. Give it a brain.',
  keywords: [
    'IoT',
    'PaaS',
    'AI',
    'MQTT',
    'EMQX',
    'ThingsBoard',
    'private deploy',
    'open source',
    '万物智脑',
    'SyncroBrain',
  ],
  openGraph: {
    title: 'SyncroBrain 万物智脑',
    description: 'An AI-native operating system for connected devices',
    type: 'website',
    url: 'https://syncrobrain.com',
    siteName: 'SyncroBrain',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SyncroBrain 万物智脑',
    description: 'An AI-native operating system for connected devices',
  },
  alternates: {
    canonical: 'https://syncrobrain.com',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0f1e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-sb-base text-sb-text">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

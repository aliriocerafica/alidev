import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import ThemeProvider from './theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'aliDEV - Frontend Developer Portfolio',
  description: 'Ali Cerafica - Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Ali Cerafica' }],
  creator: 'Ali Cerafica',
  openGraph: {
    title: 'aliDEV - Frontend Developer Portfolio',
    description: 'Ali Cerafica - Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aliDEV - Frontend Developer Portfolio',
    description: 'Ali Cerafica - Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('alidev-theme');
                  var root = document.documentElement;
                  
                  if (theme === 'light' || theme === 'dark') {
                    root.classList.add(theme);
                    root.classList.remove(theme === 'light' ? 'dark' : 'light');
                  } else {
                    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                    var initialTheme = prefersDark ? 'dark' : 'light';
                    root.classList.add(initialTheme);
                    root.classList.remove(initialTheme === 'light' ? 'dark' : 'light');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              })();
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#7484dd" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

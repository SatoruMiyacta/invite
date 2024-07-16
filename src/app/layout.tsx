'use client'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import './globals.css'

export default function RootLayout(props: { children: any }) {
  const { children } = props
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

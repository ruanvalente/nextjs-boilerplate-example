import StyledComponentsRegistry from '@/lib/ui/styled-components/registry'
import { GlobalStyles, MainLayoutWrapper } from '../styles/global/global-styles'
import { Inter } from 'next/font/google'
import SidebarComponent from '@/shared/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <MainLayoutWrapper>
            <SidebarComponent />
            {children}
          </MainLayoutWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

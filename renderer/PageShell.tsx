import React from 'react'
import logo from './logo.svg'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import './PageShell.css'
import { Container, CssBaseline } from '@mui/material'

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <CssBaseline>
        <PageContextProvider pageContext={pageContext}>
          <Content>{children}</Content>
        </PageContextProvider>
      </CssBaseline>
    </React.StrictMode>
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth={"sm"}>
      {children}
    </Container>
  )
}

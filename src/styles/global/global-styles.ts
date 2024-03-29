'use client'

import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import '../tailwindcss/global.css'

import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

html,
body,
#root, #__next  {
  margin: 0;
  padding: 0;

  isolation: isolate;
  height: 100%;
  width: 100%;
}
`

export const MainLayoutWrapper = styled.main`
  display: flex;
  gap: 2rem;
`

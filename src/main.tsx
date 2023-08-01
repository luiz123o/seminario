import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalProviders } from './providers/GlobalProviders.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalProviders />
  </React.StrictMode>,
)

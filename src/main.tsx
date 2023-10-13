import { StrictMode } from 'react'

import '@/shared/styles/index.scss'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from '@/app/app.tsx'
import { store } from '@/app/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)

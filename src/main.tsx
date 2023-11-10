import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from '@components/app/app'
import { store } from '@store/store'
import { ThemeProvider } from '@src/context/theme-context/theme-provider'
import { SocketProvider } from './context/socket-context/socket-provider'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </SocketProvider>
    </Provider>
  </React.StrictMode>
)

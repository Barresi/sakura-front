import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from '@src/app/app'
import ThemeProvider from '@src/app/providers/theme-context/ui/theme-provider'
import { store } from '@src/app/store/store'
import SocketProvider from './app/providers/socket-context/ui/socket-provider'
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

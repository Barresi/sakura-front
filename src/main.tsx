import App from '@app/app'
import { SocketProvider } from '@app/providers/socket-context/ui/socket-provider'
import { Theme } from '@app/providers/theme-context/lib/theme-context'
import { ThemeProvider } from '@app/providers/theme-context/ui/theme-provider'
import { store } from '@app/store/store'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketProvider>
        <ThemeProvider defaultTheme={Theme.DARK}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </SocketProvider>
    </Provider>
  </React.StrictMode>
)

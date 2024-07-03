import AppProvider from './providers'
import { Router } from './Router'

const App = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  )
}

export default App
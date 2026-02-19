// App.tsx — componente raíz; solo gestiona el layout (Header + Rutas + Footer)
// La configuración de rutas vive en routes/index.tsx
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './routes'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-bg text-white flex flex-col">
        {/* Header fijo: visible en todas las rutas */}
        <Header />

        {/* AppRoutes decide qué página renderizar según la URL */}
        <main className="flex-1 flex flex-col pt-16">
          <AppRoutes />
        </main>

        {/* Footer: visible en todas las rutas */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

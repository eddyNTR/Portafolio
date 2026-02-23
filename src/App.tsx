// App.tsx — componente raíz; solo gestiona el layout (Header + Rutas + Footer)
// La configuración de rutas vive en routes/index.tsx
// HashRouter en lugar de BrowserRouter para compatibilidad con GitHub Pages
import { HashRouter as BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './routes'
import './App.css'

function App() {
  return (
    // LanguageProvider envuelve todo para que cualquier componente pueda
    // acceder al idioma actual mediante useLanguage()
    <LanguageProvider>
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
    </LanguageProvider>
  )
}

export default App

import { Router, Link, Route } from 'wouter'
import SearchForm from './components/SearchForm'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import { GifsContextProvider } from './context/GifsContext'
// import './App.css'

export default function App() {
  return (
    <GifsContextProvider>
      <Router base='/giffy'>
        <div className='App'>
          <header className='flex flex-col justify-center items-center py-6'>
            <Link
              to='/'
              className='text-white text-6xl mb-4'>
              Giffy
            </Link>
            <SearchForm />
          </header>
          <main>
            <Route
              path='/'
              component={Home}
            />
            <Route
              path='/search/:keyword/:rating?'
              component={SearchResults}
            />
            <Route
              path='/gif/:id'
              component={Detail}
            />
          </main>
        </div>
      </Router>
    </GifsContextProvider>
  )
}

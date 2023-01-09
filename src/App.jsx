import { Link, Route } from 'wouter'
import SearchForm from './components/SearchForm'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import { GifsContextProvider } from './context/GifsContext'
// import './App.css'

export default function App() {
  return (
    <GifsContextProvider>
      <div className='App'>
        <header>
          <Link to='/'>Home</Link>
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
    </GifsContextProvider>
  )
}

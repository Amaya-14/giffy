import { Route } from 'wouter'
import ListOfGifs from './components/ListOfGifs'
// import './App.css'

export default function App() {
  return (
    <div className='App'>
      <Route
        path='/'
        component={ListOfGifs}
      />
      <Route
        path='/gif/:keyword'
        component={ListOfGifs}
      />
    </div>
  )
}

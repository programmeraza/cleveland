import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage'
import ChevronPage from './pages/ChevronPage'
import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/chevron' element={<ChevronPage/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </>
  )
}

export default App

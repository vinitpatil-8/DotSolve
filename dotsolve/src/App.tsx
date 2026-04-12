import './App.css'
import Landingpage from './components/pages/landingpage'
import Menupage from './components/pages/menupage'
import Notfound from './components/pages/notfound'
import Optionspage from './components/pages/options'
import ConnectManual from './components/pages/connect/manual'
import ConnectUpload from './components/pages/connect/upload'
import SudokuManual from './components/pages/sudoku/manual'
import SudokuUpload from './components/pages/sudoku/upload'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Landingpage/>}/> 
        <Route path='/menu' element={<Menupage/>}/>
        <Route path='/menu/:id' element={<Optionspage/>}/>
        <Route path='/menu/Connect-The-Dots/manual' element={<ConnectManual/>}/>
        <Route path='/menu/Connect-The-Dots/upload' element={<ConnectUpload/>}/>
        <Route path='/menu/Sudoku/manual' element={<SudokuManual/>}/>
        <Route path='/menu/Sudoku/upload' element={<SudokuUpload/>}/>
        <Route path='*' element={<Notfound />}/> 
      </Routes>
    </>
  )
}

export default App

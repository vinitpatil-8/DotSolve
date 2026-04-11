import './App.css'
import Landingpage from './components/pages/landingpage'
import Menupage from './components/pages/menupage'
import Notfound from './components/pages/notfound'
import Optionspage from './components/pages/options'
// import Solverpage from './components/pages/solver'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Landingpage/> */}
      {/* <Menupage/> */}
      {/* <Notfound/> */}
      {/* <Optionspage /> */}
      {/* <Solverpage /> */}

      <Routes>
        <Route path='/' element={<Landingpage/>}/> 
        <Route path='/menu' element={<Menupage/>}/>
        <Route path='/menu/:id' element={<Optionspage/>}/>
        <Route path='*' element={<Notfound />}/> 
      </Routes>
    </>
  )
}

export default App

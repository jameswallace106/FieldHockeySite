import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import RosterPage from './components/RosterPage'
import GalleryPage from './components/GalleryPage'
import HistoryPage from './components/HistoryPage'
import SchedulePage from './components/SchedulePage'
import DonatePage from './components/DonatePage'
import AppHeader from './components/AppHeader'


function App() {

  return (
    <div className="App">
      <Router basename={""}>
        <AppHeader/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/roster' element={<RosterPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/history' element={<HistoryPage />} />
          <Route path='/schedule' element={<SchedulePage />} />
          <Route path='/donate' element={<DonatePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

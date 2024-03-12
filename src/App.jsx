import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import MissionVision from './components/MissionVision'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <div className='border-2 border-black '>
      <div className='bg-white mx-5'>
        <Header/>
        <Body/>
        <MissionVision/>
        <Portfolio/>
      </div>
      
    </div>
  )
}

export default App

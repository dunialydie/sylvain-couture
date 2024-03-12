import './App.css'
import Banner from './components/Banner'
import Body from './components/Body'
import CarouselComponent from './components/Clients'
import Footer from './components/Footer'
import Header from './components/Header'
import MissionVision from './components/MissionVision'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <div className='border-2 border-black bg-gray-100'>
      <div className='bg-white border-2 border-red-600 m-4'>
        <Header/>
        <Body/>
        <MissionVision/>
        <Portfolio/>
        <CarouselComponent/>
        <Banner/>
        <Footer/> 
      </div>      
    </div>
  )
}

export default App

// body{
//   background-color: rgb(243 244 246)
// }
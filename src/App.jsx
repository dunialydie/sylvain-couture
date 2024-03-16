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
    <div className=' bg-white  m-4 2xl:m-28 md:m-12'>
        <Header/>
        <Body/>
        <MissionVision/>
        <Portfolio/>
        <CarouselComponent/>
        <Banner/>
        <Footer/> 
    </div>
  )
}

export default App


import './App.css'
import FairyTailTile from './components/FairyTailTile'
import Header from './components/Header'
import DATA from './api/dummyData.json'

function App() {

const fairyTails = DATA

  return (
    <>
      <Header />
      {fairyTails.map((item) => (
        <FairyTailTile key={item.id} name={item.name} author={item.author} image={item.image} />
      ))
      }
    </>
  )
}

export default App

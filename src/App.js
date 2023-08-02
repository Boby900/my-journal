import Hero from './Hero';
import './App.css';
import data from './data'

import Navbar from './Navbar';
function App() {
  

let cards =   data.map(par => {
    return (
      <Hero
        par={par}
      />
      
    )
  })
return(
  <div>
    <Navbar />
    {cards}
    </div>
)

}

export default App;

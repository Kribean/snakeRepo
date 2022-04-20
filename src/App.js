import Banner from './components/Banner'
import Canvas from './components/Canvas'
import Footer from './components/Footer'

import { useState } from 'react'



function App() {
  const [score, updateScore] = useState(0)
    return (
      
      <div>
    <Banner score={score} updateScore={updateScore}/>
    <Canvas score={score} updateScore={updateScore}/>
    <Footer/>
    </div>
     

   


    )
}

export default App
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Intro from './Intro'

const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

return (
  <div>
   <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Intro isMenuOpen={isMenuOpen} />
  </div>

 


)

}


export default App

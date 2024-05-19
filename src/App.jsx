import { useState } from 'react'
import './App.css'
import Header from './Header'
import Intro from './Intro'
import About from './About'


const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const firstPageBackground = isMenuOpen ? '' : 'firstPage';

return (

  <>
  
  <div className={firstPageBackground}>
   <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Intro isMenuOpen={isMenuOpen} />
  </div>
<About/>
  </>


)

}


export default App

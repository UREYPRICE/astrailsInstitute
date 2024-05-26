
import './about.css'
import aboutUsImage from './assets/aboutUsImage.jpg'
const About = ()=> {


return(
    <>

<div className="about">
<h2>-About Us</h2>

<h1>I help people to discover their true potential</h1>

<div className="aboutImageDiv">
<img className='aboutImg' src={aboutUsImage} alt="" />

<div className="aboutImageExp">

<span className='aboutImageExpText'>YEARS OF EXPERIENCE</span>
<span className='aboutImageExpTextNumber'>12</span>


</div>

</div>



</div>


</>


)


}

export default About;
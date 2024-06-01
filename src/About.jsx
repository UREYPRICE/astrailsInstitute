
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

<div className="aboutPara">

<p>
The plans you refer to will soon be back in our hands. But with the blast shield down, I can’t even see! How am I supposed to fight? I suggest you try it again, Luke. This time, let go your conscious self and act on instinct.
</p>

<p>
Don’t be too proud of this technological terror you’ve constructed. The ability to destroy a planet is insignificant next to the power of the Force. I find your lack of faith disturbing. Kid, I’ve flown from one side of this galaxy.
</p>

</div>

<div className="aboutSecondPara">
    <p>Don’t be too proud of this technological terror you’ve constructed. The ability to destroy a planet is insignificant next to the power of the Force. I find your lack of faith disturbing. Kid, I’ve flown from one side of this galaxy to the other. I’ve seen a lot of strange stuff, but I’ve never seen anything to make me believe there’s one all-powerful Force controlling everything.</p>
</div>
<div className="aboutParaSign">
<h4>Ahmed Waqas</h4>

</div>
</div>

<div className="AboutSeccontainer">
    <div className="AboutSecBox">
        <span className="AboutBoxSpanNum">500+</span>
        <span className="AboutBoxSpanText">HAPPY CLIENTS</span>
    </div>
    <div className="AboutSecBox">
        <span className="AboutBoxSpanNum">70</span>
        <span className="AboutBoxSpanText">ONLINE COURSES</span>
    </div>
    <div className="AboutSecBox">
        <span className="AboutBoxSpanNum">100%</span>
        <span className="AboutBoxSpanText">SATISFACTION</span>
    </div>
    <div className="AboutSecBox">
        <span className="AboutBoxSpanNum">100%</span>
        <span className="AboutBoxSpanText">SUPPORT</span>
    </div>
</div>

</>


)


}

export default About;
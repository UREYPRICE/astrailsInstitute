import './Intro.css'


const Intro = ({ isMenuOpen }) => {

    const mobileIntroDisplay = isMenuOpen ? false : true ;


    return (
<>


        {mobileIntroDisplay && <div className="introDiv">

        <h2>with Astralis Institute Coaching</h2>
        <h1 >Let Go of Your Fears</h1>
        <p> Discover the simple 3 Steps that I Discovered to Hack Productivity. It Workds 100%. Wanna transform your life?</p>
    
        <div className="buttonDiv">
    
        <a href="http://" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M252-198v-535.33q0-23.34 16-39.67 16-16.33 40-16.33h344q24 0 40 16.33t16 39.67V-198l-228-98-228 98Z"/></svg> 
    
            <span className='buttonText'>Get Your Enrollment Now!</span>
    
        </a>
        </div>
        
    
        </div>}
        </>
 
    );

   
}

export default Intro;
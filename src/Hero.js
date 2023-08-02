import logo from './Fill 219.png'
function Hero(props) {
  
  return (
    
   
    <main>
    <div>
      
    <div className='firstImg'>
      <img src={props.par.img}></img>
    </div>
    <div className='secondImg'>
    <h2>
    <img className='location-logo' src={logo}></img>
    <span>{props.par.location}</span>
    </h2>
    <h3>{props.par.title}</h3>
    <h3>{props.par.Date}</h3>
    <p>{props.par.description}</p>
    </div>
   </div>
   </main>
 
  
    
  );
}

export default Hero;
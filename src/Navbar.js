import logo from './Fill 213.png'

function Navbar({names,phone,email}) {
  return (
   <nav>
    <img className='inline-block align-bottom ... mt-2' src={logo} ></img>
    <h1 className='text-3xl mt-3'>Boby's Travel Journal</h1>
   </nav>
    );
  }
  
  export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  function adoption(){
    console.log(document.querySelector("#adoption"))
    document.querySelector("#adoption").style="display: block"
    document.querySelector("#PetServices").style="display: none"
    document.querySelector("#PetProfile").style="display: none"
  }
  function PetServices(){
    console.log(document.querySelector("#adoption"))
    document.querySelector("#adoption").style="display: none"
    document.querySelector("#PetServices").style="display: block"
    document.querySelector("#PetProfile").style="display: none"
  }
  function PetProfile(){
    console.log(document.querySelector("#adoption"))
    document.querySelector("#adoption").style="display: none"
    document.querySelector("#PetServices").style="display: none"
    document.querySelector("#PetProfile").style="display: block"
  }
 
  return (
    <nav>
      <ul>
        <li><button onClick={adoption}>Adoption</button></li>
        <li><button onClick={PetServices}>PetServices</button></li>
        <li><button onClick={PetProfile}>PetProfile</button></li>
      </ul>
    </nav>
  );
}


// function Navbar() {
//   return (
//     <nav id ='Navbar'>
//       <ul>
//         <li>
//           <Link to="/PetProfile">Pet Profile</Link>
//         </li>
//         <li>
//           <Link to="/pet-services">Pet Services</Link>
//         </li>
//         <li>
//           <Link to="/adoption">Adoption</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }
export default Navbar;
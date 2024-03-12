//component

// const App = () => {
//   return <div>My first component</div>
// };
// export default App;
 // export karne se we can use this component anywhere after importing it to that  file
 //component ka first letter is capital

// and here we will use className insted of class to give name for the class
import "./App.css";
import Navagation from "../components/navagation";
import Hero from "../components/hero";
const App = () => {
  return (
    <div>
     <Navagation/>
     <Hero/>
    </div>
  );
    
  
 };
 export default App;
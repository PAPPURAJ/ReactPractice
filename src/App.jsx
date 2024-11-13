
import Button from './Button';
import Card from './Card';
import MyClock from './Clock';
import DyList from './DynLIst';
import Keya from './Food';
import Footers from './Footer';
import Header from './Header';
import Prop from './Propt'
import State  from './StateComp';

function App() {
  
  const myData = [
    {
      name: "Keya fChak",
      age: 25, 
      address: "Raozan"
    },
    {
      name: "Kash Chak",
      age: 26, 
      address: "fRaozan"
    }
    
  ]
  
  return (

    
    
   // <Prop name="Keya" roll={345} details={myData}/>
    //<Button/>
  //  <State/>
  //<DyList/>
  <MyClock/>
    
  )
}

export default App

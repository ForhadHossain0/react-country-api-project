import { useEffect, useState } from "react";
import Countriestwo from "./Countriestwo";
import { getItem, handlemain, removefromLS } from "./Store";
import Countriesthree from "./Countriesthree";



const Countries = () => {
    const [value,setvalue] = useState([]);  
    const [visited,setvisited] = useState([])
    const [visit,setVisit] = useState(false)

   
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
          .then(res => res.json())
          .then(data => setvalue(data))
      },[])
      
   useEffect (()=> {
        if(value){
            const x = getItem ();
            const saved = [];
            for (const name of x) {
                const carts = value.find(cart => cart.name.common === name)
                if(carts){
                    saved.push(carts)
                }
            }
            setvisited(saved)
       }
    },[value])



// its working on others file Countriestwo
   const  handlevisitedCountry = (country) =>{
         const newvisited = [...visited,country]
         setvisited(newvisited)
         handlemain(country.name.common)
    }
    // for color styles
    const handlevisit = () =>{
        setVisit(!visit)
    }
// remove item from ui and LS
const handletoRemove = name => {
    const carts = visited.filter(x => x.name.common !== name)
    setvisited(carts) //it dosen't work its can't remove item proferly from ui 

    removefromLS(name); 
}

    
return (
        <div>
            <h1>All list of countries totals : {value.length}</h1>
              {/* visited item content */}
              <Countriesthree  visiteds={visited} handletoRemove={handletoRemove} > </Countriesthree>
                <hr />


          {/* display item */}
           <div className="container">
           {
                value.map(country => <Countriestwo country={country}  handlevisitedCountry={handlevisitedCountry} handlevisit={handlevisit}    key={country.cca3}> </Countriestwo>)
            }
           </div>
        </div>
    );
};

export default Countries;
import  "./Countries.css"
const Countriesthree = ({visiteds,handletoRemove}) => {
    // console.log(visiteds)
  
  return ( <div>
         <h2 style={{textAlign:'left'}}> Visited countries : {visiteds.length}</h2>
         <div   className="container-visited">       
         {
          visiteds.map(country => <div key={country.cca3}  className="container-visited-downtag" > 
                              
                                <img  src={country.flags.png} /> <br/> 
                                 {country.name.common}  
                                 <br />
                                 <button onClick={()=> handletoRemove(country.name.common)}>remove</button>
                                 </div> )
         } 
        </div>

        </div>
    )
}

export default Countriesthree
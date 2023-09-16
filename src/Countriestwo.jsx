import { useState } from "react";
import   "./Countriestwo.css";


const Countriestwo = ({country,handlevisitedCountry}) => {


    const{name,flags,population} = country;
    const [visit,setVisit] = useState(false)

    const handlevisit = () =>{
        setVisit(!visit)
    }

    return (
        <div className={`my ${visit && 'addbg' }`}>
            <h3>{name.common}</h3>
            <img onClick={handlevisit} src={flags.png} alt="flags.png" />
            <p>population :{population}</p>
            <button onClick={() => handlevisitedCountry(country)}>add to favourite  </button> 
        </div>
    );
};


export default Countriestwo;
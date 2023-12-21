import React, {useContext} from "react";
import CricketContext from "../context/CricketerContext";


const Hello = ()=>{

    console.log(useContext(CricketContext))
       
     let {cricketer, setCricketer}  = useContext(CricketContext)
     
     console.log("I am loading again")

    return(
        <div>
            <h1>Name: {cricketer.name}</h1>
            <p>Age: {cricketer.age}</p>
            <p>Runs: {cricketer.runs}</p>
            <p>Wickets: {cricketer.wickets}</p> 


            <button 
            onClick={
                ()=>setCricketer({...cricketer, wickets: cricketer.wickets+1})}> 
                Sachin Took One more Wicket</button>

            
            <hr />
        </div>
    )
}

export default Hello;
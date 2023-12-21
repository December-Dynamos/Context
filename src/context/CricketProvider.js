import React,{useState} from "react"; 
import CricketContext from "./CricketerContext";


const CricketProvider = (props)=>{
   
    const [cricketer , setCricketer] = useState({
        name : "Sachin Tendulkar",
        age : 40,
        runs : 10000,
        wickets : 200
    })

    const [actor, setActor] = useState({
        name : "Rajnikant",
        age : 70,
        movies : 100,
        awards : 200
    })

    
   

    return(
        <CricketContext.Provider value={{
            cricketer : cricketer,
            setCricketer : setCricketer,
            actor : actor,
            setActor : setActor
            
        } }>
            {props.children}
        </CricketContext.Provider>
    )
 
}



export default CricketProvider;

import React from "react";
import CricketContext from "../context/CricketerContext";


const Hey = ()=>{



    return(
        <div>
             <h1> 3rd Component</h1>
            <CricketContext.Consumer> 
                {
                    (value)=>(
                        <div>
                            <h1>Name: {value.cricketer.name}</h1>
                            <button
                            onClick={()=>value.setCricketer({...value.cricketer, name: "Virat Kohli"})}
                            > Update Name</button>
                    </div>
                    )
                }
            </CricketContext.Consumer>

        </div>
    )
}

export default Hey;
import React, {useContext} from "react";
import CricketContext from "../context/CricketerContext";


const Hii = ()=>{
    const {actor, setActor} = useContext(CricketContext)

    console.log("I am loading again hii compoent")


    return(
        <div>
            <h1> I am second compoent </h1>
            <h1>Name: {actor.name}</h1>
            <p>Age: {actor.age}</p>
            <p>Movies: {actor.movies}</p>
            <p>Awards: {actor.awards}</p>

            {/* {
                actor && <p> {actor.name}</p>
                if( actor){
                    <p>{actor.name}</p>
                }
            } */}
        </div>
    )
}

export default Hii;
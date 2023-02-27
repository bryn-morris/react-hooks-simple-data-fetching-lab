// create your App component here
import React, { useState, useEffect } from "react";

 ////////////////////////////////////////////////////////////////////////////
 ////////////////////////// Deliverable #1
 ////////////////////////////////////////////////////////////////////////////

function App () {

    const [renderedDogImg, setRenderedDogImg] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

 ////////////////////////////////////////////////////////////////////////////
 ////////////////////////// Deliverable #2
 ////////////////////////////////////////////////////////////////////////////

    useEffect(()=>{

        fetch ("https://dog.ceo/api/breeds/image/random")
            .then (r => r.json())
            .then (dogResponseObject => {
                setRenderedDogImg(dogResponseObject.message)
                setIsLoaded(true);
            });
    },[])

 ////////////////////////////////////////////////////////////////////////////
 ////////////////////////// Deliverable #3
 ////////////////////////////////////////////////////////////////////////////

 ////////////////////////////////////////////////////////////////////////////
 ////////////////////////// Deliverable #4
 ////////////////////////////////////////////////////////////////////////////

    if (isLoaded === false) {return <p>Loading...</p>}

    return <img src= {renderedDogImg} alt = "A Random Dog"></img>
}

 export default App;
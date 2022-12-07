import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const App = () =>{

    const[count,Setcount] = useState(0);
    const[warn,Countwarn] = useState("");

    const IncrementCount = () =>{
        Setcount(count+1);
        Countwarn("")
    }
    const DecrementCount = () =>{

        if (count === 0){
            Setcount(count)
            Countwarn("No Negative Number Allowed")
        }else{
            Setcount(count-1);
        }

    }


    return(
        <>
            <div className="countdiv">
            <button onClick={IncrementCount} className="p"><AddIcon /></button>
            <h1>{count}</h1>
            <button onClick={DecrementCount} className="m"><RemoveIcon /></button>
            </div>
            <h2>{warn}</h2>
        </>
    )
}

export default App;

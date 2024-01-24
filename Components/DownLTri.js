import React from "react";

const Down=({size})=>{
    let row=""
    for(let i=0;i<size; i++){

        for(let j=0; j<size-i ;j++){

           row+="*"
        }
        row+="\n"
    }
    return <pre>{row}</pre>
    
}

function DownLTri(){
    return(
        <div>
            <h1>Downward triangle pattern </h1>
            <Down size={5}/>

        </div>
    )


}
export default DownLTri
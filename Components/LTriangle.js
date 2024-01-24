import React from "react";

const Triangle=({size})=>{

    let row='';
    for(let i=0;i<size;i++){
        for(let j=0;j<i;j++){
            row += " *";
        }
        row += "\n";
    }
    return <pre>{row}</pre>
}


function LTriangle(){
    return(
        <div>

            <h1>Triangle Pattern</h1>
            <Triangle size={6}/>

        </div>
    )
}
export default LTriangle;
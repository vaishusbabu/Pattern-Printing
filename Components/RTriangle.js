import React from "react";

const Triangle=({size})=>{
 
    let row=' '; 
    for(let i=0;i<size; i++){

        for(let j=0;j<size-i;j++){

            row += " "
        }
        for(let k=0;k<i;k++){

            row += "*"
        }  
        row += "\n"
    }
    
    return<pre>{row}</pre>

}

function RTriangle(){

    return(
        <div>
            <h1>Right triangle star pattern</h1>
            <Triangle size={6}/>
        </div>
    )
}
export default RTriangle;
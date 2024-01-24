import React from "react";

const Rev=({size})=>{
    let row=""
    for(let i=0; i<size; i++){
        for(let j=0;j<i;j++){
            row+=" "
        }

        for(let k=0;k<2*(size-i)-1;k++){
            row+="*"
        }
        row+="\n"
        
       
    }
return<pre>{row}</pre>
}

function ReversedPy(){
    return(
        <div>
            <h3>Reversed Pyramid</h3>
            <Rev size={5}/>
        </div>
    )
}
export default ReversedPy
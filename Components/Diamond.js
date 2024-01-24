import React from "react";


const Dia=({size})=>{
    let row=""
    
    for(let i=0;i<size;i++){
        for(let j=0;j<size-i;j++){
            row+=" "
        }
        for(let k=0;k<2*i-1;k++){
            row+="*"
        }
        row+="\n"  
    }
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
function Diamond(){
    return(
        <div>
            <h3>Diamond Pattern</h3>
            <Dia size={5}/>
        </div>
    )
}
export default Diamond
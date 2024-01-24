import React from "react";

const Right=({size})=>{
    let row=""
    for(let i=0;i<size;i++){
        for(let j=0;j<i+1;j++){
            row+="*"
        }
        row+="\n"
    }
    for(let i=0;i<size;i++){
        for(let j=0;j<size-i;j++){
            row+="*"
        }
        row+="\n"
    }
return<pre>{row}</pre>
} 

function RightPascal(){
    return(
        <div>
            <h3>Right Pascal</h3>
            <Right size={5}/>
        </div>
    )
}
export default RightPascal
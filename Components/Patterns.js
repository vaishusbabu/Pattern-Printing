import React from "react";


const Square=({size})=>{
    let row='';
    for(let i=0;i<size;i++){  

        for(let j=0;j<size;j++){
            row += '* '; 
        }
      row += "\n";
    } 
    console.log(row)   

 return<pre>{row}</pre>   
}

function Patterns(Star){
    return(
        <div>
            <h1>Square Star Pattern</h1>
               <Square size={5}/>
               
        </div>
    )
}
export default Patterns;
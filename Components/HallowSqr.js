import React from "react";

const Hallow=({size})=>{
    let row ="" 
    for(let i=0 ;i<size; i++){
    
        for(let j=0; j<size;j++){
           if( i === 0 || i === size-1||j === 0 || j === size-1){
             row+="*";
           }
            else{
                row+=" "
            }
           
        }
        row+="\n"
       
    }
    return <pre>{row}</pre>
}

function HallowSqr(){

    return (
<div>
    <h1>Hallow Squared Pyramid Pattern</h1>
        <Hallow size={5}/>

</div>

    )
}
export default HallowSqr
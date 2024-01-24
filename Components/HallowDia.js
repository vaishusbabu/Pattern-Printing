import React from "react";

const Dia=({size})=>{
    let row=""
    for(let i=0;i<size;i++){
        for(let j=0;j<size-i;j++){
            row+=" "
        }
        for(let k=0;k<2*i-1;k++){
           if(i===0 || i===size||k===0||k===2*i -2 ){
            row+="*"
           }
           else{
            row+=" "
           }
          
        }
        row+="\n"
    } 
    for(let i=size-1;i>=1;i--){
        for(let j=0;j<size-i;j++){
            row+=" "
        }
        for(let k=0;k<2*i-1;k++){
           if(i===0 || i===size||k===0||k===2*i -2 ){
            row+="*"
           }
           else{
            row+=" "
           }
          
        }
        row+="\n"
    } 

return<pre>{row}</pre>
}

function HallowDia(){
    return(
        <div>
            <h3>Hollow diamond pattern</h3>
         <Dia size={5}/>
        </div>
    )
}
export default HallowDia
import React from "react";

const PyHallow=({size})=>{
   
    let row=" "
    for(let i=0;i<size;i++){
        for(let j=0;j<size-i;j++){
            row+=" "
        }
        for(let k=0;k<2*i-1;k++){
            if(i===size-1|| i===1 ||k===0 || k===2*i-2){
                row+="*" 
            }
            else{
                row+=" "
            }          
        }
        row+="\n"
    }
return <pre>{row}</pre>
}
 
function HallowPy(){
    return(
        <div>
            <h4>Hallow Pyramid</h4>
            <PyHallow size={6}/>
        </div>
    )
}
export default HallowPy
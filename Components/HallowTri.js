import React from "react";

const Hallow=({size})=>{
    let row="";
    for(let i=0;i<size;i++){
        for(let j=0;j<i;j++){
            if( i===0 || i===size-1 || j===0 || j===i-1 ){
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


function HallowTriangle(){

    return(
        <div>
            <h3>HallowTriangle</h3>
            <Hallow size={6}/>
        </div>
    )
}
export default HallowTriangle
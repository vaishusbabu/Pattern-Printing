import React from "react";

const Pyramid=({size})=>{
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


    return <pre>{row}</pre>
}


function PyramidStar(){

    return(
        <div>
            <h3>Pyramid Star</h3>
            <Pyramid size ={6}/>
        </div>
    )
}
export default PyramidStar
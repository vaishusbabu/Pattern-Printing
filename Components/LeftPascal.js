import React from "react";

const Left=({size})=>{
    let row=""
    for(let i=0;i<size;i++){
        for(let j=0;j<size-i;j++){
            row+=" "
        }
        for(let k=0;k<i;k++){
            row+="*"
        }
        row+="\n"
    }
    for(let i=0;i<size;i++){
        for(let j=0;j<i;j++){
            row+=" "
        }
        for(let k=0;k<size-i;k++){
            row+="*"
        }
        row+="\n"
    }
    return<pre>{row}</pre>

}

function LeftPascal(){
    return(
        <div>
            <h3>Left Pascal</h3>
        <Left size={5}/>
            </div>



    )
}
export default LeftPascal

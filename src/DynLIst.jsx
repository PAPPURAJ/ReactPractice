import { useState } from "react";

export default function DyList(){

    const[name,setName] = useState(["hi"]);

    function addName(e){
        setName([...name,document.getElementById("inputField").value])
        document.getElementById("inputField").value=""
    }

    
    const fLi = () => name.map((e, index) =>{
       //return <li key={index} onClick={()=>removeElement(e)} >{e}{index}</li>
       return  <li key={index} >{e}{index} <button onClick={()=>removeElement(e)}>❌</button> </li> 
    })

    

    function handleKeyDown(e){
        if(e.key=="Enter")
            addName();
    }

    function removeElement(e){
        setName(name.filter(n=> n!==e))
    }




    return(
    <>
        <ul>
            {fLi()}
        </ul>
    
        <input id="inputField" onKeyDown={handleKeyDown}/>
        <button onClick={addName}/>
    
    </>
      
    );
}
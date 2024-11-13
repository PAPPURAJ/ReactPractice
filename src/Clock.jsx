import React , { useEffect, useState } from "react"

export default function MyClock(){

    const [time, setTime] = useState(new Date())


    useEffect(()=>{console.log("IN")
        const intervalId = setInterval(()=>{
            setTime(new Date())
            
        },1000);

      return ()=>{
            console.log("RETURN")
            clearInterval(intervalId)
      }
    },[])

    function onchange(){


    }


    return(
        <div>
            <span onClick={onchange}>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</span>
        </div>
    );

}
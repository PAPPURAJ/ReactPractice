import React,{useState} from 'react'

export default function StateF(){

    let [time, incTime] = useState(0)
    const [value, setValue] =  useState("jkj")
    const [payment, setPayment] = useState();
    const [timeType, setTimeType] = useState("PMf");


    function clicked(){
            time=time+1;
            console.log(time)
            incTime(time)
    };

    function changedValue(e){
            setValue(e.target.value)
    }


    function paymentChange(e){
            setPayment(e.target.value)
    }

    function changeTimeType(e){
        setTimeType(e.target.value)
    }

    return (
        <>
        <h2 onClick={clicked}> hi {time}</h2>
        <input value={value} onChange={changedValue}/>
        <p>Value: {value}</p>
        <select value={payment} onChange={paymentChange}>
            <option value={""}>Select a option</option>
            <option value={"bkash"}>BKash</option>
            <option value={"rocket"}>Rocket</option>
            

        </select>

        <h1>You selected: {payment}</h1>

        <label>
            <input type='radio' value="AM" checked={timeType=="AM"} onChange={changeTimeType}/>
            AM
        </label>

        <label>
            <input type='radio' value="PM" checked={timeType=="PM"} onChange={changeTimeType}/>
            PM
        </label>

        
        



        <h1>You checked : {timeType}</h1>

        </>
    )
}


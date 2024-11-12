import PropTypes from 'prop-types'
export default function PropFunc(propt) {


    
    const vl=propt.details.map(v => <h1>{v.name}</h1>)

    return (

         <div>
        <h1>Name: {propt.name}</h1>
        <h1>Roll: {propt.roll}</h1>
        <h1> hello {vl}</h1>
    </div>
    )

    PropTypes.PropTypes = {
        name : PropTypes.string, 
        roll : PropTypes.string
    }
   
}
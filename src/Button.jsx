export default function Button(){
    
    
    var i =2
    
    
    const hiClick = (e) => {
        e.target.textContent="Hey"
        console.log("Hello "+i++)
    }

    const byeClick = () => {
        console.log((i++%2==0?"Bye":"Hi" )+ " guys"+i)
    }
    
    return (

        <>
        <button className='button' onClick={byeClick}>Click me</button>
        <button className='button' onDoubleClick={(e)=> hiClick(e)}>Click me</button>
        </>
        
    );
}
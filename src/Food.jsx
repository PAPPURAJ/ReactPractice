function Food() {
    const items = [];
    
    for (let i = 0; i < 10; i++) {
        items.push(<li key={i}>{i}</li>);  
    }

    return (
        <ul>
            {items}
        </ul>
    );
}

export default Food;

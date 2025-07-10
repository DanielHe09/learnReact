function ListGroup(){
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ]

    

    return (
        //if we use empty brackets, we are telling React to wrap the multiple elements into a fragment
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
function ListGroup(){
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ]

    items=[]    

    //in return statements you can only use html or other react components unless inside brackets
    return (
        //if we use empty brackets, we are telling React to wrap the multiple elements into a fragment
        <>
            <h1>List</h1>
            {
            //if the condition is true we return No item found else nothing happens
            items.length === 0 && <p>No item found</p>
            }
            <ul className="list-group">
                {items.map((item) => (
                    //when using the map function, we have to give every item a key, in this case we can just use the item itself since it's a string
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
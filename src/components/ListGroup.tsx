import { MouseEvent } from "react";

function ListGroup(){
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ]

    //event handler
    const handleClick = (event: MouseEvent)=> console.log(event);

    //in return statements you can only use html or other react components unless inside brackets
    return (
        //if we use empty brackets, we are telling React to wrap the multiple elements into a fragment
        <>
            <h1>List</h1>
            {
            //if the condition is true we return No item found else 'false' is returned so nothing happens on the webpage
            items.length === 0 && <p>No item found</p>
            }
            <ul className="list-group">
                {items.map((item, index) => (
                    //when using the map function, we have to give every item a key, in this case we can just use the item itself since it's a string
                    <li 
                        className = "list-group-item" 
                        key={item} 
                        onClick={handleClick}
                    >
                     {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
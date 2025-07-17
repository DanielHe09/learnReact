import { useState } from "react";

//an interface is just used to define a template for what objects an input should have, similar to an ADT
interface ListGroupProps {
    items: string[];
    heading: string;
}

//the bracket items in this case are used for "destructuring" the object ListGroupProps
function ListGroup({items, heading}: ListGroupProps){
    
    
    /*
    state is used for changes to components, when state of a component changes, react automatically rerun the component function
    Hooks allow you to "hook into" react components
    giving useState a parameter of -1 will return an array with two things:
    1. a current value of the state
    2. a function to update that value
    */
    const [selectedIndex, setSelectedIndex] = useState(-1);

    //in return statements you can only use html or other react components unless inside brackets
    return (
        //if we use empty brackets, we are telling React to wrap the multiple elements into a fragment
        <>
            <h1>{heading}</h1>
            {
            //if the condition is true we return No item found else 'false' is returned so nothing happens on the webpage
            items.length === 0 && <p>No item found</p>
            }
            <ul className="list-group">
                {items.map((item, index) => (
                    //when using the map function, we have to give every item a key, in this case we can just use the item itself since it's a string
                    <li 
                        className = {selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item} 
                        //when you click, this tells react to update selectedIndex to the index of the item you clicked
                        onClick={() => {setSelectedIndex(index); }}
                    >
                     {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
import ListGroup from "./components/ListGroup"

function App() {

  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ]

  const handleSelectItem = (item: string) =>{
    console.log(item)
  }
  
  return (
    <div>
      {/*
      in react, a parent is the component that renders another component.
      Because App is the parent of ListGroup, it can define a function (like handleSelectItem) and pass it as a prop to ListGroup.
      When ListGroup calls this function, it actually runs the code defined in App, allowing the parent to respond to events in the child.
      */}
      <ListGroup items = {items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}

//makes the App component accessible to other files in our project
export default App;
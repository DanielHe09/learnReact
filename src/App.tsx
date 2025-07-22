import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup"
import PrimButton from "./components/PrimButton"

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
      {/*since we set the parameter string to be passed into Alert as a 'children' we can input the reactNode as a child
      of the component */}
      <Alert>
        Hello <span>World</span>
      </Alert>
      <PrimButton onSelectItem={handleSelectItem}>hello</PrimButton>
    </div>
  );
}

//makes the App component accessible to other files in our project
export default App;
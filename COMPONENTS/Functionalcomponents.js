/*Function components are declared similarly to JavaScript functions. 
The difference is that components accept props and render JSX elements. 
You'll learn more about JSX next.*/

import "use State" from "react"

function App() {
  const[name, addName] = useState('')
  function handleAddName(event) {
    addName(event.target.value);
  }

  return (
    <div>
    <form>
    <label>
    Name :
    <Input type ="text" value={name} onChange={handleAddname} />
      </label>
      </form>
    <p>
      Welcome {name}, I hope you comeback and fix this code.
      </p>
    </div>
  );
}
/*. Components
Components are small bit of reusable code that return a React element to be rendered on a webpage.
It is a group of code that make up a single part of the webpage like buttons, navbar, cards, etc. 
It is just like a JavaScript function but returns a rendered element. It accepts parameters called "Props".
Components are named with capital case.

Example Of Functional Component



function Heading(props) {
  return <h1>Join us, {props.name}!</h1>;
}


Note:

Functional Components are recommended instead of Class based.
Functional components are often called statefull components when the UI is updated dynamically due to state's value not Prop's value.
Functional components are called stateless components when it uses Prop's value to dynamically change UI not state's value.*/

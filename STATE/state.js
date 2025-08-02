/*State is a key concept in React apps. 
You can think of state as a collection of information or objects that tell you where you can access and store your data.
Anything outside of a component, for example, can’t access its data. It’s private and controlled by the component.

Every React component has its own state. Whenever a state changes, the component gets re-rendered. 
This happens when a user clicks a button, responds, or interacts with something on the page.

The children components can access these states via props (which we’ll discuss below) passed by the parent’s component.*/

//Examples of a React State are given here -

const [name, setName] = useState("")//The empty means it can be anything string, object, array or number
const[age, setAge] = useState(0)//This accepts a number
const[products, setProducts]  = useState(["Audi", "Tesla"])//This is accepting a string 

/*The code snippet above shows some examples of React states. 
A state can be an array, string, object, or number. 
The useState hook accepts the initial value of the state as a parameter, and the state name and state function (for modifying its value) are destructured from the useState hook.*/

const [stateName, stateFunction]= useState(<initial_value>)
/**/

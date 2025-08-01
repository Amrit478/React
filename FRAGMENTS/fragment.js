/*Fragments in React allows you to return multiple elements from a component. 
It groups the list of elements without creating a extra DOM nodes. 
It cleans all the extra divs from the DOM. This quickly renders the UI.*/

const App = () => {
  return (
    <>
    <h1> Eat here </h1>
    <p> Sleep here </p>
    <button> Learn more </button>
  <button> Repeat in everywhere </button>
  );
}

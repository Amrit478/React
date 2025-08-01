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

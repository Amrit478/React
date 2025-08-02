/*Consider a form that accepts a user’s name and age and displays them, like this:*/

function UserInfo() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleAgeChange(event) {
    setAge(parseInt(event.target.value));
  }
  return (
    <div>
      <form>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>
     </form>
      <p>
        Your name is {name} and your age is {age}.
      </p>
    </div>
  );
}
export default UserInfo;

/*The code snippet above accepts the user’s name and age and stores them within the React states. 
The functions handleNameChange and handleAgeChange accept the user’s input and update the state’s values.*/

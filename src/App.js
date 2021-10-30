import "./App.css";
import Profile from "./profile/comProfile";
import photo from "./profile/photo.jpg";

//variables
const para =
  " Tupac Amaru Shakur, better known by his stage name 2Pac and, later, by his alias Makaveli, was an American rapper and actor. He is widely considered one of the most influential rappers of all time.";
const alertName = alert("Achref Messai");
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile
          fullName="Tupac Shakur"
          bio={para}
          profession="American rapper and actor"
          alert={alertName}
        >
          <img src={photo} alt="Tupac" height="300px" />
        </Profile>
      </header>
    </div>
  );
}

export default App;

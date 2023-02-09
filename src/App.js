import "./App.css";
import NavBar from "./components/NavBar";
import { auth } from "./config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Welcome from "./components/Welcome";
import ChatBox from "./components/ChatBox";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}

export default App;

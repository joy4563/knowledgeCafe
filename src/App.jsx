import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Cafe from "./components/cafe/Cafe";
import Question from "./components/Question/Question";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Header></Header>

            <hr />
            <Cafe></Cafe>
            <Question></Question>
        </div>
    );
}

export default App;

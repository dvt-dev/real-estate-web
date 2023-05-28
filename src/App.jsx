import General from "./components/General/General";
import Header from "./components/Header/Header";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";

function App() {
    return (
        <div className="app">
            <div>
                <div className="white-gradient"></div>
                <Header />
                <General />
            </div>
            <Companies />
            <Residencies />
        </div>
    );
}

export default App;

import General from "./components/General/General";
import Header from "./components/Header/Header";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";

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
            <Value />
        </div>
    );
}

export default App;

import General from "./components/General/General";
import Header from "./components/Header/Header";
import "./App.css";
import Companies from "./components/Companies/Companies";

function App() {
    return (
        <div className="app">
            <div>
                <div className="white-gradient"></div>
                <Header />
                <General />
            </div>
            <Companies />
        </div>
    );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Form from "./0-page/form";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" exact element={<Form/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

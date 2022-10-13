import logo from './js.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    <code>This is web source of Advanced JavaScript Project!</code>
                </p>
                <p>Website is under construction.</p>
                <a
                    className="App-link"
                    href="https://www.facebook.com/jsadvanced"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Continue in Facebok page
                </a>
            </header>
        </div>
    );
}

export default App;

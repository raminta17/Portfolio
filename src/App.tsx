import './App.css'
import Header from "./components/Header.tsx";
import Navigation from "./components/Navigation.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";

function App() {


    return (
        <>
            <Header/>
            <div className="main p-3 d-flex flex-column gap-4">
                <Navigation/>
                <About/>
                <Projects/>
                <button className="getInTouchBtn">GET IN TOUCH</button>
            </div>

        </>
    )
}

export default App

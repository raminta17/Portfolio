import './App.css'
import Header from "./components/Header.tsx";
import Navigation from "./components/Navigation.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import {useState, useEffect} from "react";
import Footer from "./components/Footer.tsx";
import {Envelope} from "react-bootstrap-icons";
import {motion} from "framer-motion";
import MessageModal from "./components/MessageModal.tsx";
import Skills from "./components/Skills.tsx";
import Education from "./components/Education.tsx";


function App() {

    const [showBtn, setShowBtn] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function openModal () {
        setShowModal(true);
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        });
    }, []);

    return (
        <>
            <Header setShowModal={setShowModal}/>
            <div className="main d-flex flex-column"
            >
                <Navigation/>
                <About/>
                <Skills/>
                <Education/>
                <Projects/>
                {showBtn &&
                    <motion.div
                        onClick={openModal}
                        className="getInTouchBtn fixedBtn"
                        whileHover={{scale: 1.1}}
                        transition={{type: "spring", stiffness: 400, damping: 10}}
                    >
                        <Envelope/>
                    </motion.div>
                }
            </div>
            <Footer/>
            <MessageModal showModal={showModal} setShowModal={setShowModal}/>
        </>
    )
}

export default App

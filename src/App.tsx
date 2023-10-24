import './App.css'
import Header from "./components/Header.tsx";
import Navigation from "./components/Navigation.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import {useState, useEffect, useRef} from "react";
import Footer from "./components/Footer.tsx";
import {Modal} from "react-bootstrap";
import {Envelope} from "react-bootstrap-icons";

function App() {

    const [showBtn, setShowBtn] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const messageRef = useRef<HTMLTextAreaElement | null>(null);

    const handleCloseModal = () => {
        setShowModal(false);
    }
    const handleShowModal = () => {
        setShowModal(true);
    }
    const handleMessageSent = () => {
        if(messageRef.current)  console.log(messageRef.current.value);
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
            <div className="main p-3 d-flex flex-column gap-4">
                <Navigation/>
                <About/>
                <Projects/>
                {showBtn && <button onClick={handleShowModal} className="getInTouchBtn fixedBtn"><Envelope/></button>}
            </div>
            <Footer/>
            <Modal  show={showModal} style={{background: 'linear-gradient(184deg, rgba(0,0,0,0.7204131652661064) 0%, rgba(82,78,94,0.9389005602240896) 100%)'}} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-black">Get in touch with Raminta</Modal.Title>
                    </Modal.Header>
                    <Modal.Body></Modal.Body>
                    <div className="w-100 d-flex flex-column p-3 gap-2">
                    <textarea className="p-2 rounded border " ref={messageRef} id="declined" rows={5} cols={50}
                              placeholder="Your message to Raminta...   "></textarea>
                        <button className="getInTouchBtn w-100" onClick={handleMessageSent}>
                            Send
                        </button>
                    </div>


            </Modal>

        </>
    )
}

export default App

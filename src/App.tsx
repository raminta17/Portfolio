import './App.css'
import Header from "./components/Header.tsx";
import Navigation from "./components/Navigation.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import {useState, useEffect} from "react";
import Footer from "./components/Footer.tsx";
import {Modal} from "react-bootstrap";
import {Envelope} from "react-bootstrap-icons";
import {motion} from "framer-motion";
import {useForm, SubmitHandler} from "react-hook-form";


function App() {

    const [showBtn, setShowBtn] = useState(false);
    const [showModal, setShowModal] = useState(false);


    type Inputs = {
        senderEmail: string,
        message: string
    };

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Inputs>();
    const submitEmail: SubmitHandler<Inputs> = async (info) => {
        const options = {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                senderEmail: info.senderEmail,
                message: info.message
            })
        }
        const response = await fetch('http://localhost:8001/sendEmail', options);
        const data = await response.json();
        console.log('data from backend', data)
    }

    const handleCloseModal = () => {
        setShowModal(false);
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
            <div className="main d-flex flex-column gap-4"
            >
                <Navigation/>
                <About/>
                <Projects/>
                {showBtn &&
                    <motion.div
                        onClick={() => setShowModal(true)}
                        className="getInTouchBtn fixedBtn"
                        whileHover={{scale: 1.1}}
                        transition={{type: "spring", stiffness: 400, damping: 10}}
                    >
                        <Envelope/>
                    </motion.div>
                }
            </div>
            <Footer/>
            <Modal show={showModal}
                   style={{background: 'linear-gradient(184deg, rgba(0,0,0,0.6251750700280112) 100%, rgba(82,78,94,0.9389005602240896) 100%)'}}
                   onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-black">Get in touch</Modal.Title>
                </Modal.Header>
                <div className="w-100 d-flex flex-column p-3 gap-2">
                    <form onSubmit={handleSubmit(submitEmail)}>
                        <input type="email" {...register('senderEmail', {
                            required: 'Please provide your email address to send the message',
                            minLength: {value: 5, message: 'Invalid email'}
                        })}/>
                        {errors.senderEmail && <p>{errors.senderEmail.message}</p>}
                        <textarea
                            className="p-2 rounded border "
                            {...register('message', {
                                required: 'Your message can\'t be empty',
                                minLength: {value: 15, message: 'Minimum message length is 15 symbols.'}
                            })}
                            id="declined"
                            rows={5} cols={50}
                            placeholder="Your message...   "/>
                        {errors.message && <p>{errors.message.message}</p>}

                        <button
                            className="getInTouchBtn w-100"
                            type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default App

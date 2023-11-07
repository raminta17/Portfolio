import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
import {useUserStore} from "../models/store.tsx";
import profilePhoto from "../assets/Raminta_photo_square.jpg"
import {Github, Linkedin, Download} from "react-bootstrap-icons";

const About = () => {

    // const aboutRef = useRef(null);
    // const textRef = useRef(null);
    const [styleAbout, setStyleAbout] = useState({});
    const {ref, inView} = useInView({threshold: 0.5});
    const {ref: textRef, inView: isTextInView} = useInView({triggerOnce: true});
    const {setIsHomeInView, setIsAboutInView, setIsSkillsInView, setIsProjectsInView, setIsContactsInView} = useUserStore((state) => ({
        setIsHomeInView: state.setIsHomeInView,
        setIsProjectsInView: state.setIsProjectsInView,
        setIsSkillsInView: state.setIsSkillsInView,
        setIsContactsInView: state.setIsContactsInView,
        setIsAboutInView: state.setIsAboutInView
    }) )

    useEffect(() => {
        if (inView) {
            setIsProjectsInView(false)
            setIsContactsInView(false)
            setIsSkillsInView(false)
            setIsAboutInView(true)
            setIsHomeInView(false)
        }
    }, [inView])

    useEffect(() => {
        setStyleAbout({
            transform: isTextInView ? "none" : "translateX(200px)",
            opacity: isTextInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        });
    }, [isTextInView])


    return (
        <div id="About" className="py-5 d-flex flex-column about overflow-hidden">
            <div className="content mx-auto p-3 d-flex flex-column gap-5 about" ref={ref}>
                <h2 className="bottomBorder pb-3" >ABOUT</h2>
                <div
                    style={styleAbout}
                    className="d-flex align-items-center sm-column gap-5" ref={textRef}>
                    <div className="profilePhoto">
                        <div className="profilePhotoWrapper">
                            <div style={{backgroundImage: `url(${profilePhoto})`}}/>
                        </div>
                    </div>
                    <div  className="d-flex flex-column gap-3">
                        <div className="d-flex gap-3 aboutBtns">
                            <a href="https://github.com/raminta17" target="_blank"> <motion.div
                                className="getInTouchBtn"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <Github/>
                            </motion.div></a>
                            <a href="https://www.linkedin.com/in/raminta-alisauskaite" target="_blank"> <motion.div
                                className="getInTouchBtn"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <Linkedin/>
                            </motion.div></a>
                            <motion.div
                                className="getInTouchBtn"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <Download/>
                            </motion.div>
                        </div>
                        <div >After a 7 year career as a physiotherapist in Scotland, I discovered my passion for software
                            development; therefore, I decided to embark on a new career path. I am currently enrolled in a rigorous
                            six-month full-time course focused on JavaScript, TypeScript, React, and Node.js. This journey has been
                            incredibly fulfilling, and I am eager to apply my new skills in practical settings.
                        </div>
                        <div > I pride myself on my strong sense of responsibility, adaptability, proactiveness, and a relentless
                            desire for learning. My professional experience spans both collaborative team environments and
                            independent work. I look forward to an opportunity to contribute my skills and enthusiasm to a
                            dynamic and innovative field.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
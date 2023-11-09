import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {useInView} from 'react-intersection-observer';
import {useUserStore} from "../models/store.tsx";
import profilePhoto from "../assets/Raminta_photo_square.jpg"
import CV from "../assets/CV.pdf"
import {Github, Linkedin} from "react-bootstrap-icons";

const About = () => {

    // const aboutRef = useRef(null);
    // const textRef = useRef(null);
    const [styleAbout, setStyleAbout] = useState({});
    const {ref, inView} = useInView({threshold: 0.5});
    const {ref: textRef, inView: isTextInView} = useInView({triggerOnce: true});
    const {
        setIsHomeInView,
        setIsAboutInView,
        setIsSkillsInView,
        setIsProjectsInView,
        setIsContactsInView
    } = useUserStore((state) => ({
        setIsHomeInView: state.setIsHomeInView,
        setIsProjectsInView: state.setIsProjectsInView,
        setIsSkillsInView: state.setIsSkillsInView,
        setIsContactsInView: state.setIsContactsInView,
        setIsAboutInView: state.setIsAboutInView
    }))

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
                <h2 className="bottomBorder pb-3">ABOUT</h2>
                <div
                    style={styleAbout}
                    className="d-flex align-items-center sm-column gap-5" ref={textRef}>
                    <div className="profilePhoto">
                        <div className="profilePhotoWrapper">
                            <div style={{backgroundImage: `url(${profilePhoto})`}}/>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-3">
                        <div className="d-flex gap-3 aboutBtns">
                            <a href="https://github.com/raminta17" target="_blank">
                                <motion.div
                                    className="getInTouchBtn"
                                    whileHover={{scale: 1.1}}
                                    transition={{type: "spring", stiffness: 400, damping: 10}}
                                >
                                    <Github/>
                                </motion.div>
                            </a>
                            <a href="https://www.linkedin.com/in/raminta-alisauskaite" target="_blank">
                                <motion.div
                                    className="getInTouchBtn"
                                    whileHover={{scale: 1.1}}
                                    transition={{type: "spring", stiffness: 400, damping: 10}}
                                >
                                    <Linkedin/>
                                </motion.div>
                            </a>
                            <a  href={CV}
                                download="Raminta-Alisauskaite-CV"
                                target="_blank"
                                // rel="noreferrer"
                            >
                                <motion.div
                                    className="getInTouchBtn"
                                    whileHover={{scale: 1.1}}
                                    transition={{type: "spring", stiffness: 400, damping: 10}}
                                >
                                    CV
                                </motion.div>
                            </a>

                        </div>
                        <div>After a 7 year career as a physiotherapist in Scotland, I discovered my passion for
                            software development and it inspired me to pursue a new career path. I successfully
                            completed a six-month, full-time course at Code Academy to further my journey and it has
                            been incredibly fulfilling.
                        </div>
                        <div> Programming became a source of joy for me as I learned to craft code that
                            not only builds responsive websites with React but also enhances them with advanced
                            functionality, using JavaScript/Typescript and back-end programming with Node.js.
                            What started as an interest soon became therapeutic, and I realized that I had found a
                            career that seamlessly became my favorite hobby.
                        </div>
                        <div> What sets me apart is my unwavering sense of responsibility, loyalty, adaptability,
                            proactiveness, and thirst for continuous learning and improvement. My journey has exposed me
                            to collaborative team environments and independent work, allowing me to fine-tune my skills in
                            diverse settings.
                        </div>
                        <div>
                            I am excited about the possibilities that lie ahead and am eager to connect with like-minded
                            individuals and innovative teams. If you're looking for a dedicated and adaptable developer
                            with a passion for continuous improvement, I would love to hear from you. Let's create
                            something amazing together!
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
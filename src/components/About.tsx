import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {useInView} from 'react-intersection-observer';
import {useUserStore} from "../modules/store.tsx";
import profilePhoto from "../assets/Raminta_photo_square.jpg"
import CV from "../assets/Raminta_Alisauskaite_CV.pdf"
import {Github, Linkedin} from "react-bootstrap-icons";
// import {GeoAlt} from "react-bootstrap-icons";

const About = () => {

    const [styleAbout, setStyleAbout] = useState({});
    const {ref, inView} = useInView({threshold: 0.5});
    const {ref: textRef, inView: isTextInView} = useInView({triggerOnce: true});
    const {
        setIsHomeInView,
        setIsAboutInView,
        setIsSkillsInView,
        setIsEducationInView,
        setIsProjectsInView,
        setIsContactsInView
    } = useUserStore((state) => ({
        setIsHomeInView: state.setIsHomeInView,
        setIsProjectsInView: state.setIsProjectsInView,
        setIsSkillsInView: state.setIsSkillsInView,
        setIsEducationInView: state.setIsEducationInView,
        setIsContactsInView: state.setIsContactsInView,
        setIsAboutInView: state.setIsAboutInView
    }))

    useEffect(() => {
        if (inView) {
            setIsProjectsInView(false)
            setIsContactsInView(false)
            setIsSkillsInView(false)
            setIsEducationInView(false)
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
                    className="d-flex align-items-center md-column gap-5" ref={textRef}>
                    <div className="d-flex flex-column gap-4 align-items-center">
                        <div className="profilePhoto">
                            <div className="profilePhotoWrapper">
                                <div style={{backgroundImage: `url(${profilePhoto})`}}/>
                            </div>
                        </div>
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
                            <a href={CV}
                               download="Raminta-Alisauskaite-CV"
                               target="_blank"
                               rel="noreferrer"
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
                    </div>
                    <div className="d-flex flex-column md-align-center gap-3">
                        <div>I'm Raminta Ališauskaitė, Full Stack Web developer based in Vilnius, Lithuania.</div>
                        <div>After a 7 year career as a physiotherapist in Scotland, I discovered my passion for
                            software development and it inspired me to pursue a new career path. Programming became a
                            source of joy for me as I learned to craft full stack applications using React,
                            JavaScript/Typescript and Node.js. What started as an interest soon became therapeutic, and
                            I realized that I had found a career that seamlessly became my favorite hobby.
                        </div>
                        <div> What sets me apart is my unwavering sense of responsibility, loyalty, adaptability,
                            proactiveness, and thirst for continuous learning and improvement. I am excited about the
                            possibilities that lie ahead and am eager to connect with like-minded individuals and
                            innovative teams. If you're looking for a dedicated and adaptable developer , I would love
                            to hear from you. Let's create something amazing together!
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
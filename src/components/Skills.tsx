import {useEffect, useState, useRef} from "react";
import {useInView} from "framer-motion";
import {useUserStore} from "../models/store.tsx";


const Skills = () => {

    const skillsRef = useRef(null);
    const techSkillRef = useRef(null);
    const softSkillRef = useRef(null);
    const isSkillsInView = useInView(skillsRef);
    const [styleTechSkill, setStyleTechSkill] = useState({});
    const [styleSoftSkill, setStyleSoftSkill] = useState({});
    const isTechSkillInView = useInView(techSkillRef,{ once: true });
    const isSoftSkillInView = useInView(softSkillRef,{ once: true });
    const {setIsHomeInView, setIsAboutInView, setIsSkillsInView, setIsProjectsInView, setIsContactsInView} = useUserStore((state) => ({
        setIsHomeInView: state.setIsHomeInView,
        setIsProjectsInView: state.setIsProjectsInView,
        setIsSkillsInView: state.setIsSkillsInView,
        setIsContactsInView: state.setIsContactsInView,
        setIsAboutInView: state.setIsAboutInView

    }) )

    useEffect(() => {
        console.log(' i am in skills  in view use effect')
        if (isSkillsInView) {
            console.log('i am inside the if')
            setIsProjectsInView(false)
            setIsContactsInView(false)
            setIsSkillsInView(true)
            setIsAboutInView(false)
            setIsHomeInView(false)
        }
    }, [isSkillsInView])

    useEffect(() => {
        setStyleTechSkill({
            transform: isTechSkillInView ? "none" : "translateX(200px)",
            opacity: isTechSkillInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        });
    }, [isTechSkillInView]);

    useEffect(() => {
        setStyleSoftSkill({
            transform: isSoftSkillInView ? "none" : "translateX(200px)",
            opacity: isSoftSkillInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        });
    }, [isSoftSkillInView]);
    return (
        <div id="Skills" className="py-5" >
            <div className="content mx-auto p-3 d-flex flex-column gap-5 overflow-hidden" ref={skillsRef}>
                <h2 className="bottomBorder pb-3" >SKILLS</h2>
                <div className="skills d-flex gap-5 mt-2">
                    <div className="box " ref={techSkillRef}
                         style={styleTechSkill}
                    >
                        <h4 className="bottomBorder py-2 pb-3">Technical Skills</h4>
                        <ul className="p-3">
                            <li><i className="fa-brands fa-html5 text-danger"></i>HTML</li>
                            <li><i className="fa-brands fa-css3-alt text-primary"></i>CSS</li>
                            <li><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"
                                alt=""/>SCSS/SASS</li>
                            <li><i className="fa-brands fa-js text-warning"></i>Javascript</li>
                            <li><img
                                src="https://cdn.iconscout.com/icon/free/png-256/free-typescript-1174965.png?f=webp"
                                alt=""/>Typescript
                            </li>
                            <li><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
                                alt=""/>React</li>
                            <li><i className="fa-brands fa-node-js text-success"></i>Node.js</li>
                            <li><img
                                src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png"
                                alt=""/>Git</li>
                            <li><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
                                alt=""/>Bootstrap</li>
                            <li><img
                                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
                                alt=""/>MongoDB
                            </li>
                            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png" alt=""/>Socket.io</li>
                        </ul>
                    </div>
                    <div className="box p-4" ref={softSkillRef}
                         style={styleSoftSkill}
                    >
                        <h4 className="bottomBorder py-2 pb-3">Soft Skills</h4>
                        <ul className="p-3">
                            <li>High sense of responsibility</li>
                            <li>Adaptability</li>
                            <li>Loyalty</li>
                            <li>Professionalism</li>
                            <li>Team player</li>
                            <li>Problem-solving</li>
                            <li>Communication and teaching</li>
                            <li>Honesty</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Skills;
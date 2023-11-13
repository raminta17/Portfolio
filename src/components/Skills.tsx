import {useEffect, useState} from "react";
import {useInView} from 'react-intersection-observer';
import {useUserStore} from "../models/store.tsx";


const Skills = () => {

    const {ref: skillsRef, inView: isSkillsInView} = useInView({threshold: 0.5});
    const [styleTechSkill, setStyleTechSkill] = useState({});
    const [styleSoftSkill, setStyleSoftSkill] = useState({});
    const {ref: techSkillRef, inView: isTechSkillInView} = useInView({triggerOnce: true});
    const {ref: softSkillRef, inView: isSoftSkillInView} = useInView({triggerOnce: true});
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
        if (isSkillsInView) {
            setIsProjectsInView(false)
            setIsContactsInView(false)
            setIsSkillsInView(true)
            setIsEducationInView(false)
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
        <div id="Skills" className="py-5">
            <div className="content mx-auto p-3 d-flex flex-column gap-5 overflow-hidden" ref={skillsRef}>
                <h2 className="bottomBorder pb-3">SKILLS</h2>
                <div className="skills md-column d-flex gap-5 mt-2">
                    <div className="box" ref={techSkillRef}
                         style={styleTechSkill}
                    >
                        <h4 className="bottomBorder py-2 pb-3">Technical Skills</h4>
                        <div className="py-3 techSkills gap-4">
                            <div className="d-flex flex-column gap-2 align-items-center"><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"></img>HTML
                            </div>
                            <div className="d-flex flex-column gap-2 align-items-center"><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
                                alt=""/>CSS
                            </div>
                            <div className="d-flex flex-column gap-2 align-items-center"><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"
                                alt=""/>SCSS/SASS
                            </div>
                            <div className="d-flex flex-column gap-2 align-items-center"><i
                                className="fa-brands fa-js text-warning"></i>Javascript
                            </div>
                            <div className="d-flex flex-column gap-2 align-items-center"><img
                                src="https://cdn.iconscout.com/icon/free/png-256/free-typescript-1174965.png?f=webp"
                                alt=""/>Typescript
                            </div>
                            <div className="d-flex flex-column gap-2 align-items-center"><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
                                alt=""/>React
                            </div>
                            <div className="d-flex flex-column gap-2 align-items-center"><img
                                src="https://cdn.freebiesupply.com/logos/large/2x/redux-logo-png-transparent.png"
                                alt=""/>Redux
                            </div>
                            <div className="d-flex flex-column gap-2 align-items-center"><img
                                src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt=""/>Node.js
                            </div>
                            <div className="d-flex flex-column gap-2 align-items-center"><img
                                src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png"
                                alt=""/>Git
                            </div>
                            <div className="d-flex flex-column gap-2 align-items-center"><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
                                alt=""/>Bootstrap
                            </div>
                            <div className="d-flex flex-column gap-2 align-items-center"><img
                                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
                                alt=""/>MongoDB
                            </div>
                            <div className="d-flex flex-column gap-2 align-items-center"><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png"
                                alt=""/>Socket.io
                            </div>
                        </div>
                    </div>
                    <div className="box " ref={softSkillRef}
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
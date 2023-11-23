import {useEffect, useState} from "react";
import {useInView} from 'react-intersection-observer';
import {useUserStore} from "../modules/store.tsx";
import {techSkills, softSkills} from "../modules/data.tsx";


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
                            {techSkills.map((skill, index) =>
                                <div key={index} className="d-flex flex-column gap-2 align-items-center"><img
                                    src={skill.link}></img>{skill.title}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="box " ref={softSkillRef}
                         style={styleSoftSkill}
                    >
                        <h4 className="bottomBorder py-2 pb-3">Soft Skills</h4>
                        <ul className="p-3">
                            {softSkills.map((skill, index) => <li key={index}>{skill}</li>)}
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Skills;
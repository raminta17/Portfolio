import {useEffect, useRef, useState} from "react";
import {useInView} from "framer-motion";
import {useUserStore} from "../models/types.tsx";
import profilePhoto from "../assets/Raminta_photo.jpg"

const About = () => {

    const skillRef = useRef(null);
    const aboutRef = useRef(null);
    const textRef = useRef(null);
    const [styleAbout, setStyleAbout] = useState({});
    const [styleSkill, setStyleSkill] = useState({});
    const isSkillInView = useInView(skillRef);
    const isAboutInView = useInView(aboutRef);
    const isTextInView = useInView(textRef);
    const {setIsAboutInView, setIsProjectsInView, setIsContactsInView} = useUserStore((state) => ({
        setIsProjectsInView: state.setIsProjectsInView,
        setIsContactsInView: state.setIsContactsInView,
        setIsAboutInView: state.setIsAboutInView

    }) )

    useEffect(() => {
        if (isAboutInView) {
            setIsProjectsInView(false)
            setIsContactsInView(false)
            setIsAboutInView(true)
        }
    }, [isAboutInView])

    useEffect(() => {
        setStyleAbout({
            transform: isTextInView ? "none" : "translateX(200px)",
            opacity: isTextInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            backgroundImage: `linear-gradient(184deg, rgba(0, 0, 0, 0.7204131652661064) 0%, rgba(82, 78, 94, 0.9389005602240896) 100%), url(${profilePhoto})`
        });
    }, [isTextInView])

    useEffect(() => {
        // console.log("Element is in view: ", isSkillInView)
        setStyleSkill({
            transform: isSkillInView ? "none" : "translateY(200px)",
            opacity: isSkillInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        });
    }, [isSkillInView])




    return (
        <div id="About" className="content mx-auto p-3 d-flex flex-column gap-4 about mb-5" ref={aboutRef} >
            <h2 className="bottomBorder py-3">ABOUT</h2>
            <div>
                {/*<div>*/}
                {/*    <img src={profilePhoto} alt=""/>*/}
                {/*</div>*/}
                <div style={styleAbout} ref={textRef} className="bgSettings d-flex p-5 flex-column gap-3">
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


            <div className="skills d-flex gap-5 mt-2">
                <div className="box p-4" ref={skillRef} style={styleSkill}>
                    <h4 className="bottomBorder py-2 pb-3">Technical Skills</h4>
                    <ul className="p-3">
                        <li><i className="fa-brands fa-html5 text-danger"></i>HTML</li>
                        <li><i className="fa-brands fa-css3-alt text-primary"></i>CSS</li>
                        <li><i className="fa-brands fa-sass sass"></i>SCSS/SASS</li>
                        <li><i className="fa-brands fa-js text-warning"></i>Javascript</li>
                        <li><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAesz///8Acsmz0ewAdcoagM6It+IAcMmszOoAd8sAbsgAdMrs9fsAccny+f34/P7b6/fj7vgAasdup9yhxedfn9mXv+UwidHO4fPG3PHe7fjV5/VCkdQhg8/n8fm91e5+sN9Xm9d3rN5AkNSGtOGUvuWMgEGxAAAGMElEQVR4nO2c4XqiOhBAY4wiwRQtoiiKYu37v+KC7W4VJiFCvXfGb87fGsgpSUgmE8To1RH/dwWeDhvShw3p8224HL8eyzvD8bt5Nd7H94ZSvBqSDcnDhvRhQ/qwIX3YkD5sSB82pA8b0ocN6cOG9GFD+rAhfdiQPmxIHzakDxvShw3pw4b0YUP6sCF92JA+bEgfNqQPG9KHDenDhvRhQ/qwIX3YkD5sSB82pA8b0ocN6cOG9GFD+rAhfdiQPmxIHzakDxvShw3pw4b0YUP6sCF92JA+bEgfNkRDGEkTXDHSRCr0LjjM8PuegQ660D9AfzbKaScDka5n23xZkW+Ps9WpFNpd5ncMzTFbXNkVcydFTV295W63W+y+CuV/ybIsP9urq8zHajFqMZ+lkfF4lMMM39o37sk6stwjii5LW6F4dgieaxg93VCpaewsN5501XiQYei++3BDnXT/D6fa3VSHjTTPNQzV1qdoPnEOOVgMV+0bq83cr2y8d9Uar2FU+pdOHdUeZDj5NcG2odo/Ujyx1xvLM5w1bhxuHiu/t/ZFrIbGsw/+JT7YRlSkhnr86AUK25QBp2FYPn6Fo0ZuaG6vq60TNQdn+CliMRzfGqpzr2sc6BiaPo9wNLqA4ylGwz69sCIxYB2HGf6OXc3x5sbyaPlRvrok6Wm9hf6xu4NlMB1mOLOTAbVw/Px008Ik3DRmk0CqChlE59bb0r7CGGYoregLUEdhrL+/EbQ00v3NYlfJ+/flcvOsWZsdNQUqOfEqGq1BwftGqG+v/+laIiI0BLvhqjmM/CjmB2elERoGOVC0/TP9vTy+PHWNb2eAIfQ2zIApmaojHNlz4zQOhhgW7ZJACKBeQcZJxwMUKA0lsHD6hF52USk8gsJEDOFQnFdoH6Eh1EoH1AujITDSFJbFnwcIDQNoZVH6bzY1QGhooClt3vshIjSUYIxm2r0H474cIsNoBRlWq4d+NUFoqBLQcDSO/LZEGyA0tC6sqxlMD0eMhhqael9ZpsHDjhgNXaG25TmwhX4tYDQUyhXhmk+Fz/b9P1AaSnCV/8N4E/xX2SZ2BhmKqCtMmZXeHRKpIVT6njx99+uQOA2F2XUqjorEK2cIqaHfBun85NFWkRoKA8VbAcfuMAZWQ6FnXoqj3b5jSo7WUGjb7kWT7cQ55OA19FccnVzLDsSGIoCXUQCZI+iG2VBo773guIQ3DwVyQyF9E78cC2TchiIMOqaoP6wsYypyw+rFuIECUxBr+CmiNxShLj0TF05g5fEb1oneiZ8jmNxGwbC6mk6BXPYWMVSWhmF1vWDvkTC8BUYbKoZ1f9x0T1X37Xk4HcP6YEk07Xg/5u2HSMmwIjKJu0O2HyIxw3rQ2btekG0Bcob1PGdjH3TiVjMlaFg77q1h8dZGI0nDemA9WwKOrawNoobVmCPgIac1mpI1rJoq2BvjF2mlVwLw5bhpKFI2hI/VpI3pN2VDoaGueCJkGHX9PvoEbtJMEMNrWL8Qxu5oL7iVuqJiqPd1E2x2qsZNUsiwoYDUUIqvcHDszM6ja6iCf6UXrnaqTsBNmmmMCA1Dnd686LaOiL2BsqeaJ2fwGQaN8OHYrghuhifIDaVohSq2trQEDe5r4J7ThBr6wEAegttnEhpnkM9LwxJID65rXQI7vZZtG9xrCzCz9MrxcJ8KFZqJZXcR9/rQlZ+QnSeBjNT30a7Sek4Y+RrfOPdEi+PnKUmTywo8nvfFG/Y4jX7wkHqLNfZYW/gx0LB9C2SGQnbne7kATg9hMxTad0MUIgZenOgMRTigKzZnbEgND71PiINTWHyGQm16Ki7AjBOEhkJNejXUIgRn6BgNRRj2GG4KSzgApWE1okJRNCd5ZFljITUU8uOxb2PY8oXwGoowuPgPOIUjyRStoRCR8sxNjKl9ceAHIz67v7kXrwW1Lw7cEunUsVSqyBLdcSjhaYaX+K1Fn50ZZcJyBY868bFaFXcm6z/tG7RKt+h7CjSUWqSr46KYv12fZ/W/K7LZ6UNLnzMlVL6yq6QMAvk9oISRMdL3Q7tUDPvDhvRhQ/qwIX3YkD5sSB82pA8b0qdp+G5ejfd7w+X49VjeGb4wbEgfNqTP6xv+AWhMibmbj0LpAAAAAElFTkSuQmCC"
                            alt=""/>Typescript
                        </li>
                        <li><i className="fa-brands fa-react text-primary"></i>React</li>
                        <li><i className="fa-brands fa-node-js text-success"></i>Node.js</li>
                        <li><img
                            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
                            alt=""/>MongoDB
                        </li>
                        <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png" alt=""/>Socket.io</li>
                    </ul>
                </div>
                <div className="box p-4" ref={skillRef} style={styleSkill}>
                    <h4 className="bottomBorder py-2 pb-3">Soft Skills</h4>
                    <ul className="p-3">
                        <li>High sense of responsibility</li>
                        <li>Adaptability</li>
                        <li>Professionalism</li>
                        <li>Team player</li>
                        <li>Problem-solving</li>
                        <li>Communication and teaching</li>
                        <li>Honesty</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
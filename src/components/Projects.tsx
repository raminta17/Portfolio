import SingleProject from "./SingleProject.tsx";
import socialMedia1 from '../assets/social_media_1.png'
import socialMedia2 from '../assets/social_media_2.png'
import socialMedia3 from '../assets/social_media_3.png'
import socialMedia4 from '../assets/social_media_4.png'
import {useInView} from "framer-motion";
import {useUserStore} from "../models/types.tsx";
import {useEffect, useRef} from "react";

const Projects = () => {

    type ProjectType = {
        title: string,
        techUsed: TechType[],
        images: string[],
        projectInfo: string[],
        frontEnd: string,
        backEnd: string | null
    }
    type TechType = {
        title: string,
        logo: string
    }

    const projects: ProjectType[] = [
        {
            title: 'Social media website',
            techUsed: [
                {
                    title: 'Mongo DB',
                    logo: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png'
                },
                {
                    title: 'Socket.io',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png'
                },
                {
                    title: 'React',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png'
                },
                {
                    title: 'Node.js',
                    logo: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
                },
                {
                    title: 'Javascript',
                    logo: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png'
                },
                {
                    title: 'CSS',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
                }
            ],
            images: [socialMedia1, socialMedia2, socialMedia3, socialMedia4],
            projectInfo: ['Users registration, auto login', 'Live chats', 'Live tracking of online users', 'Live post updates', 'Responsive design'],
            frontEnd: 'https://github.com/raminta17/final_boss_frontEnd',
            backEnd: 'https://github.com/raminta17/final_boss_backEnd'
        },
        {
            title: 'Online battle game',
            techUsed: [
                {
                    title: 'Mongo DB',
                    logo: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png'
                },
                {
                    title: 'Socket.io',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png'
                },
                {
                    title: 'React',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png'
                },
                {
                    title: 'Node.js',
                    logo: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
                },
                {
                    title: 'Javascript',
                    logo: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png'
                },
                {
                    title: 'CSS',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
                }
            ],
            images: ['https://user-images.githubusercontent.com/62699647/272304705-2e899bea-c5a5-49ce-b44e-07edb7e1795d.png', 'https://user-images.githubusercontent.com/62699647/272305152-99abd6e8-b5e7-4aa1-9e26-626aaf48b506.png', 'https://user-images.githubusercontent.com/62699647/272306816-430dcbc8-03ce-4ade-ac78-fd894f96eaf4.png'],
            projectInfo: ['Players registration', 'Random battle inventory generation', 'Live tracking of online players', 'Live invitations to play', 'Timer on players turn during battle'],
            frontEnd: 'https://github.com/raminta17/battle_game_frontEnd',
            backEnd: 'https://github.com/raminta17/battle_game_backEnd'
        },
        {
            title: 'Monopoly like game (single player)',
            techUsed: [
                {
                    title: 'React',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png'
                },
                {
                    title: 'Javascript',
                    logo: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png'
                },
                {
                    title: 'CSS',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
                }
            ],
            images: ['https://raw.githubusercontent.com/raminta17/monopolyGame/main/img_4.png', 'https://github.com/raminta17/monopolyGame/blob/main/img.png?raw=true'],
            projectInfo: ['Choose your player figure', 'Random roll dice and player movement', 'Buy and sell streets', 'Random chance slots', 'Win the game if you bought all streets before running out of money'],
            frontEnd: 'https://github.com/raminta17/monopolyGame',
            backEnd: null
        },
        {
            title: 'Tamagotchi like game',
            techUsed: [
                {
                    title: 'Mongo DB',
                    logo: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png'
                },
                {
                    title: 'Node.js',
                    logo: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
                },
                {
                    title: 'React',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png'
                },
                {
                    title: 'Javascript',
                    logo: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png'
                },
                {
                    title: 'CSS',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
                }
            ],
            images: ['https://raw.githubusercontent.com/raminta17/tamagotchi_Front-End/main/img_2.png', 'https://github.com/raminta17/tamagotchi_Front-End/blob/main/img_1.png?raw=true', 'https://github.com/raminta17/tamagotchi_Front-End/blob/main/img.png?raw=true'],
            projectInfo: ['Take care of your pet before he runs out of hp', 'Automatic status updates from back end', 'Levels as the game progresses', 'Random production of eggs', 'Win the game if your tamagotchi reaches maximum level'],
            frontEnd: 'https://github.com/raminta17/tamagotchi_Front-End',
            backEnd: 'https://github.com/raminta17/tamagotchi_Back-End'
        }
    ]
    const projectsRef = useRef(null);
    const isProjectsInView = useInView(projectsRef);
    const {setIsAboutInView, setIsProjectsInView, setIsContactsInView} = useUserStore((state) => ({
        setIsProjectsInView: state.setIsProjectsInView,
            setIsContactsInView: state.setIsContactsInView,
            setIsAboutInView: state.setIsAboutInView

    }) )

    useEffect(() => {
        if(isProjectsInView) {
            setIsProjectsInView(true)
            setIsContactsInView(false)
            setIsAboutInView(false)
        }
    }, [isProjectsInView])

    return (
        <div id="Projects" className="projects py-5" ref={projectsRef}>
            <div className="content mx-auto p-3 d-flex flex-column gap-4">
                <h2 className="bottomBorder py-3">PROJECTS</h2>
                {projects.map((project:ProjectType,index:number) => <SingleProject key={index} project={project}/>)}
            </div>

        </div>
    );
};

export default Projects;
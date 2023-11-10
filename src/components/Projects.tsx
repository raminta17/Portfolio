import SingleProject from "./SingleProject.tsx";
import SM_posts from '../assets/posts.png'
import SM_createPost from '../assets/createPostModal.png'
import SM_messages from '../assets/messages.png'
import SM_messageModal from '../assets/messagModal.png'
import SM_profileRes from '../assets/profileResponsive.png'
import SM_usersRes from '../assets/usersResponsive.png'
import SM_startPage from '../assets/startPAge.png'
import SM_singlePost from '../assets/socialMedia/singlePost.png'
import BG_register from '../assets/BattleGame/registerPage.png';
import BG_prepare1 from '../assets/BattleGame/preparationPage1.png';
import BG_prepare2 from '../assets/BattleGame/prepare2.png';
import BG_battle from '../assets/BattleGame/battleArena.png';
import MONOP_start from '../assets/monopoly/start.png';
import MONOP_game from '../assets/monopoly/game.png';
import MONOP_lost from '../assets/monopoly/lost.png';
import TAM_lost from '../assets/tamagotchi/lost.png';
import TAM_start from '../assets/tamagotchi/start.png';
import TAM_game from '../assets/tamagotchi/game.png';
import GD_game from '../assets/golddigGame/game.png';
import EL_start from '../assets/elevator/start.png';
import EL_end from '../assets/elevator/end.png';
import MOV_seats from '../assets/movies/chooseSeats.png';
import MOV_movies from '../assets/movies/movies.png';
import {useInView} from 'react-intersection-observer';
import {useUserStore} from "../models/store.tsx";
import {useEffect} from "react";

const Projects = () => {

    type ProjectType = {
        title: string,
        techUsed: TechType[],
        images: string[],
        projectInfo: string[],
        frontEnd: string,
        backEnd: string | null,
        try: TechType | null
    }
    type TechType = {
        title: string,
        link: string
    }

    const projects: ProjectType[] = [
        {
            title: 'Social media website',
            techUsed: [
                {
                    title: 'Mongo DB',
                    link: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png'
                },
                {
                    title: 'Socket.io',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png'
                },
                {
                    title: 'React',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png'
                },
                {
                    title: 'Node.js',
                    link: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
                },
                {
                    title: 'Javascript',
                    link: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png'
                },
                {
                    title: 'CSS',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
                },
                {
                    title: 'Bootstrap',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png'
                },
                {
                    title: 'Redux',
                    link: 'https://cdn.freebiesupply.com/logos/large/2x/redux-logo-png-transparent.png'
                }
            ],
            images: [SM_posts, SM_singlePost, SM_startPage, SM_messages, SM_createPost, SM_messageModal, SM_profileRes, SM_usersRes],
            projectInfo: ['Users registration, hashed passwords', 'Users, posts, conversations stored in MongoDb', 'Auto login', 'User authentication with JWT', 'Live tracking of online users', 'Live chats', 'Live post updates', 'Responsive design'],
            frontEnd: 'https://github.com/raminta17/final_boss_frontEnd',
            backEnd: 'https://github.com/raminta17/final_boss_backEnd',
            try: null
        },
        {
            title: 'Online battle game',
            techUsed: [
                {
                    title: 'Mongo DB',
                    link: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png'
                },
                {
                    title: 'Socket.io',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png'
                },
                {
                    title: 'React',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png'
                },
                {
                    title: 'Node.js',
                    link: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
                },
                {
                    title: 'Javascript',
                    link: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png'
                },
                {
                    title: 'CSS',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
                },
                {
                    title: 'Bootstrap',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png'
                },
                {
                    title: 'Redux',
                    link: 'https://cdn.freebiesupply.com/logos/large/2x/redux-logo-png-transparent.png'
                }
            ],
            images: [BG_prepare1, BG_register, BG_prepare2, BG_battle],
            projectInfo: ['Players registration, stored in MongoDb', 'Random weapons, armour, potions generation', 'Inventory management', 'Select equipment for battle', 'Live tracking of online players', 'Live invitations to play', 'Live battle arena', 'Timer on players turn during battle', 'Tracking of total victories and loses'],
            frontEnd: 'https://github.com/raminta17/battle_game_frontEnd',
            backEnd: 'https://github.com/raminta17/battle_game_backEnd',
            try: null
        },
        {
            title: 'Monopoly like game (single player)',
            techUsed: [
                {
                    title: 'React',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png'
                },
                {
                    title: 'Javascript',
                    link: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png'
                },
                {
                    title: 'CSS',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
                },
                {
                    title: 'Redux',
                    link: 'https://cdn.freebiesupply.com/logos/large/2x/redux-logo-png-transparent.png'
                }
            ],
            images: [MONOP_game, MONOP_start, MONOP_lost],
            projectInfo: ['Choose player figure', 'Random roll dice', 'Buy and sell streets', 'Player\'s movement around the board (get money if you made a full circle)', 'Random chance slots (win or loose money)', 'Income tax slots', 'Win the game if you bought all streets before running out of money'],
            frontEnd: 'https://github.com/raminta17/monopolyGame',
            backEnd: null,
            try: {
                title: ' on desktop (no responsive design)',
                link: 'https://monopoly-game-six.vercel.app/'
            }
        },
        {
            title: 'Tamagotchi like game',
            techUsed: [
                {
                    title: 'Node.js',
                    link: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
                },
                {
                    title: 'React',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png'
                },
                {
                    title: 'Javascript',
                    link: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png'
                },
                {
                    title: 'CSS',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
                },
                {
                    title: 'Redux',
                    link: 'https://cdn.freebiesupply.com/logos/large/2x/redux-logo-png-transparent.png'
                }
            ],
            images: [TAM_game, TAM_start, TAM_lost],
            projectInfo: ['Select your pet', 'Take care of it before it runs out of health points', 'Automatic status updates from back end', 'Experience points and levels increases as the game progresses', 'Random production of eggs to gain money'],
            frontEnd: 'https://github.com/raminta17/tamagotchi_Front-End',
            backEnd: 'https://github.com/raminta17/tamagotchi_Back-End',
            try: null
        },
        {
            title: 'Gold digging game',
            techUsed: [
                {
                    title: 'React',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png'
                },
                {
                    title: 'Javascript',
                    link: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png'
                },
                {
                    title: 'CSS',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
                }
            ],
            images: [GD_game],
            projectInfo: ['Dig gold while you still have energy', 'Sell gold for randomly generated price', 'Buy upgrades (find more gold, regain energy, increase inventory slots)', 'Upgrade prices increases after buying them'],
            frontEnd: 'https://github.com/raminta17/goldDigGame',
            backEnd: null,
            try: null
        },
        {
            title: 'Movie reservation application',
            techUsed: [
                {
                    title: 'Javascript',
                    link: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png'
                },
                {
                    title: 'CSS',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
                },
                {
                    title: 'Bootstrap',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png'
                },
                {
                    title: 'HTML',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png'
                }
            ],
            images: [MOV_seats, MOV_movies],
            projectInfo: ['Login, profile page', 'Update username, photo, select gender', 'Choose a movie and reserve seats', 'Seats reservation stored in local storage'],
            frontEnd: 'https://github.com/raminta17/liftas',
            backEnd: null,
            try: null
        },
        {
            title: 'Fun little elevator game',
            techUsed: [
                {
                    title: 'Javascript',
                    link: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png'
                },
                {
                    title: 'CSS',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
                },
                {
                    title: 'Bootstrap',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png'
                },
                {
                    title: 'HTML',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png'
                }
            ],
            images: [EL_start, EL_end],
            projectInfo: ['Go to the floor where the person waits', 'Take the person to the floor he wants'],
            frontEnd: 'https://github.com/raminta17/liftas',
            backEnd: null,
            try: null
        }
    ]
    const {ref: projectsRef, inView: isProjectsInView} = useInView({threshold: 0.2});
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
        if (isProjectsInView) {
            setIsProjectsInView(true)
            setIsContactsInView(false)
            setIsAboutInView(false)
            setIsSkillsInView(false)
            setIsHomeInView(false)
        }
    }, [isProjectsInView])

    return (
        <div id="Projects" className="projects py-5 overflow-hidden" ref={projectsRef}>
            <div className="content mx-auto p-3 d-flex flex-column gap-5">
                <h2 className="bottomBorder pb-3">PROJECTS</h2>
                {projects.map((project: ProjectType, index: number) => <SingleProject key={index} project={project}/>)}
            </div>

        </div>
    );
};

export default Projects;
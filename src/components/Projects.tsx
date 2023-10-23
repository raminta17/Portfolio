import SingleProject from "./SingleProject.tsx";

const Projects = () => {

    type ProjectType = {
        title: string,
        techUsed: TechType[],
        images: string[],
        projectInfo: string[]
    }
    type TechType = {
        title: string,
        logo: string
    }

    const projects: ProjectType[] = [
        {
            title: 'Social media page',
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
            images: ['https://www.ncsc.gov.uk/images/social-icons.jpg'],
            projectInfo: ['Users registration, auto login', 'Live chats', 'Live tracking of online users', 'Live post updates', 'Responsive design']
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
            images: ['https://www.ncsc.gov.uk/images/social-icons.jpg'],
            projectInfo: ['Players registration', 'Random battle inventory generation', 'Live tracking of online players', 'Live invitations to play', 'Timer on players turn during battle']
        }
    ]


    return (
        <div id="projects" className="w-75 mx-auto p-3 d-flex flex-column gap-4 projects">
            <h2 className="bottomBorder py-3">Projects</h2>
            {projects.map((project:ProjectType,index:number) => <SingleProject key={index} project={project}/>)}
        </div>
    );
};

export default Projects;
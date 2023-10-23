
type ProjectType = {
    project: {
        title: string,
        techUsed: TechType[],
        images: string[],
        projectInfo: string[]
    }
}
type TechType = {
    title: string,
    logo: string
}

const SingleProject = ({ project }:ProjectType)=>  {

    console.log(project);
    return (
        <div className="box">
            <div className="d-flex gap-2 align-items-center">
                <h4 className="m-0">{project.title}</h4>
                {project.techUsed.map((tech: TechType, index: number) => <img key={index} src={tech.logo} alt="" />)}
            </div>

            <ul className="p-3">
                {project.projectInfo.map((info: string, index: number) => <li key={index}>{info}</li>)}
            </ul>
        </div>
    );
};

export default SingleProject;

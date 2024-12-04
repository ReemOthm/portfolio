import { projectsData } from "../data";

const Projects = ()=>{

    const myProjects = projectsData

    return (
        <section className="flex items-center gap-5 justify-center flex-wrap">
            {
                myProjects.map(pro=>(
                    <div key={pro.projectName} className="bg-indigo-50 hover:bg-gray-100 max-w-sm w-md-1/2 w-lg-1/3 duration-300 rounded-md even:bg-gray-100">
                        <div className="">
                            <img className="h-auto max-w-sm" src={pro.projectImage} alt={pro.projectName} />                        
                        </div>
                        <div className="flex justify-between p-2">
                            <span className="text-lg self-center">
                                {pro.projectName}
                            </span>
                            <div className="flex gap-2 pt-2">
                                <button className="rounded-md px-2 py-1 bg-gray-300 text-gray-700 dark:bg-gray-500 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400">
                                <a href={pro.deployLink}>
                                    Project Link
                                </a>
                                </button>
                                <button className="rounded-md px-2 py-1 bg-gray-300 text-gray-700 dark:bg-gray-500 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400">
                                <a href={pro.githubRrpo}>
                                    Github Repo
                                </a>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default Projects;
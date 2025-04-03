import { useState } from "react";
import { projectsData } from "../data";
import { technologies } from "../utils";

const Projects = ()=>{

    const myProjects = projectsData
    const tools = technologies(projectsData)
    const [products, setProjects] = useState(myProjects)

    const handleChooseTool = (e:React.MouseEvent)=>{
        const target = (e.target as HTMLLIElement)
        if(target.parentElement){
            Array.from(target.parentElement.children).forEach((e) => {
                e.classList.remove("bg-gray-700");
                e.classList.remove("text-white");
                // e.classList.add("bg-[#9a8080]");
            });
        }
        target.classList.remove("bg-[#9a8080]");
        target.classList.add("bg-gray-700");
        target.classList.add("text-white");
        const list =  myProjects.filter(item=> item.tools.includes(target.textContent || ""))
        target.textContent == "All" ? setProjects(myProjects) : setProjects(list)
    }

    return (
        <>
            <div className="flex justify-center mb-6">
                <ul className="flex bg-[#9a8080] flex-wrap justify-center rounded-lg gap-3 border border-[#807e7f] m-6 p-4">
                    {
                        tools.map((item, index)=>(
                            <li key={index} onClick={(e)=>{handleChooseTool(e)}} 
                                className="bg-[#dfd5d5] rounded-md p-1 cursor-pointer hover:bg-gray-700 hover:text-white"
                            >
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <section className="flex gap-5 justify-center flex-wrap m-6 pb-10">
                {
                    products.map(pro=>(
                        <div key={pro.projectName} className="bg-indigo-50 hover:bg-gray-100 flex-grow max-w-sm duration-300 rounded-md even:bg-gray-100 ">
                            <div className="w-full">
                                <img className="h-auto w-full" src={pro.projectImage} alt={pro.projectName} />                        
                            </div>
                            <div className="flex justify-between p-2">
                                <span className="text-lg self-center">
                                    {pro.projectName}
                                </span>
                                <div className="flex gap-2 pt-2">
                                    <button className="text-sm rounded-md px-2 py-1 bg-[#885b5b] text-white hover:bg-[#a77777]">
                                        <a target="_blank" href={pro.deployLink}>
                                            Project Link
                                        </a>
                                    </button>
                                    <button className="text-sm rounded-md px-2 py-1 bg-gray-700 text-white hover:bg-gray-600 ">
                                        <a target="_blank" href={pro.githubRrpo}>
                                            Github Repo
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <ul className="flex flex-wrap gap-2 p-2">
                                {pro.tools.map(item=> (
                                    <li key={item} className="bg-[#dfd5d5] rounded-md p-1"
                                    >{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default Projects;
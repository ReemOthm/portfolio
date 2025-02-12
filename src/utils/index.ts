import { ProjectsData } from "../data"

export const technologies = (data: ProjectsData[])=>{
    const tech:Array<Array<string>> = [] 
    data.map((item:ProjectsData)=>{ tech.push(item.tools)})
    const tools = new Set(tech.flat())
    return ["All", ...tools]
}
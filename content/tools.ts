export type Tool={slug:string;title:string;description:string;category:"text"|"data"|"generator";status:"ready"|"soon";featured?:boolean};
export const tools:readonly Tool[]=[
{slug:"tool1",title:"Text Workshop",description:"Clean, format, inspect, and transform text in one focused workspace.",category:"text",status:"ready",featured:true},
{slug:"tool2",title:"Data Viewer",description:"Turn compact datasets into a clear, readable overview.",category:"data",status:"soon"},
{slug:"tool3",title:"Quick Generator",description:"Create IDs, sample values, and useful snippets in seconds.",category:"generator",status:"soon"}];

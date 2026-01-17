import { DetectorContext, RawIssue } from "../collectors/index.js";
import { readLines } from "../utils/fs.js";
const markers=["@deprecated","TODO: remove","legacy","deprecate"];
export const runDeprecated=async(ctx:DetectorContext):Promise<RawIssue[]>=>{const issues:RawIssue[]=[];for(const file of ctx.files){const lines=readLines(file);lines.forEach((line,index)=>{if(markers.some((marker)=>line.includes(marker)))issues.push({type:"deprecated",title:"Deprecated marker",file,startLine:index+1,endLine:index+1,evidence:{note:line.trim().slice(0,120)}});});}return issues;};

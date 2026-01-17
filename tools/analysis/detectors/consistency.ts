import path from "path";
import { DetectorContext, RawIssue } from "../collectors/index.js";
export const runConsistency=async(ctx:DetectorContext):Promise<RawIssue[]>=>{const issues:RawIssue[]=[];for(const file of ctx.files){const base=path.basename(file);if(base.includes("_"))issues.push({type:"consistency",title:"Underscore file name",file,startLine:1,endLine:1,evidence:{note:base}});}return issues;};

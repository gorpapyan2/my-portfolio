import { DetectorContext, RawIssue, inferPublicApi } from "../collectors/index.js";
import { readText } from "../utils/fs.js";
const branches=/\b(if|for|while|case|catch)\b|&&|\|\||\?/g;
const importPattern=/\bimport\b|require\s*\(/g;
export const runComplexity=async(ctx:DetectorContext):Promise<RawIssue[]>=>{const issues:RawIssue[]=[];for(const file of ctx.files){const text=readText(file);const branchCount=text.match(branches)?.length??0;if(branchCount>ctx.config.complexityMaxBranches)issues.push({type:"complexity",title:`High complexity (${branchCount})`,file,startLine:1,endLine:1,evidence:{loc:branchCount,isPublicApi:inferPublicApi(file)}});const importCount=text.match(importPattern)?.length??0;if(importCount>ctx.config.couplingMaxImports)issues.push({type:"coupling",title:`High coupling (${importCount} imports)`,file,startLine:1,endLine:1,evidence:{fanOut:importCount,isPublicApi:inferPublicApi(file)}});}return issues;};

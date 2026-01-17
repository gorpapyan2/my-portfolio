import { execSync } from "child_process";
export const gitAgeDays=(filePath:string)=>{try{const out=execSync(`git log -1 --format=%ct -- "${filePath}"`,{stdio:["ignore","pipe","ignore"]}).toString().trim();if(!out)return undefined;const ageMs=Date.now()-Number(out)*1000;return Math.max(0,Math.floor(ageMs/(1000*60*60*24)));}catch{return undefined;}};
export const gitChurn=(filePath:string)=>{try{const out=execSync(`git rev-list --count HEAD -- "${filePath}"`,{stdio:["ignore","pipe","ignore"]}).toString().trim();return out?Number(out):undefined;}catch{return undefined;}};

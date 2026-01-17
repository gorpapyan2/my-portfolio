import fs from "fs";
import path from "path";
export const readText=(filePath:string)=>fs.readFileSync(filePath,"utf8");
export const readLines=(filePath:string)=>readText(filePath).split(/\r?\n/);
export const ensureDir=(dirPath:string)=>{if(!fs.existsSync(dirPath))fs.mkdirSync(dirPath,{recursive:true});};
export const isIgnored=(filePath:string,ignore:string[])=>ignore.some((token)=>filePath.includes(token));
export const listFiles=(root:string,extensions:string[],ignore:string[])=>{const results:string[]=[];const stack=[root];while(stack.length){const current=stack.pop();if(!current||isIgnored(current,ignore))continue;const stat=fs.statSync(current);if(stat.isDirectory()){for(const entry of fs.readdirSync(current))stack.push(path.join(current,entry));continue;}if(extensions.some((ext)=>current.endsWith(ext)))results.push(current);}return results;};
export const toPosix=(filePath:string)=>filePath.split(path.sep).join(path.posix.sep);

import fs from "fs";
import path from "path";
import { Report } from "../types.js";
import { ensureDir } from "../utils/fs.js";
export const writeJsonReport=(report:Report,reportDir:string)=>{ensureDir(reportDir);const outPath=path.join(reportDir,"analysis.json");fs.writeFileSync(outPath,JSON.stringify(report,null,2));return outPath;};

import fs from "fs";
import path from "path";
import { Report } from "../types.js";
import { ensureDir } from "../utils/fs.js";
const formatTotals=(report:Report)=>`| Type | Count |\n| --- | --- |\n${Object.entries(report.summary.totalsByType).map(([type,count])=>`| ${type} | ${count} |`).join("\n")}`;
const formatIssueList=(report:Report)=>report.modules.map((module)=>{const issues=module.issues.map((issue)=>`- [${issue.priority}] ${issue.title} (${issue.file}:${issue.startLine})`).join("\n");return `### ${module.name}\n\n<details>\n<summary>Issues (${module.issues.length})</summary>\n\n${issues}\n\n</details>\n`;}).join("\n");
const formatTop=(report:Report)=>report.modules.flatMap((module)=>module.issues).sort((a,b)=>b.impact-a.impact).slice(0,20).map((issue)=>`- [${issue.priority}] ${issue.title} (${issue.file}:${issue.startLine})`).join("\n")||"- None";
const formatRoadmap=(report:Report)=>report.summary.roadmapPhases.map((phase)=>`#### ${phase.name}\n${phase.items.map((item)=>`- [ ] ${item}`).join("\n")}`).join("\n\n");
export const writeMarkdownReport=(report:Report,reportDir:string)=>{ensureDir(reportDir);const outPath=path.join(reportDir,"analysis.md");const content=["# Analysis Report","","## Executive summary","",formatTotals(report),"","## Top 20 cleanup candidates","",formatTop(report),"","## Modules","",formatIssueList(report),"","## Roadmap","",formatRoadmap(report),""].join("\n");fs.writeFileSync(outPath,content);return outPath;};

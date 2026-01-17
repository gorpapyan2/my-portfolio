import { IssueType } from "./types.js";
const defaults:Record<IssueType,string[]>={
  duplication:["Extract shared helper and reuse across call sites.","Add a focused unit test before refactor."],
  unused:["Remove export and adjust imports.","Verify via build/lint."],
  dead:["Confirm no runtime entrypoint references.","Delete file and run tests."],
  deprecated:["Replace deprecated APIs and add deprecation lint.","Add migration note in changelog."],
  complexity:["Split function into smaller helpers.","Add tests around branches before refactor."],
  coupling:["Reduce imports via facades or adapters.","Break cycles and isolate shared utilities."],
  consistency:["Align naming and error patterns with project conventions.","Codemod to standardize usage."],
};
export const suggest=(type:IssueType)=>defaults[type]??[];

import http from "node:http";
import { writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";

const PORT = Number(process.env.ADMIN_PORT ?? 5656);
const ABOUT_PATH = "src/content/about.data.json";

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === "PUT" && req.url === "/about-data") {
    const body = await readBody(req);
    await writeFile(ABOUT_PATH, body, "utf8");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  if (req.method === "POST" && req.url === "/rebuild-cv") {
    const child = spawn("npm", ["run", "build:cv"], {
      stdio: "inherit",
      shell: true
    });
    child.on("close", (code) => {
      res.writeHead(code === 0 ? 200 : 500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: code === 0, code }));
    });
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, () => {
  console.log(`Admin dev server listening on http://localhost:${PORT}`);
});

function readBody(req: http.IncomingMessage) {
  return new Promise<string>((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

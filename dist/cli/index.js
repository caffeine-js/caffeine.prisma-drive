#!/usr/bin/env node

// src/cli/index.ts
import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var schemaPath = path.resolve(__dirname, "../../prisma/schema.prisma");
console.log(`[Prisma Drive] Using schema: ${schemaPath}`);
var args = process.argv.slice(2);
var finalArgs = args[0] === "deploy" ? ["migrate", "deploy", ...args.slice(1)] : args;
var child = spawn("bun prisma", [...finalArgs, "--schema", schemaPath], {
  stdio: "inherit",
  shell: true
});
child.on("exit", (code) => {
  process.exit(code ?? 0);
});

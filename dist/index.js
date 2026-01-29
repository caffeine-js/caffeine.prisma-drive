// src/generated/prisma/client.ts
import "process";
import * as path from "path";
import { fileURLToPath } from "url";
import "@prisma/client/runtime/client";

// src/generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.3.0",
  "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
  "activeProvider": "postgresql",
  "inlineSchema": 'generator client {\n  provider = "prisma-client"\n  output   = "../src/generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nmodel PostType {\n  id            String    @id @default(uuid())\n  createdAt     DateTime\n  updatedAt     DateTime?\n  name          String    @unique\n  slug          String    @unique\n  schema        String\n  isHighlighted Boolean\n  posts         Post[]\n\n  @@index([slug])\n}\n\nmodel PostTag {\n  id        String    @id @default(uuid())\n  createdAt DateTime\n  updatedAt DateTime?\n  name      String    @unique\n  slug      String    @unique\n  hidden    Boolean\n  posts     Post[]    @relation("PostToPostTag")\n\n  @@index([slug])\n}\n\nmodel PostContent {\n  id        String    @id @default(uuid())\n  createdAt DateTime\n  updatedAt DateTime?\n  postId    String    @unique\n  content   String\n  info      Json\n  post      Post      @relation(fields: [postId], references: [id], onDelete: Cascade)\n}\n\nmodel Post {\n  id          String       @id @default(uuid())\n  createdAt   DateTime\n  updatedAt   DateTime?\n  postTypeId  String\n  name        String       @unique\n  slug        String       @unique\n  description String\n  cover       String\n  postType    PostType     @relation(fields: [postTypeId], references: [id])\n  postContent PostContent?\n  tags        PostTag[]    @relation("PostToPostTag")\n\n  @@index([slug])\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"PostType":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"name","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"schema","kind":"scalar","type":"String"},{"name":"isHighlighted","kind":"scalar","type":"Boolean"},{"name":"posts","kind":"object","type":"Post","relationName":"PostToPostType"}],"dbName":null},"PostTag":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"name","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"hidden","kind":"scalar","type":"Boolean"},{"name":"posts","kind":"object","type":"Post","relationName":"PostToPostTag"}],"dbName":null},"PostContent":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"postId","kind":"scalar","type":"String"},{"name":"content","kind":"scalar","type":"String"},{"name":"info","kind":"scalar","type":"Json"},{"name":"post","kind":"object","type":"Post","relationName":"PostToPostContent"}],"dbName":null},"Post":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"postTypeId","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"cover","kind":"scalar","type":"String"},{"name":"postType","kind":"object","type":"PostType","relationName":"PostToPostType"},{"name":"postContent","kind":"object","type":"PostContent","relationName":"PostToPostContent"},{"name":"tags","kind":"object","type":"PostTag","relationName":"PostToPostTag"}],"dbName":null}},"enums":{},"types":{}}');
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer } = await import("buffer");
  const wasmArray = Buffer.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// src/generated/prisma/internal/prismaNamespace.ts
import * as runtime2 from "@prisma/client/runtime/client";
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var defineExtension = runtime2.Extensions.defineExtension;

// src/generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/prisma.ts
import { PrismaPg } from "@prisma/adapter-pg";
var adapter = new PrismaPg({ connectionString: process.env?.DATABASE_URL });
var prisma = new PrismaClient({ adapter });
export {
  prisma
};

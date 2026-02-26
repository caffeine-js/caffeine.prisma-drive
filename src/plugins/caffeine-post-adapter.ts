import { connectPrisma } from "@/connect-prisma";
import Elysia from "elysia";

export async function CaffeinePostAdapter(connectionString: string) {
    const prisma = await connectPrisma(connectionString);

    return new Elysia().decorate("postPrismaClient", prisma);
}

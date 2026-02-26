import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { DatabaseUnavailableException } from "@caffeine/errors/infra";

export async function connectPrisma(
    connectionString: string,
): Promise<PrismaClient> {
    const adapter = new PrismaPg({ connectionString });

    const prisma = new PrismaClient({
        adapter,
        log: ["query", "error"],
    });

    try {
        await prisma.$connect();
        return prisma;
    } catch {
        throw new DatabaseUnavailableException("system@boot");
    }
}

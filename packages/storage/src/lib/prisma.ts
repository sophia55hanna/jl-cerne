import { Pool } from "pg";
import { PrismaClient } from "../generated/client";
import { PrismaPg } from "@prisma/adapter-pg";

const dBConnection = process.env.DATABASE_URL

const poolManager = new Pool({ connectionString: dBConnection })

const validJSBridge = new PrismaPg(poolManager)

export const prisma = new PrismaClient({
    log: ['query', 'error'],
    adapter: validJSBridge
})
// Mock database client for development
// In production, this would use PrismaClient:
// import { PrismaClient } from "@prisma/client"
// export const db = new PrismaClient()

// Mock implementation for when Prisma engine isn't available
type MockModel = {
  findUnique: (args: unknown) => Promise<null>
  findFirst: (args: unknown) => Promise<null>
  findMany: (args?: unknown) => Promise<unknown[]>
  create: (args: unknown) => Promise<{ id: string }>
  update: (args: unknown) => Promise<{ id: string }>
  delete: (args: unknown) => Promise<{ id: string }>
  count: (args?: unknown) => Promise<number>
}

const createMockModel = (): MockModel => ({
  findUnique: async () => null,
  findFirst: async () => null,
  findMany: async () => [],
  create: async () => ({ id: crypto.randomUUID() }),
  update: async () => ({ id: crypto.randomUUID() }),
  delete: async () => ({ id: crypto.randomUUID() }),
  count: async () => 0,
})

export const db = {
  user: createMockModel(),
  subscription: createMockModel(),
  jobRole: createMockModel(),
  interview: createMockModel(),
  demoLead: createMockModel(),
  reportToken: createMockModel(),
  $connect: async () => {},
  $disconnect: async () => {},
}

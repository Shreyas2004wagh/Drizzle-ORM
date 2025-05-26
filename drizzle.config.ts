import type { Config } from "drizzle-kit";

export default {
  schema: "./schema/schema.ts",
  out: "./drizzle",
  dialect: "sqlite", // ✅ Required
  dbCredentials: {
    url: "./sqlite.db", // ✅ Path to your SQLite file
  },
} satisfies Config;

import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

import { db } from "@/db/drizzle";
import { users } from "@/db/schema";

const app = new Hono().post(
  "/",
  zValidator(
    "json",
    z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(3).max(20),
    })
  ),
  async (c) => {
    const { name, email, password } = c.req.valid("json");

    const user = await db.select().from(users).where(eq(users.email, email));

    if (user[0]) {
      return c.json({ error: "User already exists" }, 400);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await db.insert(users).values({
      email,
      name,
      password: hashedPassword,
    });

    return c.json(null, 200);
  }
);

export default app;
import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { replicate } from "@/lib/replicate";

const app = new Hono()
  .post(
    "/remove-bg",
    zValidator(
      "json",
      z.object({
        image: z.string(),
      })
    ),
    async (c) => {
      const { image } = c.req.valid("json");

      const input = {
        image: image,
      };

      const output: unknown = await replicate.run(
        "lucataco/remove-bg:95fcc2a26d3899cd6c2691c900465aaeff466285a65c14638cc5f36f34befaf1",
        { input }
      );

      const res = output as string;
      console.log(res);
      return c.json({ data: res });
    }
  )
  .post(
    "/generate-image",
    zValidator(
      "json",
      z.object({
        prompt: z.string(),
      })
    ),
    async (c) => {
      const { prompt } = c.req.valid("json");
      const input = {
        cfg: 3.5,
        steps: 28,
        prompt: prompt,
        aspect_ratio: "3:2",
        output_format: "webp",
        output_quality: 90,
        negative_prompt: "",
        prompt_strength: 0.85,
      };

      const output = await replicate.run("stability-ai/stable-diffusion-3", {
        input,
      });

      const res = output as Array<string>;
      return c.json({ data: res[0] });
    }
  );

export default app;

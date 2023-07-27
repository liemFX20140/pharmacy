import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  addProductToList: protectedProcedure
    .input(
      z.object({
        sku: z.string(),
        unit: z.string(),
        productName: z.string(),
        provider: z.string(),
        manufactor: z.string(),
        expires: z.number(),
        ingredient: z.string().optional(),
        concentration: z.string().optional(),
        note: z.string().optional(),
        category: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.product.create({
        data: {
          sku: input.sku,
          unit: input.unit,
          productName: input.productName,
          provider: input.provider,
          manufactor: input.manufactor,
          category: input.category,
          expires: input.expires,
          note: input.note,
        },
      });
    }),
});

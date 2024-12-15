import { z } from 'zod';

export const ProcessEnvironment = z.object({
  NODE_ENV: z.enum(['development', 'production']),
});

export type ProcessEnvironment = z.infer<typeof ProcessEnvironment>;

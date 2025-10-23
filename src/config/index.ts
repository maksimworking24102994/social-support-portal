import { getRequiredEnvs } from "./env";

export const env = getRequiredEnvs([
  "OPENAI_API_KEY",
  "API_URL",
  "OPENAI_MODEL",
]);

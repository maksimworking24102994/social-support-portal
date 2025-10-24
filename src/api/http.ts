import axios from "axios";
import { env } from "@/config";

const { OPENAI_API_KEY: API_KEY, API_URL } = env;

export const http = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

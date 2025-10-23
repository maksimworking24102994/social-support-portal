import axios from "axios";
import { env } from "@/config";

const API_KEY = env.OPENAI_API_KEY;
const API_URL = env.API_URL;

export const http = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

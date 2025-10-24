import axios from "axios";
import { env } from "@/config";

const { OPENAI_API_KEY: API_KEY, API_URL } = env;

const baseURL = API_URL.replace(/(\/v1).*/, "$1");

export const http = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

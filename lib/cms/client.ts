import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "hiroto-blog",
  apiKey: process.env.API_KEY || ""
})

import { client } from "./client";

export const getBlog = () => {
  client.get({ endpoint: "blogs" }).then((res) => console.log(res));
};

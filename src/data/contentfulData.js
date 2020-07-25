import * as contentful from "contentful";

export const client = contentful.createClient({
  space: "fov8s1zxsda6",
  accessToken: `${process.env.API_KEY}`,
});

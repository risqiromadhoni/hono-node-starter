import { serve } from "@hono/node-server";
import { Hono } from "hono";

export const app = new Hono();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

const port = Number(process.env.PORT || 3000);
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});

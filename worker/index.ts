import { createRequestHandler as createRemixRequestHandler } from "../oxygen/remix-oxygen-workers";

import * as build from "../build/index.js";

const handleRequest = createRemixRequestHandler({build});

export default {
  fetch(request: Request, env: Record<string, string>, {waitUntil}: any) {
    try {
      return handleRequest(request, {
        env: Object.assign({}, env),
        waitUntil
      });
    } catch (e: unknown) {
      if (env.NODE_ENV === "development") {
        return new Response(e instanceof Error ? e.message : String(e), {
          status: 500,
        })
      }

      return new Response("Internal Error", { status: 500 });
    }
  },
}

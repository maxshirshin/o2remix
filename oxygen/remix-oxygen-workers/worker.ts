import type { AppLoadContext, ServerBuild } from "../remix-oxygen";
import { createRequestHandler as createRemixRequestHandler } from "../remix-oxygen";

export interface ExtraOxygenContext {
  // A clone of the env vars provided to the Module Worker fetch() method
  env: Record<string, string>,
  // A waitUntil function reference provided to the Module Worker fetch() method
  waitUntil: ExecutionContext['waitUntil']
}

export type GetLoadContextFunction = (context: ExtraOxygenContext) => AppLoadContext;

export type RequestHandler = (request: Request, loadContext: ExtraOxygenContext) => Promise<Response>;
/**
 * Returns a request handler for the Oxygen runtime that serves the
 * Remix SSR response.
 */
export function createRequestHandler({
  build,
  getLoadContext,
  // not used for now, may be useful for local development support
  mode,
}: {
  build: ServerBuild;
  getLoadContext?: GetLoadContextFunction;
  mode?: string;
}): RequestHandler {
  let handleRequest = createRemixRequestHandler(build, mode);

  if (typeof getLoadContext === "undefined") {
    getLoadContext = (c: ExtraOxygenContext) => Object.assign({}, c) as unknown as AppLoadContext;
  }

  return (req: Request, context: ExtraOxygenContext) => {
    let loadContext = getLoadContext?.(context);

    return handleRequest(req, loadContext);
  };
}


import type { Config, Context } from "@netlify/functions";
import { getStore } from "@netlify/blobs";
import { jsonError } from "../shared/news.js";
import { MEDIA_STORE, contentTypeForKey, isValidMediaKey } from "../shared/media.js";

/** Serves uploaded cover images. Keys are immutable, so responses cache hard. */
export default async (req: Request, context: Context) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    return jsonError("Method not allowed", 405);
  }

  const key = context.params.key ?? "";
  if (!isValidMediaKey(key)) {
    return jsonError("Not found", 404);
  }

  const contentType = contentTypeForKey(key);
  if (!contentType) {
    return jsonError("Not found", 404);
  }

  const store = getStore(MEDIA_STORE);
  const blob = await store.get(key, { type: "arrayBuffer" });
  if (!blob) {
    return jsonError("Not found", 404);
  }

  return new Response(blob, {
    headers: {
      "content-type": contentType,
      "cache-control": "public, max-age=31536000, immutable",
    },
  });
};

export const config: Config = {
  path: "/api/news-media/:key",
};

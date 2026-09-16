import type { Config } from "@netlify/functions";
import { getStore } from "@netlify/blobs";
import { AuthError, verifyRequestOrigin } from "@netlify/identity";
import { jsonError } from "../shared/news.js";
import { authorizeAdmin } from "../shared/admin-auth.js";
import {
  ALLOWED_IMAGE_TYPES,
  MAX_UPLOAD_BYTES,
  MEDIA_STORE,
  buildMediaKey,
} from "../shared/media.js";

/** Receives a cover image from the admin editor and stores it in Netlify Blobs. */
export default async (req: Request) => {
  if (req.method !== "POST") {
    return jsonError("Method not allowed", 405);
  }

  const { error } = await authorizeAdmin();
  if (error) {
    return error;
  }

  try {
    verifyRequestOrigin(req);
  } catch (error) {
    if (error instanceof AuthError) {
      return jsonError("Request blocked: unexpected origin.", 403);
    }
    throw error;
  }

  const form = await req.formData();
  const file = form.get("file");

  if (!(file instanceof File)) {
    return jsonError("No image was included in the upload.", 400);
  }

  const extension = ALLOWED_IMAGE_TYPES[file.type];
  if (!extension) {
    return jsonError("Unsupported image type. Use JPEG, PNG, WebP, GIF or AVIF.", 415);
  }

  if (file.size > MAX_UPLOAD_BYTES) {
    return jsonError("That image is larger than 5 MB. Please upload a smaller file.", 413);
  }

  const key = buildMediaKey(extension);
  const store = getStore(MEDIA_STORE);
  await store.set(key, await file.arrayBuffer());

  return Response.json({ url: `/api/news-media/${key}` }, { status: 201 });
};

export const config: Config = {
  path: "/api/admin/uploads",
};

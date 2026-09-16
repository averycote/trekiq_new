import { getSettings, getUser } from "@netlify/identity";
import type { User } from "@netlify/identity";
import { jsonError } from "./news.js";

export const OPEN_SIGNUP_MESSAGE =
  "Publishing is locked because anyone can currently create an account on this site. " +
  "In Netlify, open Project configuration > Identity and set Registration to \"Invite only\" " +
  "(or give your Identity user the \"admin\" role), then reload this page.";

type AdminCheck = { user: User; error: null } | { user: null; error: Response };

/**
 * Netlify Identity allows open registration by default, which would let any
 * visitor sign up and publish. Authors are therefore accepted only when they
 * hold the "admin" role, or when registration has been closed for the site.
 */
export async function authorizeAdmin(): Promise<AdminCheck> {
  const user = await getUser();
  if (!user) {
    return { user: null, error: jsonError("You need to be signed in to manage posts.", 401) };
  }

  if (Array.isArray(user.roles) && user.roles.includes("admin")) {
    return { user, error: null };
  }

  try {
    const settings = await getSettings();
    if (settings.disableSignup) {
      return { user, error: null };
    }
  } catch {
    return {
      user: null,
      error: jsonError("Netlify Identity is not available for this site yet.", 503),
    };
  }

  return { user: null, error: jsonError(OPEN_SIGNUP_MESSAGE, 403) };
}

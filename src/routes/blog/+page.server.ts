import { posts } from "$lib/server/posts";
import type { Categories } from "$lib/site/types/blog";
import type { RequestHandler } from "@sveltejs/kit";
import type { PageLoad } from "../$types";


/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export const load = async ({ params }) => {
    return { posts };
};
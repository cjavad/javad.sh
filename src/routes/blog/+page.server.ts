import { posts } from "$lib/server/posts";

/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export const load = async ({ params }) => {
    return { posts };
};
import { posts } from "$lib/server/posts";
import type { Categories } from "$lib/site/types/blog";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const { slug } = params;

    if (!slug) {
        return { posts: [] };
    }

    return { posts: posts.filter((post) => post.categories.includes(params.slug as Categories)) };
};
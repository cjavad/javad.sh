import { posts } from "$lib/server/posts";
import type { Categories } from "$lib/site/blog";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const { slug } = params;

    let slugs: Categories[] = slug.split("+") as Categories[];

    if (!slug) {
        return { posts: [] };
    }

    return { posts: posts.filter((post) => slugs.some(slug => post.categories.includes(slug))) };
};
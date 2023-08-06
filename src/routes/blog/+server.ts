import { json } from '@sveltejs/kit';
import { posts } from "$lib/server/posts";

export function GET({ url }) {
    const search = url.searchParams.get('search');

    return json({
        posts: posts.filter(p => {
            // Ensure search term is present in title or description
            if (search) {
                return p.title.toLowerCase().includes(search.toLowerCase()) ||
                    p.description.toLowerCase().includes(search.toLowerCase());
            }


            return true;
        }), // make posts available on the client
    });
}
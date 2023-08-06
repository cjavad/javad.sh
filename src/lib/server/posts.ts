import type { BlogPost, BlogPostReference } from '$lib/site/types/blog';
import { parse } from 'path';

type GlobEntry = {
    metadata: Omit<BlogPost, 'slug'>;
    default: unknown;
};

// Get all posts and add metadata
export const posts: BlogPostReference[] = Object.entries(import.meta.glob<GlobEntry>('/src/lib/data/posts/**/*.md', { eager: true }))
    .map(([filepath, globEntry]) => {
        const slug = parse(filepath).name;
        const metadata = globEntry.metadata as Omit<BlogPost, 'slug'>;
        const post: BlogPost = { ...metadata, slug };

        return post;
    })
    // filter out unpublished posts
    .filter((post) => post.published)
    // sort by date
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    // add references to the next/previous post
    .map((post, index, allPosts) => ({
        ...post,
        next: allPosts[index - 1] || 0,
        previous: allPosts[index + 1] || 0,
    }));

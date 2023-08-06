<script lang=ts>
	import { page } from '$app/stores';
	import BlogCard from '$lib/site/components/blog/BlogCard.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<h1>Posts for {$page.params.slug}</h1>

{#if data.posts.length}
<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
    {#each data.posts as post}
        <BlogCard {post} />
    {/each}
</div>
{:else}
<div class="text-2xl text-primary mb-4">No posts found</div>
{/if}
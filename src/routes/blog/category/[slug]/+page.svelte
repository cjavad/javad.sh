<script lang=ts>
	import { page } from '$app/stores';
	import BlogCard from '$lib/site/components/blog/BlogCard.svelte';
	import BlogList from '$lib/site/components/blog/BlogList.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<h1>Posts for {$page.params.slug}</h1>

{#if data.posts.length}
    <BlogList posts={data?.posts || []} />
{:else}
<div class="text-2xl text-primary mb-4">No posts found</div>
{/if}
<script lang="ts">
    import BlogHeader from '$lib/site/components/blog/BlogHeader.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<div>
    <article>
        <BlogHeader post={data.post} />
    </article>

    <BlogHeader post={data.post} />

    <div>
        <svelte:component this={data.component} />
    </div>
</div>

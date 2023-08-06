<script lang="ts">
	import { fade } from "svelte/transition";
	import BlogCard from "./BlogCard.svelte";

    export let posts: BlogPostReference[];
</script>

<div class="columns-1 gap-6 lg:columns-2 2xl:columns-3 3xl:columns-4">
    {#each posts as post}
    <div class="mb-6 break-inside-avoid-column" out:fade>
        <BlogCard {post} />
    </div>
    {/each}
</div>
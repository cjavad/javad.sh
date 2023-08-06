<script lang="ts">
	import { Categories, CategoryIcons } from "$lib/site/blog";
    export let category: Categories;

</script>

<a href="/blog/category/{category}" class="badge badge-ghost rounded-3xl">
    {#if CategoryIcons[category]}
        <svelte:component this={CategoryIcons[category]} />
    {:else}
        {category}
    {/if}
</a>


<style>
    .badge {
        font-family: 'Silkscreen', monospace;
        font-size: medium;
    }
</style>
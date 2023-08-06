<script lang="ts">
    import Search from 'virtual:icons/material-symbols/search.svg';
    import BlogCard from '$lib/site/components/blog/BlogCard.svelte';
    import type { PageServerData } from './$types';
	import type { Categories } from '$lib/site/types/blog';

    export let data: PageServerData;
    let search: string | null = null;
    let categories: Categories[] = [];

    async function searchWithFilters() {
        if (search === null && categories.length === 0) return;
        const response = await fetch('/blog?' + new URLSearchParams({ search: search || '', categories: categories.join(',') }));
        data = await response.json();
    }
</script>

<div class="mb-10 flex flex-col justify-center items-center">
    <div class="flex-none gap-2">
        <div class="relative">
            <Search class="w-6 h-6 absolute left-3 top-3 text-gray-400" />
            <input on:change={searchWithFilters} bind:value={search} id="search" type="text" placeholder="Search" class="input rounded-xl input-bordered pl-12" />
        </div>
    </div>
</div>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
    {#each data.posts as post}
        <BlogCard {post} />
    {/each}
</div>

<style>
    input[type="text"] {
        width: 100%;
    }
</style>

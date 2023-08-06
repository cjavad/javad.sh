<script lang="ts">
    import Search from 'virtual:icons/material-symbols/search.svg';
    import BlogCard from '$lib/site/components/blog/BlogCard.svelte';
    import type { PageServerData } from './$types';
	import type { Categories } from '$lib/site/blog';
	import { writable } from 'svelte/store';
	import { fade } from 'svelte/transition';
	import BlogList from '$lib/site/components/blog/BlogList.svelte';

    export let data: PageServerData;
    let search = writable('');
    let categories: Categories[] = [];

    async function searchWithFilters(search: string) {
        const response = await fetch('/blog?' + new URLSearchParams({ search }));
        data = await response.json();
    }

    search.subscribe(searchWithFilters);
</script>

<div class="mb-3">
    <div class="flex-none gap-2">
        <div class="relative">
            <Search class="w-6 h-6 absolute left-3 top-3 text-gray-400" />
            <input bind:value={$search} id="search" type="text" placeholder="Search" class="input pl-12" />
        </div>
    </div>
</div>

<div class="min-h-screen flex flex-col items-center">
    <BlogList posts={data?.posts || []} />
</div>

<style>
    input[type="text"] {
        width: 100%;
    }
</style>

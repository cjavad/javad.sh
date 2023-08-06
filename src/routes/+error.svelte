<script>
    import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
    import Error404 from '$lib/site/components/errors/404.svelte';
</script>


<div class="text-6xl font-bold text-error">{$page.status}</div>

{#if $page.error}
    <div class="text-2xl text-primary mb-4">{$page.error.message}</div>
{/if}    

{#if $page.status == 404}
    <Error404 />
{/if}

<div>
    <button class="btn btn-neutral" on:click={() => window.history.back()}>
        Go back
    </button>
</div>
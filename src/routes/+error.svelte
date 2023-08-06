<script>
    import { page } from '$app/stores';
    import Error404 from '$lib/site/components/errors/404.svelte';
	import Breadcrums from '$lib/site/components/Breadcrums.svelte';
</script>


<Breadcrums />

<div class="min-h-screen flex flex-col items-center">
    <div class="text-6xl mt-10 font-bold text-error">{$page.status}</div>

    {#if $page.error}
        <div class="text-2xl text-primary mb-4">{$page.error.message}</div>
    {/if}    

    {#if $page.status == 404}
        <Error404 />
    {/if}

    <div>
        <button class="btn btn-accent rounded-2xl" on:click={() => window.history.back()}>
            back
        </button>
    </div>

</div>
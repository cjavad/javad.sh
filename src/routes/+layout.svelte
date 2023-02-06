<script lang="ts">
	import { isLoading } from '$lib/site';
	import Loader from '$lib/site/components/Loader.svelte';
	import '../app.css';
</script>

{#if $isLoading}
<div class="grid h-screen place-items-center">
    <Loader duration={10} />
</div>
{:else}
	<slot />
{/if}

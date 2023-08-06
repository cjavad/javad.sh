<script lang="ts">
	import '../app.css';

	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import Footer from '$lib/site/components/Footer.svelte';
	import KeyboardPreview from '$lib/site/components/KeyboardPreview.svelte';
	import Loader from '$lib/site/components/Loader.svelte';
	import Navbar from '$lib/site/components/Navbar.svelte';
	import kbd from '$lib/site/stores/kbd';
	import isLoading from '$lib/site/stores/loading';
	import { fade } from 'svelte/transition';

	beforeNavigate(() => {
		isLoading.set(true);
	});

	afterNavigate(() => {
		isLoading.set(false);
	});

	const googleFonts =
		'https://fonts.googleapis.com/css2?family=Libre+Barcode+128+Text&family=Silkscreen&family=Roboto&display=swap';
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
<link rel="preload" as="style" href={googleFonts} />
<link rel="stylesheet" href={googleFonts} />

<svelte:window on:keydown={(e) => ($kbd[e.code] = true)} on:keyup={(e) => ($kbd[e.code] = false)} />

<div transition:fade>
	{#if $isLoading}
		<div out:fade={{ delay: 250 }}>
			<Loader />
		</div>
	{:else}
		<Navbar />
		<slot />
		<Footer />
	{/if}
</div>

<KeyboardPreview />

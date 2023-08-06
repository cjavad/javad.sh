<script lang="ts">
	import '../app.css';

	import isLoading from '$lib/site/stores/loading';
	import Loader from '$lib/site/components/Loader.svelte';
	import { fade } from 'svelte/transition';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import Navbar from '$lib/site/components/Navbar.svelte';
	import Footer from '$lib/site/components/Footer.svelte';

    beforeNavigate(() => {
        isLoading.set(true);
    });

    afterNavigate(() => {
        isLoading.set(false);
    });

    const googleFonts = "https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Libre+Barcode+128+Text&family=Rubik+80s+Fade&family=Silkscreen&family=Zilla+Slab:ital,wght@0,300;0,400;0,700;1,300&display=swap";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=true>
<link rel="preload" as="style" href={googleFonts}>
<link rel="stylesheet" href={googleFonts}>

<div transition:fade>
    {#if $isLoading}
        <div out:fade={{ delay: 250 }}>
            <Loader />
        </div>
    {:else}
        <Navbar />
        <div class="min-h-screen flex flex-col justify-center items-center">
            <slot />
        </div>
    {/if}
</div>

<Footer />
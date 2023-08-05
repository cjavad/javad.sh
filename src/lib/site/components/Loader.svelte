<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import isLoading from '../stores/loading';
    import * as easing from 'svelte/easing';
	import { tweened } from 'svelte/motion';

    const progress = tweened(0, {
        duration: 1000,
        easing: easing.cubicOut,
    });

    const unsubscribe = isLoading.subscribe((value) => {
        if (!value) {
            progress.set(1, { duration: 1000 });
        }
    });

    // Start loading
    onMount(() => {
        // Smootly increase progress using easing
        progress.set(0.7)
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<div class="loader-container">
    <div class="loader" style="opacity: {($progress * 100).toFixed(1)}%;">
        <span class="text-sm">{($progress * 100).toFixed(22)}</span>
    </div>
</div>


<style>
    .loader-container {
        position: fixed; /* Fixed positioning ensures the loader covers the entire viewport */
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        overflow: hidden; /* Prevents scrolling within the loader */
        z-index: 9999; /* Ensures the loader is above other content */
    }

    .loader {
        position: fixed; /* Relative positioning allows the content to flow normally */
        width: 120%; /* You can set this to be wider than the viewport */
        height: 120%;
        margin-left: -10%; /* Centers the content by adjusting the left margin */
    }

    span {
        font-family: 'Libre Barcode 128 Text', cursive;
        font-size: calc(10rem + 1vw);
        text-align: center;
    }
    .loader-container {
        position: fixed; /* Fixed positioning ensures the loader covers the entire viewport */
        overflow: hidden; /* Prevents scrolling within the loader */
        z-index: 9999; /* Ensures the loader is above other content */
    }
</style>
<script lang="ts">
	import type { Snippet } from 'svelte';
	import BackgroundCanvas from '../effects/background-canvas.svelte';
	import LanguageSelector from '../ui/language-selector.svelte';
	import { fade, fly } from 'svelte/transition';

	let { children }: { children: Snippet } = $props();
</script>

<BackgroundCanvas />

<div class="min-h-screen flex items-center justify-center p-8 overflow-hidden relative">
	<div class="absolute top-4 right-4 z-10">
		<LanguageSelector />
	</div>
	<main class="max-w-150 w-full relative z-1" style="view-transition-name: main-content" out:fade={{ duration: 200 }} in:fly={{ y: -20, duration: 200 }}>
		{@render children()}
	</main>
</div>

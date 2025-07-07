<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		title,
		subtitle,
		showCursor = true
	}: { title: Snippet; subtitle?: Snippet; showCursor?: boolean } = $props();
</script>

<header class="mb-8">
	<h1
		class="text-5xl text-clamp-2rem-5vw-3rem font-400 mb-6"
		style="view-transition-name: page-title"
	>
		{@render title()}
		{#if showCursor}
			<span class="bl">_</span>
		{/if}
	</h1>

	{#if subtitle}
		<p class="text-clamp-1rem-3vw-1.5rem text-base text-muted font-mono font-300 mb-4" style="view-transition-name: page-subtitle">
			{@render subtitle()}
		</p>
	{/if}
</header>

<style>
	h1 {
		background: linear-gradient(45deg, #fff, #888);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	/* Blinking cursor animation */
	@keyframes blink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}

	.bl {
		animation: blink 1.2s infinite;
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';
	import { isLoading } from '..';

	export let progress = 0,
		size = '10rem',
		thickness = '0.25rem',
		duration = 0;

	export const setProgress = (value: number) => {
		progress = value;
	};

	const smoothLoading = (n: number) => {
		// Curved loading animation for n seconds
		// Use easing function to make it smooth
		const start = performance.now();
		const ease = (t: number) => t * (2 - t);
		const frame = (time: number) => {
			const t = Math.min(1, (time - start) / (n * 1000));
			setProgress(ease(t) * 100);
			if (t < 1) {
				requestAnimationFrame(frame);
			}
		};
		requestAnimationFrame(frame);
	};

	onMount(() => {
		if (duration > 0) {
			smoothLoading(duration);
		}
	});

	$: progress = Math.min(Math.max(progress, 0), 100);
</script>

<div class="radial-progress" style="--value:{progress}; --size: {size}; --thickness: {thickness};">
	{Math.floor(progress)}%
</div>

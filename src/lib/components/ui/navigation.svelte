<script>
	import { localizeHref } from "$lib/paraglide/runtime";

	let { links = [], class: className = '', 'aria-label': ariaLabel = 'External links' } = $props();
</script>

<nav
	class="flex gap-8 flex-wrap {className}"
	style="view-transition-name: navigation"
	aria-label={ariaLabel}
>
	{#each links as link}
		<a
			href={localizeHref(link.href)}
			class="h-link transition-200"
			rel={link.external ? 'me noopener' : undefined}
			target={link.external ? '_blank' : undefined}
			itemprop={link.itemprop}
		>
			{link.text}
		</a>
	{/each}
</nav>

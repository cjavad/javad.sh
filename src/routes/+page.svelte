<script>
	import PageHeader from '$lib/components/ui/page-header.svelte';
	import Navigation from '$lib/components/ui/navigation.svelte';
	import { root } from '$lib/messages';

	const links = [
		{ href: 'https://github.com/cjavad', text: 'github', external: true, itemprop: 'sameAs' },
		{
			href: 'https://linkedin.com/in/cjavad',
			text: 'linkedin',
			external: true,
			itemprop: 'sameAs'
		},
		{ href: 'https://bsky.app/profile/javad.sh', text: 'bsky', external: true, itemprop: 'sameAs' },
		{ href: 'mailto:me@javad.sh', text: 'me@javad.sh', itemprop: 'email' },
		{ href: '/privacy', text: 'privacy' }
	];
</script>

<svelte:head>
	<title>Javad Shafique | javad.sh - {root.short_description()}</title>
	<meta name="description" content="Javad Shafique (javad.sh) - {root.short_description()}" />
</svelte:head>

<div itemscope itemtype="https://schema.org/Person">
	<PageHeader>
		{#snippet title()}
			Javad Shafique
		{/snippet}

		{#snippet subtitle()}
			{root.short_description()}
		{/snippet}
	</PageHeader>


	<Navigation {links} />
</div>

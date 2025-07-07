<script>
	import PageHeader from '$lib/components/ui/page-header.svelte';
	import Navigation from '$lib/components/ui/navigation.svelte';
	import { privacy, general } from '$lib/messages';

	const backLink = [{ href: '/', text: `← ${general.back_to_home()}` }];
</script>

<svelte:head>
	<title>Privacy Policy | javad.sh</title>
	<meta name="description" content={privacy.short_description()} />
</svelte:head>

<PageHeader>
	{#snippet title()}
		Privacy Policy
	{/snippet}
	{#snippet subtitle()}
		{privacy.short_description()}
	{/snippet}
</PageHeader>

<div class="mb-8">
	<p class="content-spacing">
		{@html privacy.umami_explainer({
			umamiLink: `<a
			href="https://umami.is"
			target="_blank"
			rel="noopener"
			class="h-link transition-200">Umami</a
		>`,
			contactLink: `<a href="mailto:me@javad.sh" class="h-link transition-200">me@javad.sh</a>`
		})}
	</p>
</div>

<Navigation links={backLink} aria-label="Navigation" />

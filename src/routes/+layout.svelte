<script lang="ts">
    import type { Snippet } from 'svelte';
	import 'virtual:uno.css';
	import MainLayout from '$lib/components/layout/main-layout.svelte';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
    let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<meta
		name="keywords"
		content="Javad Shafique, javad.sh, javad sh, cjavad, javadshafique, Javad, Shafique, systems programming, io_uring, Tokio, Rust, distributed systems, Kubernetes, async programming, Linux kernel, system architecture"
	/>
	<meta name="author" content="Javad Shafique" />
	<meta property="og:title" content="Javad Shafique | javad.sh" />
	<meta property="og:description" content="Doing cool stuff with code" />
	<meta property="og:url" content="https://javad.sh" />
	<meta property="og:type" content="profile" />
	<meta property="og:site_name" content="javad.sh" />
	<meta property="profile:first_name" content="Javad" />
	<meta property="profile:last_name" content="Shafique" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Javad Shafique | javad.sh" />
	<meta name="twitter:description" content="Doing cool stuff with code" />
	<meta name="twitter:url" content="https://javad.sh" />
	<link rel="canonical" href="https://javad.sh" />
	<link rel="alternate" href="https://www.javad.sh" />
	<link rel="me" href="https://bsky.app/profile/javad.sh" />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"@id": "https://javad.sh/#person",
			"name": "Javad Shafique",
			"givenName": "Javad",
			"familyName": "Shafique",
			"url": "https://javad.sh",
			"sameAs": [
				"https://github.com/cjavad",
				"https://linkedin.com/in/javadshafique",
				"https://bsky.app/profile/javad.sh"
			],
			"description": "Doing cool stuff with code",
			"knowsAbout": [
				"Things"
			],
			"email": "mailto:me@javad.sh",
			"jobTitle": "Programmer",
			"alumniOf": { "@type": "Organization", "name": "Internet" }
		}
	</script>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"@id": "https://javad.sh/#website",
			"url": "https://javad.sh",
			"name": "javad.sh",
			"alternateName": ["Javad Shafique", "javad sh"],
			"description": "Personal website of Javad Shafique - Doing cool stuff with code",
			"author": { "@id": "https://javad.sh/#person" }
		}
	</script>
</svelte:head>


<MainLayout>
    {@render children()}
</MainLayout>

<!-- https://inlang.com/m/gerre34r/library-inlang-paraglideJs/sveltekit -->
<div class="hidden">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
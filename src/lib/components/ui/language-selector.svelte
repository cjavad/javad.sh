<script lang="ts">
	import { locales, getLocale, type Locale, setLocale } from '$lib/paraglide/runtime';
	import { Select } from 'bits-ui';

	const languageNames: Record<Locale, string> = {
		en: 'English',
		dk: 'Dansk'
	};

	const flagIcons: Record<Locale, string> = {
		en: 'i-flag-gb-4x3',
		dk: 'i-flag-dk-4x3'
	};

	const localeItems = locales.map(locale => ({
		value: locale,
		label: languageNames[locale]
	}));

	// Store so UI updates before redirect comes through.
	let currentLocale = $state(getLocale());

	function onValueChange(value: string | undefined) {
		if (value && locales.includes(value as Locale)) {
			currentLocale = value as Locale;
			setLocale(value as Locale);
		}
	}
</script>

<Select.Root 
	type="single"
	value={currentLocale}
	onValueChange={onValueChange}
	items={localeItems}
>
	<Select.Trigger class="flex items-center gap-2 px-2 py-1.5 text-sm bg-transparent hover:bg-gray-700/50 rounded-md transition-colors border border-gray-700/50 hover:border-gray-600">
		<div class="w-4 h-3 {flagIcons[currentLocale]}"></div>
		<span class="text-gray-300">{languageNames[currentLocale]}</span>
		<div class="w-3 h-3 i-lucide-chevron-down transition-transform text-gray-400 ml-auto"></div>
	</Select.Trigger>
	
	<Select.Content class="border border-gray-700/50 rounded-md shadow-lg z-50 min-w-[var(--bits-select-anchor-width)] p-1">
		<Select.Viewport class="p-1">
			{#each localeItems as item}
				<Select.Item 
					value={item.value} 
					label={item.label}
					class="flex items-center gap-1 px-1.5 py-1.5 text-sm hover:bg-gray-700/50 transition-colors w-full text-left text-gray-300 hover:text-white rounded-sm cursor-pointer data-[highlighted]:bg-gray-700 data-[highlighted]:text-white"
				>
					<div class="w-4 h-3 {flagIcons[item.value]}"></div>
					<span>{item.label}</span>
				</Select.Item>
			{/each}
		</Select.Viewport>
	</Select.Content>
</Select.Root>


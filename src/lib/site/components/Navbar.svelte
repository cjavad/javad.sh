<script lang="ts">
    import NavbarItem from "./NavbarItem.svelte";
	import ThemeToggle from "./ThemeToggle.svelte";
    import navbarEntries from "$lib/data/sitemap.json";
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start">
        <div class="dropdown">
            <label tabindex="-1" class="btn btn-ghost lg:hidden" for="menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            <ul tabindex="-1" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {#each navbarEntries as entry}
                <NavbarItem name={entry.name} href={entry.href} children={entry.children} inDropdown={true} />
            {/each}
            </ul>
        </div>

        <a href="/" class="title btn btn-ghost normal-case text-xl">javad.sh</a>
    </div>

    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            {#each navbarEntries as entry}
                <NavbarItem name={entry.name} href={entry.href} children={entry.children} />
            {/each}
        </ul>
    </div>

    <div class="navbar-end mr-2">
        <ThemeToggle />
    </div>
</div>

<style>
    .title {
        font-family: 'Silkscreen', monospace;
    }
</style>
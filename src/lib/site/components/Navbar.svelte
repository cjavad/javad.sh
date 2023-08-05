<script lang="ts">
	import { page } from "$app/stores";
	import ThemeToggle from "./ThemeToggle.svelte";

    const navbarEntries = [
        {
            name: 'About',
            href: '/about',
        },
        {
            name: 'Projects',
            href: '/projects',
        },
        {
            name: 'Blog',
            href: '/blog',
        },
        {
            name: 'Contact',
            href: '/contact',
        }
    ];
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start">
        <div class="dropdown">
            <label tabindex="-1" class="btn btn-ghost lg:hidden" for="menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            <ul tabindex="-1" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {#each navbarEntries as entry}
                <li>
                    <a href={entry.href}>{entry.name}</a>
                </li>
            {/each}
            </ul>
        </div>

        <a href="/" class="title btn btn-ghost normal-case text-xl">javad.sh</a>
    </div>

    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            {#each navbarEntries as entry}
                <li>
                    <a href={entry.href}
                    class:selected={entry.href === $page.url.pathname}
                    >{entry.name}</a>
                </li>
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

    .selected {
        text-shadow: 3px 10px 3px hsla(var(--bc));
    }

    li > a {
        font-family: 'Silkscreen', monospace;
        font-size: medium;
        transition: transform 0.3s ease, text-shadow 0.3s ease, color 0.3s ease; /* Smooth transition for the tilt and other effects */
        /* Give them a reflection under */
    }

    li > a:hover {
        background-color: inherit;
        text-shadow: 3px 10px 5px hsla(var(--bc));
        transform: rotate(-5deg); /* Add a slight tilt */
    }
</style>
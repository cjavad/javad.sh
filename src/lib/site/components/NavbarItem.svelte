<script lang="ts">
    import { page } from "$app/stores";

    export let name: string, href: string, children: Record<string, string>[] = [], inDropdown = false;
</script>

{#if inDropdown || !children.length}
    <li><a href={href} class:selected={$page.url.pathname.startsWith(href)}>{name}</a></li>
{/if}

{#if !inDropdown && children.length}
    <li tabindex="-1">
        <details>
            <summary>
                {#if href}
                    <a class:selected={$page.url.pathname.startsWith(href)} href={href}>{name}</a>
                {:else}
                    {name}
                {/if}
            </summary>
            <ul class="p-2">
                {#each children as child}
                    <li><a href={child.href}>{child.name}</a></li>
                {/each}
            </ul>
        </details>
    </li>
{:else if children.length}
    <ul class="p-2">
        {#each children as child}
        <li><a href={child.href}>{child.name}</a></li>
        {/each}
    </ul>
{/if}

<style>
    .selected {
        text-shadow: 3px 5px 3px hsla(var(--bc));
    }

    a {
        font-family: 'Silkscreen', monospace;
        font-size: medium;
        transition: transform 0.3s ease, text-shadow 0.3s ease, color 0.3s ease; /* Smooth transition for the tilt and other effects */
    }

    a:hover {
        background-color: inherit;
        text-shadow: 3px 10px 5px hsla(var(--bc));
        transform: rotate(-5deg);
    }
</style>
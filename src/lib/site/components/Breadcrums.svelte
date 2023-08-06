<script lang="ts">
    import { page } from "$app/stores";
    
</script>

<div class="navbar fixed">
    <div class="">
        <div class="text-sm breadcrumbs">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                
                {#each $page.url.pathname.split("/") as path, i}
                    {#if path}
                        <li>
                            <a href={Array(i + 1).fill("..").join("/")}>{path}</a>
                        </li>
                    {/if}
                {/each}
            </ul>
        </div>
    </div>
</div>

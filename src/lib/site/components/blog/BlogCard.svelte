<script lang="ts">
	import type { BlogPostReference } from "$lib/site/types/blog";

    export let post: BlogPostReference;
</script>

<div class="indicator">
    <div class="card w-96 bg-base-200 rounded-3xl">
        {#if new Date(post.date) > new Date(2021, 0, 1)}
            <span class="indicator-item indicator-top rounded-3xl badge badge-primary">new</span> 
        {/if}

        <a href="/blog/{post.slug}">
            <div class="card-body">
                <h2 class="card-title">{post.title}</h2>
                <p>{post.description}</p>
                <p>{post.date}</p>
                <div class="flex gap-1">
                    {#each post.categories as category}
                    <a href="/blog/category/{category}" class="badge rounded-3xl badge-accent">{category}</a>
                    {/each}
                </div>

            </div>
        </a>    
    </div>
</div>


<style>
    .card {
        max-width: 80vw;
        transition: transform 0.3s ease, text-shadow 0.3s ease, color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for the tilt and other effects */
    }

    .card:hover {
        background-color: inherit;
        transform: rotate(1deg);
        text-shadow: 0 0 5px #fff, 0 0 20px #fff;
    }

    /* If card has indicator bagde new apply special hover effect */
    .card:hover .indicator-top {
        background-color: inherit;
        box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #FFD300, 0 0 20px #ff00de, 0 0 35px #FFD300, 0 0 40px #ff00de;
    }

    .card-title {
        font-family: 'Silkscreen', monospace;
        font-size: medium;
        transition: text-shadow 0.3s ease, color 0.3s ease; /* Smooth transition for the tilt and other effects */
    }

    .card-title:hover {
        background-color: inherit;
    }

    .badge {
        font-family: 'Silkscreen', monospace;
        font-size: medium;
    }

    .badge:hover {
        background-color: inherit;
    }
</style>
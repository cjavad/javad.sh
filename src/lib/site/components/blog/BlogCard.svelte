<script lang="ts">
	import { format, formatDistance, formatDistanceToNow, parseISO } from "date-fns";
	import CategoryBagde from "$lib/site/components/blog/CategoryBagde.svelte";

    export let post: BlogPostReference;
    
    function postTime() {
        const postDate = new Date(post.date).getTime();
        return formatDistanceToNow(postDate, { addSuffix: true });
    }
</script>

<div class="card w-96 bg-base-200 rounded-3xl shadow-xl">
    <a href="/blog/{post.slug}">
        {#if post.image}
            <figure>
                <img src={post.image} alt={post.title} class="rounded-t-3xl" />
            </figure>
        {/if}
        <div class="card-body">
            <h1 class="card-title text-lg font-semibold">
                {post.title}
                {#if new Date(post.date).getTime() > new Date().setDate(-30)}
                    <span class="rounded-3xl badge badge-secondary">new</span> 
                {/if}
            </h1>
            <p>{post.description}</p>
            <div class="flex gap-2 flex-wrap">
                {#each post.categories as category}
                    <CategoryBagde {category} />
                {/each}

                <b class="badge rounded-3xl badge-primary tooltip tooltip-bottom tooltip-info"
                    data-tip={postTime()}
                    >
                    
                    {format(new Date(post.date).getTime(), 'yyyy/MM/dd')}
                </b>
            </div>
        </div>
    </a>    
</div>

<style>
    .card {
        max-width: 80vw;
        transition: transform .2s ease, box-shadow .2s ease;
    }

    .card:hover {
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);
    }

    .card-title {
        font-family: 'Silkscreen', monospace;
        font-size: medium;
        transition: text-shadow 0.3s ease, color 0.3s ease; /* Smooth transition for the tilt and other effects */
    }

    .badge {
        font-family: 'Silkscreen', monospace;
        font-size: medium;
    }

    .badge:not(.tooltip) {
        transition: transform .1s ease, box-shadow .1s ease;
    }

    .badge:hover:not(.tooltip) {
        transform: scale(1.05);
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);
    }

</style>
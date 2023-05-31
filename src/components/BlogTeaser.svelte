<script>
	export let title;
	export let imageUrl;
	import BlogPost1 from '$lib/images/BlogPost1.png';
	import Button from './Button.svelte';
	export let excerpt;
</script>

<article>
	{#if imageUrl}
		<img src={BlogPost1} alt={title} />
	{/if}
	<h3>{title}</h3>
	<p class="pb-8">{excerpt}</p>
	<Button>Learn More</Button>
</article>

<style>
	/* Define the styling for the blogpost teaser */
	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 4px;
		margin-bottom: 20px;
	}

	img {
		max-width: 100%;
		margin-bottom: 10px;
		border-radius: 5px;
	}

	h3 {
		font-size: 18px;
		margin-bottom: 10px;
	}

	p {
		font-size: 14px;
	}
</style>

<script>
	import blogs from '../lib/blogposts';
</script>

<section>
	{#each blogs as blog}
		<h2>{blog.title}</h2>
		{#if blog.imageUrl}
			<img src={blog.imageUrl} alt={blog.title} />
		{/if}
		{blog.text}
	{/each}
</section>

<style>
	/* Define the styling for your blog component */
	section {
		margin: 20px;
	}

	h2 {
		font-weight: bold;
		font-size: 24px;
		margin-bottom: 10px;
	}

	img {
		max-width: 100%;
		margin-bottom: 10px;
	}
</style>

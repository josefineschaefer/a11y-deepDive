<script>
	import BlogTeaser from '../components/BlogTeaser.svelte';

	let blogs = [
		{
			title: 'Laying the Foundation for Web Accessibility: Semantic HTML',
			imageUrl: '$lib/images/BlogPost1.png',
			excerpt:
				'Semantic HTML refers to the practice of structuring web content to convey meaning and purpose.'
		},
		{
			title: 'ARIA Landmarks: Creating & Maintaining Structure',
			imageUrl: '$lib/images/BlogPost2.png',
			excerpt: 'Just like in the physical World, Landmarks help us with Orientation'
		}
		// Add more blog objects as needed
	];
</script>

<main>
	<h2 class="text-center">Latest Blog Posts</h2>
	<div class="blog-grid">
		{#each blogs as blog}
			<BlogTeaser title={blog.title} imageUrl={blog.imageUrl} excerpt={blog.excerpt} />
		{/each}
	</div>
</main>

<style>
	/* Define the styling for the blog grid layout */
	.blog-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
	}
</style>

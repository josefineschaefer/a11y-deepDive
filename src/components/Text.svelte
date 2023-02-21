<script>
	import forest from '$lib/images/forest.jpeg';
	import Button from './Button.svelte';
</script>

<div>
	<div class="container mx-auto mb-12">
		<h1 class="text-6xl text-[#0c1e2d] font-bold mt-12 mb-4">A Headline H1</h1>
		<h2 class="text-2xl text-[#1d243d] font-bold mb-4">A Headline H2</h2>
		<div>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed sapien eu tellus bibendum
			facilisis vitae eget arcu. Orci <a href="google.com">Lorem Ipsum</a> varius natoque penatibus et
			magnis dis parturient montes, nascetur ridiculus mus. Vivamus in lectus augue. Interdum et malesuada
			fames ac ante ipsum primis in faucibus. Aenean accumsan lectus et volutpat maximus. Sed finibus
			nulla id pharetra cursus. Proin libero dui, pellentesque eget nunc id, venenatis ullamcorper dolor.
		</div>
		<br />
		<div>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed sapien eu tellus bibendum
			facilisis vitae eget arcu. Orci varius <a href="google.com">Lorem Ipsum</a> penatibus et magnis
			dis parturient montes, nascetur ridiculus mus. Vivamus in lectus augue. Interdum et malesuada fames
			ac ante ipsum primis in faucibus. Aenean accumsan lectus et volutpat maximus. Sed finibus nulla
			id pharetra cursus. Proin libero dui, pellentesque eget nunc id, venenatis ullamcorper dolor.
		</div>
		<br />
		<div>
			Lorem ipsum dolor sit amet, consectetur <a href="google.com">Lorem Ipsum</a> adipiscing elit.
			Sed sed sapien eu tellus bibendum facilisis vitae eget arcu. Orci varius natoque penatibus et
			magnis dis parturient montes, nascetur ridiculus mus. Vivamus in lectus augue. Interdum et
			malesuada fames ac ante ipsum primis in faucibus. Aenean accumsan lectus et volutpat maximus.
			Sed finibus nulla id pharetra cursus. Proin libero dui,
			<a href="google.com">Lorem Ipsum</a> pellentesque eget nunc id, venenatis ullamcorper dolor.
		</div>
		<br />
		<Button>Learn more</Button>
	</div>
	<img src={forest} alt="Alternativ Text" class="w-full h-[360px] lg:h-[450px] object-cover" />
</div>

<style lang="postcss">
	a {
		@apply underline text-blue-600 hover:text-blue-800 visited:text-purple-600;
	}
</style>

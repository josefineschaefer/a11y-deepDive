<script>
	import forest from '$lib/images/forest.jpeg';
	import Button from './Button.svelte';
</script>

<div
	class="min-h-[500px] relative flex items-end justify-center p-9 my-6 rounded-[5px] overflow-hidden"
>
	<div class="relative z-10 text-center bg-white p-6">
		<h1 class="text-6xl text-[#402d1f] font-bold mb-5">Let's create an accessible menu</h1>
		<h2 class="text-4xl text-[#402d1f] font-light mb-6">
			Do we really need a second Headline here?
		</h2>
		<Button>Click Me</Button>
	</div>
	<img
		src={forest}
		alt="Alternativ Text"
		class="absolute top-0 left-0 z-0 w-full h-full object-cover"
	/>
</div>

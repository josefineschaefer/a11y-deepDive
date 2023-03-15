<script>
	import Millerntor from '$lib/images/Millerntor.png';
	import Button from './Button.svelte';
</script>

<div
	class="min-h-[500px] text-white relative flex items-end justify-center p-9 my-6 rounded-[5px] overflow-hidden"
>
	<div class="relative z-10 text-center bg-[#2b49f3] dark:bg-slate-800 p-6 rounded-md">
		<h1 class="text-6xl font-bold mb-5">Let's create an accessible menu</h1>
		<h2 class="text-4xl font-light mb-6">Do we really need a second headline here?</h2>
		<Button>Click Me</Button>
	</div>
	<img
		src={Millerntor}
		alt="Alternativ Text"
		class="absolute top-0 left-0 z-0 w-full h-full object-cover"
	/>
</div>

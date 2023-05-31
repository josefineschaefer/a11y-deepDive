<script>
	import Millerntor from '$lib/images/Millerntor.png';
	import Button from './Button.svelte';
</script>

<div
	class="min-h-[500px] text-white relative flex items-end justify-center p-9 my-6 rounded-[5px] overflow-hidden"
>
	<div class="relative z-10 text-center bg-[#2b49f3] dark:bg-slate-800 p-6 rounded-md">
		<h1 >Accessibility benefits Everyone</h1>
		<h2 >One Step at a Time towards a more Inclusive Web</h2>
		<Button>Join in</Button>
	</div>
	<img
		src={Millerntor}
		alt="Alternativ Text"
		class="absolute top-0 left-0 z-0 w-full h-full object-cover"
	/>
</div>

<script>
	import PointingRightFinger from '../components/Icons/PointingRightFinger.svelte';
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;

	blok.headline = 'Hello World';
</script>

<section use:storyblokEditable={blok} class="h-screen flex items-center justify-start p-9">
	<div>
		<h1>{blok.headline}</h1>
		<h2>
			{blok.subheadline}
		</h2>
		<!-- <a class="inline-flex" href="/Resources"> <PointingRightFinger />{blok.link}</a> -->
	</div>
</section>

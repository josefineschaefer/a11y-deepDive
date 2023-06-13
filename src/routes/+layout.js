import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import { PUBLIC_ACCESSTOKEN } from '$env/static/public';
import Hero from '../components/Hero.svelte';
import Page from '../components/Page.svelte';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	storyblokInit({
		accessToken: PUBLIC_ACCESSTOKEN,
		// accessToken: '2iTTe8ZlOo4A4HfXwQ17JAtt',
		use: [apiPlugin],
		components: {
			hero: Hero,
			page: Page
		},
		https: true,
		apiOptions: {
			region: ''
		}
	});
	let storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi
	};
}

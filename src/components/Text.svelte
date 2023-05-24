<script>
	import Accessibility_Deep_Dive from '$lib/images/Accessibility_Deep_Dive.png';
	import Button from './Button.svelte';
</script>

<div>
	<div class="container mx-auto mb-12">
		<h1 class="text-6xl text-[#0c1e2d] font-bold mt-12 mb-4">
			Why should you care about Web Accessibility?
		</h1>
		<h2 class="text-2xl text-[#1d243d] font-bold mb-4">
			Creating accessible code will make you a better developer
		</h2>
		<p>
			In today's digital age, the internet has become an integral part of our daily lives. It
			connects us, provides information, and offers countless opportunities. However, it's crucial
			to recognize that not everyone experiences the web in the same way. For individuals with
			disabilities, navigating and accessing online content can present significant challenges. This
			is where web accessibility plays a vital role. Web accessibility refers to the <a
				href="https://en.wikipedia.org/wiki/Inclusive_design">inclusive design</a
			>
			and development practices that ensure people with disabilities can perceive, understand, navigate,
			and interact with websites effectively. Let's explore why web accessibility is not just a moral
			imperative but also a legal and <a>business necessity</a>.
		</p>
		<br />
		<h3>Enable everyone to participate on the web</h3>
		<p>
			Web accessibility is fundamentally about <a href="https://www.un.org/en/webaccessibility/"
				>equal access</a
			> and inclusion. It aims to remove barriers that prevent individuals with disabilities from fully
			participating in the digital world. When websites are accessible, people with visual, auditory,
			physical, and cognitive disabilities can independently access information, complete transactions,
			and engage with online communities. It empowers them to pursue educational opportunities, seek
			employment, and participate in society on an equal footing. By embracing web accessibility, we
			foster a more inclusive society where every individual can exercise their rights and contribute
			their unique perspectives.
		</p>
		<br />
		<h3>Accessibility Legislations</h3>
		<p>
			Beyond moral considerations, web accessibility is also a <a
				href="https://www.w3.org/WAI/policies/">legal requirement</a
			> in many jurisdictions. Numerous countries have enacted laws and regulations that mandate accessibility
			standards for websites and digital content. Non-compliance can lead to legal repercussions, including
			fines and lawsuits. It's essential for organizations and businesses to understand and comply with
			these accessibility regulations to mitigate legal risks and demonstrate a commitment to inclusivity.
		</p>
		<br />
		<Button>Learn more</Button>
	</div>
	<img src={Accessibility_Deep_Dive} class="w-full object-cover" />
</div>

<style lang="postcss">
	h3 {
		@apply text-xl text-[#1d243d] font-bold mb-4;
	}
	a {
		@apply underline text-blue-600 hover:text-blue-800 visited:text-purple-600;
	}
</style>

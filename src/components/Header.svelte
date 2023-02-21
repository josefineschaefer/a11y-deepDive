<header class="w-full h-24 bg-[#c0cfdd]">
	<a href="#main" class="skip">Skip to main content</a>
	<div class="container h-full mx-auto flex items-center justify-between">
		<a href="home">
			<h1 class="text-[#0b2032] hover:text-[#474b50] text-3xl font-bold">A11y Deep Dive</h1>
		</a>
		<nav>
			<ul class="flex space-x-8 text-lg font-bold">
				<li>
					<a href="https://www.bbc.com/"> Menu Item </a>
				</li>
				<!--Adding color to indicate hovered item visually -->
				<li class="hover:text-[#50b0ae]">
					<a href="https://www.bbc.com/"> Menu Item </a>
				</li>
				<li class="hover:text-[#474b50]">
					<a href="https://www.bbc.com/"> Menu Item </a>
				</li>
				<li class="hover:text-[#474b50] hover:underline">
					<a href="https://www.bbc.com/"> Menu Item </a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style lang="css">
	.skip {
		position: absolute;
		left: -10000px;
		top: auto;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

	.skip:focus {
		position: static;
		width: auto;
		height: auto;
	}
</style>

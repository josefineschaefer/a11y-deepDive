<header class="w-full h-24 bg-[#2b49f3] dark:bg-slate-800">
	<a href="#main" class="skip">Skip to main content</a>
	<div class="container h-full mx-auto flex items-center justify-between text-white">
		<a href="home">
			<h1 class="hover:text-[#474b50] text-3xl font-bold">Accessibility Deep Dive</h1>
		</a>
		<nav>
			<ul class="flex space-x-8 text-lg font-bold">
				<li>
					<a href="https://www.bbc.com/"> About </a>
				</li>
				<!--Adding color to indicate hovered item visually -->
				<li class="hover:text-[#474b50]">
					<a href="https://www.bbc.com/"> Blog </a>
				</li>
				<li class="hover:text-[#87fff7]">
					<a href="https://www.bbc.com/"> Resources </a>
				</li>
				<li class="hover:text-[#87fff7] hover:underline">
					<a href="https://www.bbc.com/"> Get in Touch </a>
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
		color: white;
		padding: 6px;
	}

	.skip:focus {
		position: static;
		width: auto;
		height: auto;
	}
</style>

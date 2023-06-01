<header
	class="sticky top-0 z-40 left-0 bg-gradient-to-r from-orange-400/90 to-pink-500/90 backdrop-blur-md w-full h-20 border-b-[1px] border-black border-solid"
>
	<a href="#main" class="skip">Skip to main content</a>
	<div class="container flex mx-auto items-center justify-between h-full">
		<a href="home"> <h1 class="text-4xl font-bold">A11y for All</h1></a>
		<nav>
			<ul class="flex space-x-8">
				<li>
					<a href="https://www.bbc.com/"> About </a>
				</li>
				<li>
					<a href="https://www.bbc.com/"> Blog </a>
				</li>
				<li>
					<a href="https://www.bbc.com/"> Resources </a>
				</li>
				<li>
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

<script lang="ts">
	import type { PageData } from './$types';
	import BlogPostEntry from '$lib/components/blog/BlogPostEntry.svelte';
	import CatppuccinGoTemplate from 'virtual:icons/catppuccin/go-template';
	import CatppuccinCoffeeScript from 'virtual:icons/catppuccin/coffeescript';

	export let data: PageData;
</script>

<svelte:head>
	<title>Blog - Zidariu Andrei</title>
	<meta
		name="description"
		content="Read my thoughts on software development, technology, and life as a full-stack engineer."
	/>
</svelte:head>

<div class="w-full mx-auto py-8">
	<header class="mb-12 text-center">
		<h1 class="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
		<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
			My thoughts on software development, technology, and lessons learned along the way.
		</p>
	</header>

	{#if data.posts.length === 0}
		<div class="text-center py-12">
			<CatppuccinGoTemplate class="size-24 mb-4 mx-auto" />
			<h2 class="text-2xl font-semibold text-foreground mb-2">No posts yet</h2>
			<div class="flex items-center justify-center w-full gap-1">
				<p class="text-muted-foreground">I'm working on some great content. Grab a</p>
				<CatppuccinCoffeeScript class="size-5 " />
				<p class="text-muted-foreground">and check back soon!</p>
			</div>
		</div>
	{:else}
		<div class="mb-12">
			{#each data.posts as post (post.title + post.date)}
				<BlogPostEntry {post} />
			{/each}
		</div>
	{/if}
</div>

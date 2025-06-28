<script lang="ts">
	import type { PageData } from './$types';
	import BlogPostHeader from '$lib/components/blog/BlogPostHeader.svelte';
	import Navigate from '$lib/components/Navigate.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.title} - Zidariu Andrei</title>
	<meta property="og:title" content={data.post.title} />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={data.post.date} />
	{#if data.post.tags}
		{#each data.post.tags as tag (tag)}
			<meta property="article:tag" content={tag} />
		{/each}
	{/if}
</svelte:head>

<article class="container mx-auto px-4 py-8 max-w-4xl">
	<BlogPostHeader post={data.post} />

	<div class="prose prose-lg dark:prose-invert max-w-none mb-12">
		{@html data.post.content}
	</div>

	<footer class="border-t border-border mb-12">
		<div class="w-full flex lg:flex-col flex-row justify-between gap-2">
			{#if data.post.tags && data.post.tags.length > 0}
				<div class="flex flex-wrap gap-2 pt-2">
					{#each data.post.tags as tag (tag)}
						<span
							class="inline-flex items-center p-1 rounded-full text-xs font-medium hover:bg-secondary/80 transition-colors"
						>
							#{tag}
						</span>
					{/each}
				</div>
			{/if}
			<Navigate path="/blog" location=".." />
		</div>
	</footer>
</article>

<script lang="ts">
	import type { BlogPostMetadata } from '$lib/types/blog';
	import { formatDate } from '$lib/utils/blog';

	export let post: BlogPostMetadata;
</script>

<article class="p-6">
	<div class="flex text-sm text-muted-foreground p-2 gap-2 items-center">
		<h2 class="text-md font-semibold text-foreground hover:text-teal-400 transition-colors">
			<a href="/blog/{post.slug}" class="block">
				{post.title}
			</a>
		</h2>
		<time datetime={post.date} class="text-xs select-none">
			{formatDate(post.date)}
		</time>
		{#if post.readingTime}
			<span class="text-xs select-none">{post.readingTime} min read</span>
		{/if}
	</div>

	{#if post.tags && post.tags.length > 0}
		<div class="flex flex-wrap gap-2">
			{#each post.tags as tag (tag)}
				<span
					class=" select-none inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-secondary text-secondary-foreground"
				>
					{tag}
				</span>
			{/each}
		</div>
	{/if}
</article>

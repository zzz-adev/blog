<script lang="ts">
	import type { BlogPost } from '$lib/types/blog';
	import { formatDate } from '$lib/utils/blog';

	export let post: BlogPost;
</script>

<header class="mb-8 space-y-4">
	<div class="space-y-4">
		<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
			{post.title}
		</h1>

		<div class="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
			<div class="flex items-center gap-2">
				<time datetime={post.date} class="font-medium">
					{formatDate(post.date)}
				</time>
			</div>

			{#if post.readingTime}
				<div class="flex items-center gap-1 text-teal-400 font-semibold">
					<span>{post.readingTime} min read</span>
				</div>
			{/if}
		</div>
	</div>
</header>

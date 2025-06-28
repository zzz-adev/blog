import type { BlogPost, BlogPostMetadata } from '$lib/types/blog';
import type { SvelteComponent } from 'svelte';
import { render } from 'svelte/server';
export function calculateReadingTime(content: string): number {
	const wordsPerMinute = 200;
	const words = content.trim().split(/\s+/).length;
	return Math.ceil(words / wordsPerMinute);
}

export function formatDate(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export async function loadBlogPosts(): Promise<BlogPostMetadata[]> {
	const modules = import.meta.glob('../../content/blog/*.md', { eager: true });
	const posts: BlogPostMetadata[] = [];

	for (const [path, module] of Object.entries(modules)) {
		const post = module as {
			default: typeof SvelteComponent;
			metadata: BlogPostMetadata;
		};
		const slug = path.split('/').pop()?.replace('.md', '') || '';
		const readingTime = calculateReadingTime(render(post.default).body || '');
		if (post.metadata) {
			posts.push({
				...post.metadata,
				slug,
				readingTime
			});
		}
	}
	return posts
		.filter((post) => post.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
	try {
		const post = await import(`../../content/blog/${slug}.md`);

		if (!post.metadata) {
			return null;
		}

		const content = render(post.default).body || '';
		const readingTime = calculateReadingTime(content);

		return {
			slug,
			...post.metadata,
			content,
			readingTime
		};
	} catch (error) {
		console.error(`Error loading blog post "${slug}":`, error);
		return null;
	}
}

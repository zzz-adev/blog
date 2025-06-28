import type { PageServerLoad } from './$types';
import { loadBlogPost } from '$lib/utils/blog';
import { error } from '@sveltejs/kit';
import { URL } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const { slug } = params;

		if (!slug) {
			throw error(400, 'Slug is required');
		}

		const post = await loadBlogPost(slug);

		if (!post) {
			throw error(404, 'Blog post not found');
		}

		if (!post.published) {
			throw error(404, 'Blog post not published');
		}
		return {
			post,
			URL
		};
	} catch (err) {
		if (err instanceof Error && 'status' in err) {
			throw err;
		}
		console.error(`Error loading blog post "${params.slug}":`, err);
		throw error(500, 'Failed to load blog post');
	}
};

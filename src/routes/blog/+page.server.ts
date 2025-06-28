import type { PageServerLoad } from './$types';
import { loadBlogPosts } from '$lib/utils/blog';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url }) => {
	try {
		const page = parseInt(url.searchParams.get('page') || '1');

		if (page < 1 || !Number.isInteger(page)) {
			throw error(400, 'Invalid page number');
		}

		const posts = await loadBlogPosts();
		return {
			posts: posts
		};
	} catch (err) {
		console.error('Error loading blog posts:', err);
		throw error(500, 'Failed to load blog posts');
	}
};

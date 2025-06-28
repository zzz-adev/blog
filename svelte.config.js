import { mdsvex, escapeSvelte } from 'mdsvex';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import { createHighlighter } from 'shiki';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
const highlighter = await createHighlighter({
	themes: ['vesper', 'catppuccin-latte'],
	langs: ['javascript', 'typescript', 'sql', 'html', 'mermaid', 'bash', 'json']
});
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(
				escapeSvelte(
					highlighter.codeToHtml(code, {
						lang,
						themes: { dark: 'vesper', light: 'catppuccin-latte' },
						defaultColor: 'light-dark()'
					})
				)
			);
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [[remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug]
};
const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.md']
};

export default config;

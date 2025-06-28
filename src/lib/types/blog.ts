export interface BlogPostMetadata {
	slug: string;
	title: string;
	date: string;
	published: boolean;
	tags?: string[];
	readingTime?: number;
}
export interface BlogPost extends BlogPostMetadata {
	content?: string;
}

export interface BlogPostWithContent extends BlogPost {
	content: string;
}

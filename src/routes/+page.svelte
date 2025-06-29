<script lang="ts">
	import WorkExperience from '$lib/components/work/WorkExperience.svelte';
	import Skills from '$lib/components/experience/Skills.svelte';
	import Education from '$lib/components/work/Education.svelte';
</script>

<div class="w-full mx-auto text-primary/70 p-4 flex flex-col gap-4 select-none">
	<h1 class="text-4xl font-semibold text-primary">
		Zidariu Andrei <span class="text-xs text-teal-400">24yo</span>
	</h1>
	<p class="-mt-2">
		<span class="text-xs bg-secondary p-1 rounded">located in Timisoara</span>
	</p>
	<p>Hey, I'm your go to full-stack software engineer, family man, and part time traveler.</p>
	<p>
		I tend to dive deep into the tech I find interesting. I love to learn new things and share my
		knowledge with others. Because of all of that, I started my own
		<a href="/blog" class="text-teal-400 underline hover:cursor-pointer">blog</a>. I also try to
		practice what I preach so
		<a class="text-teal-400 underline hover:cursor-pointer" href="https://github.com/zzz-adev"
			>here</a
		>
		is a curated list of my projects.
	</p>
	<p>
		P.S.
		<span class="text-teal-400 underline hover:cursor-pointer"
			>Curated list of media recommendations.</span
		>
	</p>
	<Skills />
	<WorkExperience />
	<Education />
</div>

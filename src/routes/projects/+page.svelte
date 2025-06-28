<script lang="ts">
	import CatppuccinExamplesFolder from 'virtual:icons/catppuccin/folder-examples';
	import CatppuccinCoffeeScript from 'virtual:icons/catppuccin/coffeescript';
	export let data: PageData;
</script>

{#if data.projects.length === 0}
	<div class="text-center py-12">
		<CatppuccinExamplesFolder class="size-24 mb-4 mx-auto" />
		<h2 class="text-2xl font-semibold text-foreground mb-2">No projects yet</h2>
		<div class="flex items-center justify-center w-full gap-1">
			<p class="text-muted-foreground">I'm working on some great stuff. Grab a</p>
			<CatppuccinCoffeeScript class="size-5 " />
			<p class="text-muted-foreground">and check back soon!</p>
		</div>
	</div>
{:else}
	<div class="mb-12">
		{#each data.projects as project (project.title + project.date)}
			<!-- <BlogPostEntry {post} /> -->
		{/each}
	</div>
{/if}

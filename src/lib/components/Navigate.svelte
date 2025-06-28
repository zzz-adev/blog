<script lang="ts">
	const { path = '/', location = '' } = $props();
</script>

<nav>
	<a
		href={path}
		class="inline-flex items-center text-sm text-muted-foreground underline underline-offset-6 hover:bg-primary-foreground hover:text-teal-400 p-1 rounded"
	>
		> zoxide {location}
	</a>
</nav>

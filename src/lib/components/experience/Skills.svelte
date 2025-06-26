<script lang="ts">
	import Technologies from '$lib/components/experience/Technologies.svelte';
	import Languages from '$lib/components/experience/Languages.svelte';
	import Tools from '$lib/components/experience/Tools.svelte';
</script>

<p class="text-xl font-semibold decoration-2 underline decoration-wavy underline-offset-4">
	Skills
</p>
<div class="px-3 flex flex-col gap-2">
	<Technologies />
	<Languages />
	<Tools />
</div>

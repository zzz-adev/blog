<script lang="ts">
	import CatppuccinFolderdockeropen from 'virtual:icons/catppuccin/folder-docker-open';
	import Deploy from './Deploy.svelte';
	import Environment from './Environment.svelte';
	import Database from './Database.svelte';
	import Design from './Design.svelte';
	import Ide from './Ide.svelte';
</script>

<div class="flex flex-row gap-2">
	<CatppuccinFolderdockeropen class="size-5" />
	<p>Tools</p>
</div>
<div class="flex flex-col gap-2 px-7 border-l-1">
	<Deploy />
	<Environment />
	<Database />
	<Design />
	<Ide />
</div>

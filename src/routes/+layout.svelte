<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '$lib/components/Navbar.svelte';
	let { children } = $props();
	import SocialLinks from '$lib/components/SocialLinks.svelte';
</script>

<div class="w-full lg:w-2/3 mx-auto relative h-screen">
	<ModeWatcher />
	<Navbar />
	{@render children()}
	<SocialLinks />
</div>

<script lang="ts">
	import CatppuccinDhall from 'virtual:icons/catppuccin/dhall';
	import CatppuccinMakefile from 'virtual:icons/catppuccin/makefile';
	import { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import ModeSwitch from '$lib/components/ModeSwitch.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { goto } from '$app/navigation';
</script>

<header>
	<nav class="w-full text-primary flex justify-between p-4 font-mono font-bold text-xl">
		<a href="/" class="select-none">AZ</a>
		<div class="flex items-center gap-2">
			<Tooltip.Provider delayDuration={100}>
				<Tooltip.Root>
					<Tooltip.Trigger
						class={buttonVariants({ variant: 'link', size: 'icon' })}
						onclick={() => goto('/blog')}
					>
						<CatppuccinDhall class="size-6" />
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p>Blog</p>
					</Tooltip.Content>
				</Tooltip.Root>
			</Tooltip.Provider>
			<Tooltip.Provider delayDuration={100}>
				<Tooltip.Root>
					<Tooltip.Trigger
						class={buttonVariants({ variant: 'link', size: 'icon' })}
						onclick={() => goto('/projects')}
					>
						<CatppuccinMakefile class="size-6" />
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p>Projects</p>
					</Tooltip.Content>
				</Tooltip.Root>
			</Tooltip.Provider>
			<ModeSwitch />
		</div>
	</nav>
</header>

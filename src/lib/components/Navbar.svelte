<script lang="ts">
	import CatppuccinDhall from 'virtual:icons/catppuccin/dhall';
	import CatppuccinMakefile from 'virtual:icons/catppuccin/makefile';
	import Button from '$lib/components/ui/button/button.svelte';
	import ModeSwitch from '$lib/components/ModeSwitch.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<div
	class="w-full lg:w-2/3 mx-auto text-primary flex justify-between p-4 font-mono font-bold text-xl"
>
	<p>AZ</p>
	<div class="flex items-center gap-2">
		<Tooltip.Provider delayDuration={100}>
			<Tooltip.Root>
				<Tooltip.Trigger>
					<Button variant="link" size="icon">
						<CatppuccinDhall class="size-6" />
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>Blog</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
		<Tooltip.Provider delayDuration={100}>
			<Tooltip.Root>
				<Tooltip.Trigger>
					<Button variant="link" size="icon">
						<CatppuccinMakefile class="size-6" />
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>Projects</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
		<ModeSwitch />
	</div>
</div>

<script lang="ts">
	import CatppuccinVue from 'virtual:icons/catppuccin/vue';
	import CatppuccinSvelte from 'virtual:icons/catppuccin/svelte';
	import CatppuccinReact from 'virtual:icons/catppuccin/typescript-react';
	import CatppuccinNuxt from 'virtual:icons/catppuccin/nuxt';
	import CatppuccinBun from 'virtual:icons/catppuccin/bun';
	import CatppuccinLaravel from 'virtual:icons/catppuccin/laravel';
	import CatppuccinFolderSrcOpen from 'virtual:icons/catppuccin/folder-src-open';
</script>

<div class="flex flex-row gap-2">
	<CatppuccinFolderSrcOpen class="size-5" />
	<p>Technologies</p>
</div>
<div class="flex flex-row gap-2 px-7 border-l-1">
	NodeJS, <span class="text-teal-400">Bun</span>
	<CatppuccinBun class="size-5" />
	Nuxt
	<CatppuccinNuxt class="size-5" />
	Vue
	<CatppuccinVue class="size-5" />
	React
	<CatppuccinReact class="size-5" />
	<span class="text-teal-400"> Svelte</span>
	<CatppuccinSvelte class="size-5" />
	Laravel
	<CatppuccinLaravel class="size-5" />
</div>

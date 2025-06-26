<script lang="ts">
	import CatppuccinDatabase from 'virtual:icons/catppuccin/database';
	import CatppuccinDrizzle from 'virtual:icons/catppuccin/drizzle-orm';
	import CatppuccinGraphql from 'virtual:icons/catppuccin/graphql';
	import CatppuccinPrisma from 'virtual:icons/catppuccin/prisma';
	import CatppuccinApollo from 'virtual:icons/catppuccin/apollo';
</script>

<div class="flex flex-row gap-2 flex-wrap">
	Database
	<CatppuccinDatabase class="size-5" />
	Postgres, SQLite,
	<span class="text-teal-400">Drizzle</span>
	<CatppuccinDrizzle class="size-5" />
	Graphql
	<CatppuccinGraphql class="size-5" />
	Prisma
	<CatppuccinPrisma class="size-5" />
	Apollo
	<CatppuccinApollo class="size-5" />
	<span class="text-teal-400">REST API</span>
</div>

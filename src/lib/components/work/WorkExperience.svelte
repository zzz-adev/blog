<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import CatppuccinFolderWorkflows from 'virtual:icons/catppuccin/folder-workflows';
	interface Position {
		title: string;
		period: string;
		achievements: string[];
	}

	interface WorkExperience {
		company: string;
		totalPeriod: string;
		positions: Position[];
	}

	const workExperience: WorkExperience[] = [
		{
			company: 'IkonSoft',
			totalPeriod: 'March 2021 to June 2025',
			positions: [
				{
					title: 'Senior Fullstack Engineer',
					period: '2024-2025',
					achievements: [
						'Developed core functionalities for clinical studies projects in the US Healthcare sector, ensuring strict compliance with 21CFR-Part 11 and HIPAA for data security and privacy.',
						'Collaborated effectively within a fast-paced environment to meet a tight deadline, developing features using Strapi, Apollo GraphQL, TypeScript, Vue, Nuxt, and Tailwind CSS.',
						'Designed and implemented robust, human-readable audit trails with redundancy checks, significantly enhancing system security, data integrity, and regulatory compliance.',
						'Implemented key backend security middlewares to fortify server defenses and prevent unauthorized access.',
						'Implemented the end-to-end Clinical Subject Portal, enabling subjects to autonomously schedule and manage visits through seamless integration with a custom identity provider.',
						'Engineered a system-wide UI/UX overhaul, implementing modern design principles to ensure consistency, elevate user experience, and meet accessibility standards across all platforms.'
					]
				},
				{
					title: 'Team Lead Developer',
					period: '2022-2024',
					achievements: [
						'Promoted to Team Lead Developer to spearhead the rapid onboarding and upskilling of two junior engineers, accelerating their transition to independent, high-quality code contributions.',
						'Led, mentored, and managed a growing team (from 4 to 6 members), directly contributing to a doubling of the client base and significant acceleration in project outcomes.',
						'Orchestrated and managed development across diverse projects with varied technology stacks, fostering strong team synergy and ensuring timely delivery of high-quality products.'
					]
				},
				{
					title: 'Junior Developer',
					period: '2021-2022',
					achievements: [
						'Engineered and maintained a critical Patient Portal as a fullstack developer, facilitating efficient examination requests and secure delivery of results.',
						'Developed and integrated highly complex features such as decision tree systems, modular plugin architectures, scalable account solutions, and secure payment gateways, addressing unique and sometimes conflicting needs for 60+ clients.',
						'Maintained and optimized system performance to handle peak loads exceeding 1 million user interactions per month for high-demand clients.'
					]
				}
			]
		}
	];
</script>

<p class="text-xl font-semibold decoration-2 underline decoration-wavy underline-offset-4">
	Work experience
</p>
{#each workExperience as job (job.totalPeriod + job.company)}
	<p>
		Worked at <span class="bg-secondary p-2 rounded text-teal-400">{job.company}</span> from
		<span class="bg-secondary p-2 rounded">{job.totalPeriod}</span> as:
	</p>
	{#each job.positions as position (position.title + position.period)}
		<Accordion.Root type="single" class="mx-8">
			<Accordion.Item value="item-1">
				<Accordion.Trigger>
					<div class="flex gap-2 text-left">
						<CatppuccinFolderWorkflows class="size-6" />
						<p class="text-left">
							<span class="font-semibold text-lg">{position.title}</span>
							<span class="text-sm font-light">{position.period}</span>
						</p>
					</div>
				</Accordion.Trigger>
				<Accordion.Content>
					<ul class="list-disc pl-12">
						{#each position.achievements as achievement (achievement)}
							<li class="p-2">
								{achievement}
							</li>
						{/each}
					</ul>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	{/each}
{/each}

import { Bot, Gamepad, Code } from "lucide-react";

export function UseCasesSection() {
	return (
		<section
			id="use-cases"
			className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-purple-100/70 to-slate-50 dark:from-purple-950/30 dark:to-slate-900/20"
		>
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
					<div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-4 py-1.5 text-sm font-medium text-purple-800 dark:text-purple-300 mb-2">
						Real-World Examples
					</div>
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight max-w-2xl">
						How Developers Are Using 8Ball API
					</h2>
					<p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
						Our fortune-telling API serves hundreds of thousands of requests for
						developers across the globe. Here&apos;s how developers are
						integrating it today.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{/* Discord Bots Use Case */}
					<div className="flex flex-col rounded-xl border bg-card p-8 shadow-sm hover:shadow-md transition-shadow h-full">
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 mb-6">
							<Bot className="h-7 w-7 text-purple-600 dark:text-purple-400" />
						</div>
						<h3 className="text-xl font-bold mb-4">Discord & Chat Bots</h3>
						<p className="text-muted-foreground">
							Power your chat bots with fortune-telling capabilities in seconds.
							With just one API call, create entertaining commands like{" "}
							<code className="text-xs bg-purple-100 dark:bg-purple-900/30 px-1 py-0.5 rounded">
								/8ball
							</code>{" "}
							that keep users engaged and coming back. Supports multiple
							languages for global communities.
						</p>
					</div>

					{/* Game Integration Use Case */}
					<div className="flex flex-col rounded-xl border bg-card p-8 shadow-sm hover:shadow-md transition-shadow h-full">
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 mb-6">
							<Gamepad className="h-7 w-7 text-purple-600 dark:text-purple-400" />
						</div>
						<h3 className="text-xl font-bold mb-4">Game Integrations</h3>
						<p className="text-muted-foreground">
							Add randomized fortune-telling elements to your games with our
							sentiment-based responses. Create mysterious NPCs, fortune
							tellers, or decision-making mechanics. The biased response feature
							analyzes question sentiment for contextually appropriate answers.
						</p>
					</div>

					{/* Creative Applications Use Case */}
					<div className="flex flex-col rounded-xl border bg-card p-8 shadow-sm hover:shadow-md transition-shadow h-full">
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 mb-6">
							<Code className="h-7 w-7 text-purple-600 dark:text-purple-400" />
						</div>
						<h3 className="text-xl font-bold mb-4">Creative Applications</h3>
						<p className="text-muted-foreground">
							From decision-making tools to writing prompts, our API enables
							creative applications of all kinds. Perfect for educational
							projects teaching API concepts, interactive storytelling, and
							innovative tools. Simple enough for beginners, powerful enough for
							production apps.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

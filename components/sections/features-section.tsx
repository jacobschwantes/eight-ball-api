import { Zap, Code, Bot } from "lucide-react";

export function FeaturesSection() {
	return (
		<section id="features" className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm">
							Features
						</div>
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							Built for developers, loved by Discord users
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Our API is designed to be simple, reliable, and perfect for
							Discord bots and game integrations.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
					<div className="flex flex-col justify-center space-y-4">
						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20">
							<Bot className="h-6 w-6 text-purple-600 dark:text-purple-400" />
						</div>
						<div className="space-y-2">
							<h3 className="text-xl font-bold">Discord-Optimized</h3>
							<p className="text-muted-foreground">
								Perfectly formatted responses that look great in Discord chat
								and maintain proper formatting and emojis.
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-center space-y-4">
						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20">
							<Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
						</div>
						<div className="space-y-2">
							<h3 className="text-xl font-bold">Simple Integration</h3>
							<p className="text-muted-foreground">
								Just a few lines of code to add magic 8-ball commands to your
								Discord bot or game.
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-center space-y-4">
						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20">
							<Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
						</div>
						<div className="space-y-2">
							<h3 className="text-xl font-bold">High Performance</h3>
							<p className="text-muted-foreground">
								Fast responses with no rate limits for common bot usage
								patterns, ensuring your users get immediate answers.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

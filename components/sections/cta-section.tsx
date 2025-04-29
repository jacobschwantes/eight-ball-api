import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function CTASection() {
	return (
		<section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50/80 to-background dark:from-purple-900/20 dark:to-background">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
					<div className="rounded-xl border bg-card shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow order-2 lg:order-1">
						<h3 className="text-xl font-bold mb-5 text-purple-700 dark:text-purple-400">
							Quick Start
						</h3>
						<div className="space-y-5">
							<div className="bg-muted p-4 rounded-lg">
								<div className="text-sm font-medium mb-2 flex items-center">
									<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs mr-2">
										1
									</span>
									Make a simple API call
								</div>
								<div className="font-mono text-xs bg-purple-900 text-slate-100 p-4 rounded-md shadow-sm">
									GET https://eightballapi.com/api
								</div>
							</div>

							<div className="bg-muted p-4 rounded-lg">
								<div className="text-sm font-medium mb-2 flex items-center">
									<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs mr-2">
										2
									</span>
									Get your fortune
								</div>
								<div className="font-mono text-xs bg-purple-900 text-slate-100 p-4 rounded-md shadow-sm">
									&quot;It is decidedly so.&quot;
								</div>
							</div>

							<div className="bg-muted p-4 rounded-lg">
								<div className="text-sm font-medium mb-2 flex items-center">
									<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs mr-2">
										3
									</span>
									Add parameters for more control
								</div>
								<div className="font-mono text-xs bg-purple-900 text-slate-100 p-4 rounded-md shadow-sm whitespace-pre-wrap overflow-x-auto">
									GET https://eightballapi.com/api/positive?locale=fr
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-6 order-1 lg:order-2">
						<div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm">
							Get Started Today
						</div>
						<h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Add fortune telling
							<br className="hidden sm:inline" /> to your app today
						</h2>
						<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
							Our API is free to use, requires no API key, and supports multiple
							languages. Start integrating fortune telling into your
							applications in minutes.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 pt-2">
							<Button
								asChild
								size="lg"
								className="bg-purple-700 hover:bg-purple-800 text-white shadow-sm hover:shadow"
							>
								<Link href="/playground">
									Try the Playground
									<ChevronRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="border-purple-200 hover:border-purple-300 dark:border-purple-800 dark:hover:border-purple-700"
							>
								<Link href="/docs">Read the Docs</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

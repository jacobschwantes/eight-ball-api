import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function CTASection() {
	return (
		<section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white dark:to-purple-950/20 dark:from-background">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
					<div className="space-y-4">
						<div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm mb-2">
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
						<div className="flex flex-col sm:flex-row gap-3 pt-4">
							<Button
								asChild
								size="lg"
								className="bg-purple-700 hover:bg-purple-800 text-white"
							>
								<Link href="/playground">
									Try the Playground
									<ChevronRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link href="/docs">Read the Docs</Link>
							</Button>
						</div>
					</div>

					<div className="rounded-xl border bg-card shadow-sm p-6 md:p-8">
						<h3 className="text-xl font-bold mb-4">Quick Start</h3>
						<div className="space-y-4">
							<div className="bg-muted p-3 rounded-lg">
								<div className="text-sm font-medium mb-1">
									1. Make a simple API call
								</div>
								<div className="font-mono text-xs bg-purple-900 text-slate-100 p-3 rounded-md">
									GET https://eightballapi.com/api
								</div>
							</div>

							<div className="bg-muted p-3 rounded-lg">
								<div className="text-sm font-medium mb-1">
									2. Get your fortune
								</div>
								<div className="font-mono text-xs bg-purple-900 text-slate-100 p-3 rounded-md">
									&quot;It is decidedly so.&quot;
								</div>
							</div>

							<div className="bg-muted p-3 rounded-lg">
								<div className="text-sm font-medium mb-1">
									3. Add parameters for more control
								</div>
								<div className="font-mono text-xs bg-purple-900 text-slate-100 p-3 rounded-md whitespace-pre-wrap overflow-x-auto">
									GET https://eightballapi.com/api/positive?locale=fr
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

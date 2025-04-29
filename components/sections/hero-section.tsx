import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ChevronRight,
	BookOpen,
	Languages,
	DollarSign,
	Unlock,
} from "lucide-react";
import { EnhancedMagicEightBall } from "../magic-eight-ball/enhanced-magic-eight-ball";

export function HeroSection() {
	return (
		<section className="w-full py-8 md:py-16 lg:py-24 bg-gradient-to-b from-background to-purple-100/70 dark:to-purple-950/30 overflow-hidden relative">
			{/* Magical background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
				<div className="absolute top-1/3 -right-20 w-40 h-40 md:w-60 md:h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>
				{/* <div className="absolute bottom-0 left-1/4 w-32 h-32 md:w-40 md:h-40 bg-blue-500/10 rounded-full blur-3xl"></div> */}
			</div>

			<div className="container px-4 md:px-6 relative mx-auto">
				<div className="grid gap-6 md:gap-8 lg:grid-cols-[1fr_600px] xl:gap-12 items-center">
					<div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
						<div className="space-y-2 md:space-y-3">
							<h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl/none max-w-full mx-auto lg:mx-0">
								8Ball API: Magic 8-Ball Fortune Telling
							</h1>
							<p className="max-w-[600px] text-sm sm:text-base text-muted-foreground md:text-lg lg:text-xl mx-auto lg:mx-0">
								Add mystical fortune telling to your apps with our RESTful API.
								Integrate seamlessly with Discord bots, games, web apps, and
								more. Simple, reliable, and ready to use in minutes.
							</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start md:max-w-md md:mx-auto lg:mx-0">
							<Button
								asChild
								size="lg"
								className="bg-purple-700 hover:bg-purple-800 text-white w-full xs:w-auto text-sm sm:text-base"
							>
								<Link href="/playground">
									Try the API
									<ChevronRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button
								variant="outline"
								size="lg"
								asChild
								className="w-full xs:w-auto text-sm sm:text-base"
							>
								<Link href="/docs">
									<BookOpen className="mr-2 h-4 w-4" />
									API Documentation
								</Link>
							</Button>
						</div>
						<div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-3 text-xs sm:text-sm">
							<div className="flex items-center space-x-1">
								<Unlock className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />
								<span>No API Key Required</span>
							</div>
							<div className="flex items-center space-x-1">
								<Languages className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />
								<span>Multiple Languages</span>
							</div>
							<div className="flex items-center space-x-1">
								<DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />
								<span>Free to Use</span>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center py-4 sm:py-6 md:py-0 md:-mt-16">
						<EnhancedMagicEightBall />
					</div>
				</div>
			</div>
		</section>
	);
}

export function DocsHeader() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-purple-50 dark:to-purple-950/20">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							8Ball API Documentation
						</h1>
						<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
							Complete reference guide to integrate fortune telling into your
							applications
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

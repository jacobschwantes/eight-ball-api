import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HighlightedCode } from "../code/highlighted-code";

const jsCode = `fetch('https://eightballapi.com/api/biased?question=Will+I+succeed&lucky=true')
.then(response => response.json())
.then(data => {
  console.log(data.reading); // "Outlook good"
  console.log(data.sentiment.score); // 2
  console.log(data.sentiment.positive); // ["succeed"]
});`;

const jsonResponse = `{
  "reading": "Outlook good",
  "question": "Will I succeed?",
  "sentiment": {
    "score": 2,
    "comparative": 0.6667,
    "calculation": [{"succeed": 2}],
    "tokens": ["Will", "I", "succeed?"],
    "words": ["succeed"],
    "positive": ["succeed"],
    "negative": []
  },
  "locale": "en",
  "lucky": true
}`;

export function DocsSection() {
	return (
		<section
			id="docs"
			className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/20"
		>
			<div className="container px-4 md:px-6 mx-auto">
				<div className="grid gap-6 md:gap-8 lg:grid-cols-[1fr_auto] xl:grid-cols-[1fr_650px] items-start">
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm">
								Documentation
							</div>
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
								Simple to implement, powerful to use
							</h2>
							<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Our API is RESTful and returns JSON, making it easy to integrate
								with any application.
							</p>
						</div>
						<div className="space-y-4">
							<div className="rounded-lg border bg-card p-4">
								<h3 className="font-mono text-sm font-semibold">GET /api</h3>
								<p className="mt-2 text-sm text-muted-foreground">
									Returns a plain text Magic 8-Ball response.
								</p>
							</div>
							<div className="rounded-lg border bg-card p-4">
								<h3 className="font-mono text-sm font-semibold">
									GET /api/categories
								</h3>
								<p className="mt-2 text-sm text-muted-foreground">
									Returns all responses grouped by category (positive, negative,
									neutral).
								</p>
							</div>
							<div className="rounded-lg border bg-card p-4">
								<h3 className="font-mono text-sm font-semibold">
									POST /api/biased
								</h3>
								<p className="mt-2 text-sm text-muted-foreground">
									Returns a biased response based on the sentiment of the
									question.
								</p>
							</div>
						</div>
						<div>
							<Button asChild variant="outline">
								<Link href="/docs">View Full Documentation</Link>
							</Button>
						</div>
					</div>
					<div className="rounded-xl border bg-card p-4 shadow-sm w-full overflow-hidden">
						<div className="flex items-center justify-between border-b pb-2">
							<div className="flex items-center gap-2">
								<div className="h-3 w-3 rounded-full bg-red-500"></div>
								<div className="h-3 w-3 rounded-full bg-yellow-500"></div>
								<div className="h-3 w-3 rounded-full bg-green-500"></div>
							</div>
							<div className="text-xs font-medium">Example Request</div>
						</div>
						<div className="overflow-x-auto">
							<HighlightedCode
								code={jsCode}
								language="javascript"
								className="mt-4"
							/>
							<div className="mt-4">
								<div className="text-xs font-medium text-muted-foreground mb-2 px-4 pt-4">
									Response:
								</div>
								<HighlightedCode code={jsonResponse} language="json" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HighlightedCode } from "../code/highlighted-code";
import { useState } from "react";

// Basic endpoint
const basicCode = `fetch('https://eightballapi.com/api')
.then(response => response.json())
.then(data => {
  console.log(data.reading); // "Ask again later"
});`;

const basicResponse = `{
  "reading": "Ask again later"
}`;

// Categories endpoint
const categoriesCode = `fetch('https://eightballapi.com/api/categories')
.then(response => response.json())
.then(data => {
  console.log(data.positive); // ["It is certain", "Most likely", ...]
  console.log(data.negative); // ["Don't count on it", "My reply is no", ...]
  console.log(data.neutral); // ["Reply hazy, try again", "Ask again later", ...]
});`;

const categoriesResponse = `{
  "positive": [
    "It is certain",
    "Most likely",
    "Outlook good",
    "Signs point to yes",
    "Yes definitely"
  ],
  "negative": [
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ],
  "neutral": [
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Reply hazy, try again"
  ]
}`;

// Biased endpoint
const biasedCode = `fetch('https://eightballapi.com/api/biased?question=Will+I+succeed&lucky=true')
.then(response => response.json())
.then(data => {
  console.log(data.reading); // "Outlook good"
  console.log(data.sentiment.score); // 2
  console.log(data.sentiment.positive); // ["succeed"]
});`;

const biasedResponse = `{
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
	const [selectedEndpoint, setSelectedEndpoint] = useState("biased");

	const getExampleCode = () => {
		switch (selectedEndpoint) {
			case "basic":
				return basicCode;
			case "categories":
				return categoriesCode;
			case "biased":
				return biasedCode;
			default:
				return biasedCode;
		}
	};

	const getResponseCode = () => {
		switch (selectedEndpoint) {
			case "basic":
				return basicResponse;
			case "categories":
				return categoriesResponse;
			case "biased":
				return biasedResponse;
			default:
				return biasedResponse;
		}
	};

	return (
		<section
			id="docs"
			className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-purple-50/80 dark:from-slate-900/20 dark:to-purple-900/20"
		>
			<div className="container px-4 md:px-6 mx-auto">
				<div className="grid gap-6 md:gap-8 lg:grid-cols-[1fr_auto] xl:grid-cols-[1fr_700px] items-start">
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
							<button
								className={`w-full text-left rounded-lg border bg-card p-4 cursor-pointer transition-colors ${
									selectedEndpoint === "biased" ? "border-primary" : ""
								}`}
								onClick={() => setSelectedEndpoint("biased")}
							>
								<h3 className="font-mono text-sm font-semibold">
									POST /api/biased
								</h3>
								<p className="mt-2 text-sm text-muted-foreground">
									Returns a biased response based on the sentiment of the
									question.
								</p>
							</button>
							<button
								className={`w-full text-left rounded-lg border bg-card p-4 cursor-pointer transition-colors ${
									selectedEndpoint === "basic" ? "border-primary" : ""
								}`}
								onClick={() => setSelectedEndpoint("basic")}
							>
								<h3 className="font-mono text-sm font-semibold">GET /api</h3>
								<p className="mt-2 text-sm text-muted-foreground">
									Returns a plain text Magic 8-Ball response.
								</p>
							</button>
							<button
								className={`w-full text-left rounded-lg border bg-card p-4 cursor-pointer transition-colors ${
									selectedEndpoint === "categories" ? "border-primary" : ""
								}`}
								onClick={() => setSelectedEndpoint("categories")}
							>
								<h3 className="font-mono text-sm font-semibold">
									GET /api/categories
								</h3>
								<p className="mt-2 text-sm text-muted-foreground">
									Returns all responses grouped by category (positive, negative,
									neutral).
								</p>
							</button>
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
								code={getExampleCode()}
								language="javascript"
								className="mt-4"
							/>
							<div className="mt-4">
								<div className="text-xs font-medium text-muted-foreground mb-2 px-4 pt-4">
									Response:
								</div>
								<HighlightedCode code={getResponseCode()} language="json" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import { CopyIcon, RefreshCwIcon, Globe, CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism-tomorrow.css";

interface MockResponse {
	reading?: string;
	plainText?: string;
	sentiment?: string;
	score?: number;
	locale?: string;
	error?: string;
	category?: string;
	positive?: string[];
	negative?: string[];
	neutral?: string[];
	[key: string]: unknown;
}

// Add interface for response metadata
interface ResponseMetadata {
	duration: number;
	statusCode: number;
	statusText: string;
	timestamp: string;
	headers: Record<string, string>;
}

type Endpoint = {
	path: string;
	method: "GET" | "POST";
	description: string;
	params: {
		name: string;
		type: "text" | "boolean" | "select";
		description: string;
		required: boolean;
		options?: string[];
	}[];
};

export function Playground() {
	const [question, setQuestion] = useState("");
	const [category, setCategory] = useState("positive");
	const [locale, setLocale] = useState("en");
	const [jsonOutput, setJsonOutput] = useState(true);
	const [lucky, setLucky] = useState(false);
	const [response, setResponse] = useState<MockResponse | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [copiedEndpoint, setCopiedEndpoint] = useState(false);
	const [selectedEndpoint, setSelectedEndpoint] = useState("random");
	const [responseMetadata, setResponseMetadata] =
		useState<ResponseMetadata | null>(null);
	const jsonResponseRef = useRef<HTMLElement>(null);

	const apiBaseUrl = "https://eightballapi.com";

	// Available locales
	const locales = [
		{ code: "en", name: "English" },
		{ code: "es", name: "Spanish" },
		{ code: "fr", name: "French" },
		{ code: "de", name: "German" },
		{ code: "hi", name: "Hindi" },
		{ code: "ru", name: "Russian" },
	];

	// Highlight code when response changes
	useEffect(() => {
		if (response && jsonResponseRef.current) {
			Prism.highlightElement(jsonResponseRef.current);
		}
	}, [response, selectedEndpoint]);

	const endpoints: Record<string, Endpoint> = {
		random: {
			path: "/api",
			method: "GET",
			description: "Returns a random Magic 8-Ball response.",
			params: [
				{
					name: "locale",
					type: "text",
					description:
						"Language code for response localization (e.g., en, es, fr)",
					required: false,
				},
			],
		},
		categories: {
			path: "/api/categories",
			method: "GET",
			description:
				"Returns all responses grouped by category (positive, negative, neutral)",
			params: [
				{
					name: "locale",
					type: "text",
					description:
						"Language code for response localization (e.g., en, es, fr)",
					required: false,
				},
			],
		},
		specificCategory: {
			path: "/api/[category]",
			method: "GET",
			description: "Returns a random response from a specific category",
			params: [
				{
					name: "category",
					type: "select",
					description:
						"The category of response (positive, negative, or neutral)",
					required: true,
					options: ["positive", "negative", "neutral"],
				},
				{
					name: "locale",
					type: "text",
					description:
						"Language code for response localization (e.g., en, es, fr)",
					required: false,
				},
			],
		},
		biased: {
			path: "/api/biased",
			method: "GET",
			description:
				"Returns a biased response based on the sentiment of the question",
			params: [
				{
					name: "question",
					type: "text",
					description: "The question you want to ask the Magic 8-Ball",
					required: true,
				},
				{
					name: "lucky",
					type: "boolean",
					description: "Increases the chance of a positive response",
					required: false,
				},
				{
					name: "locale",
					type: "text",
					description:
						"Language code for response localization (e.g., en, es, fr)",
					required: false,
				},
			],
		},
	};

	const getFullEndpointUrl = () => {
		// Build the API URL based on the selected endpoint with the full domain for display purposes
		let apiPath = endpoints[selectedEndpoint].path;
		const urlParams = new URLSearchParams();

		// Handle path parameters for category endpoint
		if (selectedEndpoint === "specificCategory") {
			apiPath = apiPath.replace("[category]", category);
		}

		// Add query parameters
		endpoints[selectedEndpoint].params.forEach((param) => {
			// Skip category for specificCategory endpoint as it's in the path
			if (
				selectedEndpoint === "specificCategory" &&
				param.name === "category"
			) {
				return;
			}

			if (param.name === "locale" && locale) {
				urlParams.append(param.name, locale);
			} else if (param.name === "json" && jsonOutput) {
				urlParams.append(param.name, "true");
			} else if (param.name === "question" && question.trim()) {
				urlParams.append(param.name, question);
			} else if (param.name === "lucky" && lucky) {
				urlParams.append(param.name, "true");
			}
		});

		const queryString = urlParams.toString() ? `?${urlParams.toString()}` : "";
		return `${apiBaseUrl}${apiPath}${queryString}`;
	};

	// Get the relative URL path for making actual API requests
	const getRequestUrl = () => {
		// Extract just the path and query parameters without the domain
		const fullUrl = getFullEndpointUrl();
		// Remove the domain to get just the path
		return fullUrl.replace(apiBaseUrl, "");
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Validate required fields
		if (
			(selectedEndpoint === "biased" && !question.trim()) ||
			(selectedEndpoint === "specificCategory" && !category)
		) {
			return;
		}

		setIsLoading(true);
		setResponse(null);
		setResponseMetadata(null);

		try {
			// Use the relative URL for making the actual API request
			const url = getRequestUrl();

			// Start timing the request
			const startTime = performance.now();

			// Make the API call to relative path
			const response = await fetch(url);

			// Calculate request duration
			const endTime = performance.now();
			const duration = endTime - startTime;

			// Extract response metadata
			const headers: Record<string, string> = {};
			response.headers.forEach((value, key) => {
				headers[key] = value;
			});

			setResponseMetadata({
				duration,
				statusCode: response.status,
				statusText: response.statusText,
				timestamp: new Date().toISOString(),
				headers,
			});

			// Handle different response types
			if (selectedEndpoint === "random" && !jsonOutput) {
				// Plain text response
				const textData = await response.text();
				setResponse({ plainText: textData });
			} else {
				// JSON response
				const jsonData = await response.json();
				setResponse(jsonData);
			}
		} catch (error) {
			console.error("API request failed:", error);
			setResponse({ error: "Failed to fetch response. Please try again." });
		} finally {
			setIsLoading(false);
		}
	};

	const copyEndpointUrl = () => {
		navigator.clipboard.writeText(getFullEndpointUrl());
		setCopiedEndpoint(true);
		setTimeout(() => setCopiedEndpoint(false), 2000);
	};

	return (
		<>
			{/* Header Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-purple-50 dark:to-purple-950/20">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								8Ball API Playground
							</h1>
							<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
								Test the Magic 8-Ball API endpoints directly in your browser
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Content Section */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="mx-auto max-w-5xl">
						<div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12">
							<div className="flex flex-col">
								<div className="rounded-xl border bg-card p-6 shadow-sm overflow-hidden sticky top-24">
									<form onSubmit={handleSubmit} className="space-y-6">
										<div className="space-y-4">
											<div>
												<label
													htmlFor="endpoint"
													className="text-sm font-medium mb-2 block"
												>
													Select Endpoint
												</label>
												<Select
													value={selectedEndpoint}
													onValueChange={setSelectedEndpoint}
												>
													<SelectTrigger>
														<SelectValue placeholder="Select an endpoint" />
													</SelectTrigger>
													<SelectContent>
														{Object.entries(endpoints).map(
															([key, endpoint]) => (
																<SelectItem key={key} value={key}>
																	{endpoint.method} {endpoint.path}
																</SelectItem>
															)
														)}
													</SelectContent>
												</Select>
												<p className="text-sm text-muted-foreground mt-2">
													{endpoints[selectedEndpoint].description}
												</p>
											</div>

											{endpoints[selectedEndpoint].params.map((param) => (
												<div key={param.name}>
													{param.type === "text" ? (
														<div className="space-y-2">
															<label
																htmlFor={param.name}
																className="text-sm font-medium block"
															>
																{param.name.charAt(0).toUpperCase() +
																	param.name.slice(1)}
																{param.required && (
																	<span className="text-red-500 ml-1">*</span>
																)}
															</label>
															{param.name === "locale" ? (
																<Select
																	value={locale}
																	onValueChange={setLocale}
																>
																	<SelectTrigger>
																		<SelectValue placeholder="Select language" />
																	</SelectTrigger>
																	<SelectContent>
																		{locales.map((loc) => (
																			<SelectItem
																				key={loc.code}
																				value={loc.code}
																			>
																				{loc.name} ({loc.code})
																			</SelectItem>
																		))}
																	</SelectContent>
																</Select>
															) : (
																<Input
																	id={param.name}
																	value={
																		param.name === "question" ? question : ""
																	}
																	onChange={
																		param.name === "question"
																			? (e) => setQuestion(e.target.value)
																			: undefined
																	}
																	placeholder={`Enter ${param.name}...`}
																/>
															)}
															<p className="text-xs text-muted-foreground">
																{param.description}
															</p>
														</div>
													) : param.type === "boolean" ? (
														<div className="flex items-center space-x-2">
															<Switch
																id={param.name}
																checked={
																	param.name === "json"
																		? jsonOutput
																		: param.name === "lucky"
																		? lucky
																		: false
																}
																onCheckedChange={
																	param.name === "json"
																		? setJsonOutput
																		: param.name === "lucky"
																		? setLucky
																		: undefined
																}
															/>
															<Label htmlFor={param.name}>
																{param.name.charAt(0).toUpperCase() +
																	param.name.slice(1)}
															</Label>
															<p className="text-xs text-muted-foreground ml-2">
																{param.description}
															</p>
														</div>
													) : param.type === "select" ? (
														<div className="space-y-2">
															<label
																htmlFor={param.name}
																className="text-sm font-medium block"
															>
																{param.name.charAt(0).toUpperCase() +
																	param.name.slice(1)}
																{param.required && (
																	<span className="text-red-500 ml-1">*</span>
																)}
															</label>
															<Select
																value={category}
																onValueChange={setCategory}
															>
																<SelectTrigger>
																	<SelectValue
																		placeholder={`Select ${param.name}...`}
																	/>
																</SelectTrigger>
																<SelectContent>
																	{param.options?.map((option) => (
																		<SelectItem key={option} value={option}>
																			{option.charAt(0).toUpperCase() +
																				option.slice(1)}
																		</SelectItem>
																	))}
																</SelectContent>
															</Select>
															<p className="text-xs text-muted-foreground">
																{param.description}
															</p>
														</div>
													) : null}
												</div>
											))}
										</div>

										<Button
											type="submit"
											className="w-full"
											disabled={
												isLoading ||
												(selectedEndpoint === "biased" && !question.trim()) ||
												(selectedEndpoint === "specificCategory" && !category)
											}
										>
											{isLoading ? (
												<>
													<RefreshCwIcon className="mr-2 h-4 w-4 animate-spin" />
													Fetching...
												</>
											) : (
												<>
													<Globe className="mr-2 h-4 w-4" />
													Send Request
												</>
											)}
										</Button>
									</form>
								</div>
							</div>

							<div className="rounded-xl border bg-card shadow-sm min-h-[500px] flex flex-col">
								<div className="flex items-center justify-between border-b pb-2 px-4 pt-4">
									<div className="flex items-center gap-2">
										<div className="h-3 w-3 rounded-full bg-red-500"></div>
										<div className="h-3 w-3 rounded-full bg-yellow-500"></div>
										<div className="h-3 w-3 rounded-full bg-green-500"></div>
									</div>
									<div className="text-xs font-medium">Response</div>
								</div>

								{/* Endpoint URL Display - Now in right column */}
								<div className="px-4 pt-4 pb-2 border-b">
									<label className="text-sm font-medium mb-2 block">
										Endpoint URL
									</label>
									<div className="relative mt-1">
										<div className="w-full rounded-md bg-slate-50 dark:bg-zinc-900 border p-2 text-sm font-mono overflow-hidden whitespace-nowrap text-ellipsis pr-10">
											<div className="overflow-x-auto max-w-full pb-1">
												{getFullEndpointUrl()}
											</div>
										</div>
										<Button
											type="button"
											className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
											variant="ghost"
											onClick={copyEndpointUrl}
										>
											{copiedEndpoint ? (
												<CheckIcon className="h-4 w-4" />
											) : (
												<CopyIcon className="h-4 w-4" />
											)}
										</Button>
									</div>
								</div>

								<div className="p-4 flex-1 flex flex-col">
									{response ? (
										<div className="flex-1 flex flex-col">
											{/* Display request metadata */}
											{responseMetadata && (
												<div className="bg-slate-50 dark:bg-[#2d2d2d] rounded-md p-4 text-xs">
													<div className="flex justify-between items-center mb-2">
														<div className="font-medium">Request Details</div>
														<div className="text-muted-foreground">
															{new Date(
																responseMetadata.timestamp
															).toLocaleTimeString()}
														</div>
													</div>
													<div className="grid grid-cols-2 gap-x-4 gap-y-1">
														<div className="text-muted-foreground">Status:</div>
														<div
															className={`${
																responseMetadata.statusCode >= 200 &&
																responseMetadata.statusCode < 300
																	? "text-green-600 dark:text-green-400"
																	: "text-red-600 dark:text-red-400"
															}`}
														>
															{responseMetadata.statusCode}{" "}
															{responseMetadata.statusText}
														</div>
														<div className="text-muted-foreground">
															Duration:
														</div>
														<div>{responseMetadata.duration.toFixed(0)} ms</div>
													</div>
												</div>
											)}
											{selectedEndpoint === "random" && !jsonOutput ? (
												<div className="px-4 py-6 text-center flex-1 flex items-center justify-center">
													<div className="text-xl font-medium">
														{response.plainText}
													</div>
												</div>
											) : (
												<div className="overflow-hidden rounded text-sm">
													<pre className="language-json max-h-[400px] overflow-y-auto">
														<code
															ref={jsonResponseRef}
															className="language-json"
														>
															{JSON.stringify(
																response.plainText
																	? { reading: response.plainText }
																	: response,
																null,
																2
															)}
														</code>
													</pre>
												</div>
											)}
										</div>
									) : (
										<div className="rounded  p-4 text-sm text-center text-slate-400 flex-1 flex items-center justify-center">
											{isLoading ? (
												<div className="flex flex-col items-center">
													<RefreshCwIcon className="h-8 w-8 animate-spin text-purple-400 mb-2" />
													<span>Processing request...</span>
												</div>
											) : (
												<div className="flex flex-col items-center">
													<Globe className="h-8 w-8 text-slate-600 mb-2" />
													<span>Send a request to see the response</span>
												</div>
											)}
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

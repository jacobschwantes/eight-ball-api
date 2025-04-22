import { CodeBlock } from "./code-block";

interface ParameterProps {
	name: string;
	type: string;
	required: boolean;
	description: string;
}

function Parameter({ name, type, required, description }: ParameterProps) {
	return (
		<tr className="border-b">
			<td className="py-2 px-2 md:px-4 font-mono text-xs md:text-sm">{name}</td>
			<td className="py-2 px-2 md:px-4 text-xs md:text-sm">{type}</td>
			<td className="py-2 px-2 md:px-4 text-xs md:text-sm">
				{required ? "Yes" : "No"}
			</td>
			<td className="py-2 px-2 md:px-4 text-xs md:text-sm">{description}</td>
		</tr>
	);
}

interface ParamsTableProps {
	parameters: ParameterProps[];
}

function ParamsTable({ parameters }: ParamsTableProps) {
	return (
		<div>
			<h4 className="font-medium mb-2 text-sm md:text-base">
				Query Parameters
			</h4>
			<div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
				<table className="w-full border-collapse min-w-[400px]">
					<thead>
						<tr className="border-b">
							<th className="py-2 px-2 md:px-4 text-left font-medium text-xs md:text-sm">
								Parameter
							</th>
							<th className="py-2 px-2 md:px-4 text-left font-medium text-xs md:text-sm">
								Type
							</th>
							<th className="py-2 px-2 md:px-4 text-left font-medium text-xs md:text-sm">
								Required
							</th>
							<th className="py-2 px-2 md:px-4 text-left font-medium text-xs md:text-sm">
								Description
							</th>
						</tr>
					</thead>
					<tbody>
						{parameters.map((param) => (
							<Parameter key={param.name} {...param} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

interface EndpointProps {
	id: string;
	title: string;
	method: "GET" | "POST";
	path: string;
	description: string;
	children: React.ReactNode;
}

export function Endpoint({
	id,
	title,
	method,
	path,
	description,
	children,
}: EndpointProps) {
	return (
		<div id={id} className="pt-4">
			<h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
			<div className="flex items-center space-x-2 font-mono text-xs md:text-sm mb-4">
				<span
					className={`${
						method === "GET"
							? "bg-green-100 text-green-700 dark:bg-green-700/20 dark:text-green-400"
							: "bg-blue-100 text-blue-700 dark:bg-blue-700/20 dark:text-blue-400"
					} px-2 py-1 rounded`}
				>
					{method}
				</span>
				<span className="break-all">{path}</span>
			</div>
			<p className="mb-4 text-sm md:text-base">{description}</p>
			<div className="space-y-4">{children}</div>
		</div>
	);
}

export function RandomFortuneEndpoint() {
	const parameters = [
		{
			name: "locale",
			type: "string",
			required: false,
			description:
				"The language code for response localization (e.g., en, es, fr, de, hi, ru)",
		},
	];

	return (
		<Endpoint
			id="random-fortune"
			title="Get Random Fortune"
			method="GET"
			path="/api"
			description="Returns a random Magic 8 Ball response."
		>
			<ParamsTable parameters={parameters} />
			<div>
				<h4 className="font-medium mb-2 text-sm md:text-base">
					Response Format
				</h4>
				<CodeBlock
					code={`{
  "reading": "Outlook good",
  "locale": "en"  // Only included for non-default locale
}`}
					language="json"
				/>
			</div>
		</Endpoint>
	);
}

export function CategoriesEndpoint() {
	const parameters = [
		{
			name: "locale",
			type: "string",
			required: false,
			description:
				"The language code for response localization (e.g., en, es, fr, de, hi, ru)",
		},
	];

	return (
		<Endpoint
			id="categories"
			title="Get Categories"
			method="GET"
			path="/api/categories"
			description="Returns all responses grouped by category (positive, negative, neutral)."
		>
			<ParamsTable parameters={parameters} />
			<div>
				<h4 className="font-medium mb-2 text-sm md:text-base">
					Response Format
				</h4>
				<CodeBlock
					code={`{
  "positive": [
    "It is Certain.",
    "It is decidedly so.",
    // ... more positive responses
  ],
  "neutral": [
    "Reply hazy, try again.",
    "Ask again later.",
    // ... more neutral responses
  ],
  "negative": [
    "Don't count on it.",
    "My reply is no.",
    // ... more negative responses
  ],
  "locale": "en"
}`}
					language="json"
				/>
			</div>
		</Endpoint>
	);
}

export function SpecificCategoryEndpoint() {
	const pathParameters = [
		{
			name: "category",
			type: "string",
			required: true,
			description: "The category of response (positive, negative, or neutral)",
		},
	];

	const queryParameters = [
		{
			name: "locale",
			type: "string",
			required: false,
			description:
				"The language code for response localization (e.g., en, es, fr, de, hi, ru)",
		},
	];

	return (
		<Endpoint
			id="specific-category"
			title="Get Specific Category"
			method="GET"
			path="/api/[category]"
			description="Returns a random response from a specific category (positive, negative, or neutral)."
		>
			<div>
				<h4 className="font-medium mb-2 text-sm md:text-base">
					Path Parameters
				</h4>
				<div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
					<table className="w-full border-collapse min-w-[400px]">
						<thead>
							<tr className="border-b">
								<th className="py-2 px-2 md:px-4 text-left font-medium text-xs md:text-sm">
									Parameter
								</th>
								<th className="py-2 px-2 md:px-4 text-left font-medium text-xs md:text-sm">
									Type
								</th>
								<th className="py-2 px-2 md:px-4 text-left font-medium text-xs md:text-sm">
									Required
								</th>
								<th className="py-2 px-2 md:px-4 text-left font-medium text-xs md:text-sm">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							{pathParameters.map((param) => (
								<Parameter key={param.name} {...param} />
							))}
						</tbody>
					</table>
				</div>
			</div>
			<ParamsTable parameters={queryParameters} />
			<div>
				<h4 className="font-medium mb-2 text-sm md:text-base">
					Response Format
				</h4>
				<CodeBlock
					code={`{
  "reading": "It is Certain.",
  "category": "positive",
  "locale": "en"
}`}
					language="json"
				/>
			</div>
		</Endpoint>
	);
}

export function BiasedFortuneEndpoint() {
	const parameters = [
		{
			name: "question",
			type: "string",
			required: true,
			description: "The question to analyze for sentiment",
		},
		{
			name: "lucky",
			type: "boolean",
			required: false,
			description: 'Whether to give a "lucky" response (default: false)',
		},
		{
			name: "locale",
			type: "string",
			required: false,
			description:
				"The language code for response localization (e.g., en, es, fr, de, hi, ru)",
		},
	];

	return (
		<Endpoint
			id="biased-fortune"
			title="Get Biased Fortune"
			method="GET"
			path="/api/biased"
			description="Returns a biased Magic 8 Ball response based on the sentiment of your question."
		>
			<ParamsTable parameters={parameters} />
			<div>
				<h4 className="font-medium mb-2 text-sm md:text-base">
					Response Format
				</h4>
				<CodeBlock
					code={`{
  "reading": "My reply is no.",
  "question": "Will I win the lottery?",
  "sentiment": {
    "score": 4,
    "comparative": 0.8,
    "calculation": [{"win": 4}],
    "tokens": ["Will", "I", "win", "the", "lottery?"],
    "words": ["Win"],
    "positive": ["Win"],
    "negative": []
  },
  "locale": "en",
  "lucky": false
}`}
					language="json"
				/>
			</div>
		</Endpoint>
	);
}

export function BiasedFortunePostEndpoint() {
	return (
		<div className="mt-6 md:mt-8">
			<div className="flex items-center space-x-2 font-mono text-xs md:text-sm mb-4">
				<span className="bg-blue-100 text-blue-700 dark:bg-blue-700/20 dark:text-blue-400 px-2 py-1 rounded">
					POST
				</span>
				<span className="break-all">/api/biased</span>
			</div>
			<p className="mb-4 text-sm md:text-base">
				Alternative method to get a biased response by sending parameters in the
				request body.
			</p>

			<div className="space-y-4">
				<div>
					<h4 className="font-medium mb-2 text-sm md:text-base">
						Request Body
					</h4>
					<CodeBlock
						code={`{
  "question": "Will I succeed?",  // Required
  "lucky": true,                  // Optional, defaults to false
  "locale": "fr"                  // Optional, defaults to "en"
}`}
						language="json"
					/>
				</div>

				<div>
					<h4 className="font-medium mb-2 text-sm md:text-base">
						Response Format
					</h4>
					<CodeBlock
						code={`{
  "reading": "Ma réponse est non.",
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
  "locale": "fr",
  "lucky": true
}`}
						language="json"
					/>
				</div>
			</div>
		</div>
	);
}

export function IntroductionSection() {
	return (
		<div id="introduction" className="space-y-4 md:space-y-6">
			<h2 className="text-xl md:text-2xl font-bold tracking-tight">
				Introduction
			</h2>
			<p className="text-sm md:text-base">
				The 8Ball API provides a simple and fun way to get mystical responses to
				yes/no questions. With this API, you can easily integrate a
				fortune-telling feature into your Discord bots, games, and other
				applications.
			</p>
			<p className="text-sm md:text-base">
				This API is RESTful and returns JSON, making it easy to integrate with
				any programming language or framework.
			</p>
		</div>
	);
}

export function GettingStartedSection() {
	return (
		<div id="getting-started" className="space-y-4 md:space-y-6">
			<h2 className="text-xl md:text-2xl font-bold tracking-tight">
				Getting Started
			</h2>
			<p className="text-sm md:text-base">
				The Magic 8 Ball API is free to use and doesn&apos;t require an API key
				for basic usage. Simply make a request to the API endpoint with your
				question, and you&apos;ll receive a response in JSON format.
			</p>
		</div>
	);
}
